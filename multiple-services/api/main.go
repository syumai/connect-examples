package main

import (
	"context"
	"errors"
	"fmt"
	"log"
	"net/http"
	"os"
	"os/signal"
	"syscall"
	"time"

	"github.com/rs/cors"
	"github.com/syumai/connect-examples/multiple-services/api/gen/proto/a/aconnect"
	"github.com/syumai/connect-examples/multiple-services/api/gen/proto/b/bconnect"
	"golang.org/x/net/http2"
	"golang.org/x/net/http2/h2c"
)

func main() {
	mux := http.NewServeMux()
	{
		path, handler := aconnect.NewAServiceHandler(&AServer{})
		mux.Handle(path, handler)
	}
	{
		path, handler := bconnect.NewBServiceHandler(&BServer{})
		mux.Handle(path, handler)
	}

	ctx, stop := signal.NotifyContext(context.Background(), os.Interrupt, syscall.SIGTERM)
	defer stop()

	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}
	addr := fmt.Sprintf(":%s", port)
	s := http.Server{
		Addr:              addr,
		Handler:           cors.Default().Handler(h2c.NewHandler(mux, &http2.Server{})),
		ReadHeaderTimeout: time.Second,
		ReadTimeout:       5 * time.Minute,
		WriteTimeout:      5 * time.Minute,
		MaxHeaderBytes:    8 * 1024, // 8KiB
	}

	go func() {
		<-ctx.Done()
		ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
		defer cancel()
		s.Shutdown(ctx)
	}()

	fmt.Printf("listening server on %s\n", addr)
	if err := s.ListenAndServe(); !errors.Is(err, http.ErrServerClosed) {
		log.Fatal(err)
	}
}
