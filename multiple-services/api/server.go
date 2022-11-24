package main

import (
	"context"

	"github.com/bufbuild/connect-go"
	"github.com/syumai/connect-examples/multiple-services/api/gen/proto/a"
	"github.com/syumai/connect-examples/multiple-services/api/gen/proto/a/aconnect"
	"github.com/syumai/connect-examples/multiple-services/api/gen/proto/b"
	"github.com/syumai/connect-examples/multiple-services/api/gen/proto/b/bconnect"
)

type (
	AServer struct{}
	BServer struct{}
)

var _ aconnect.AServiceHandler = &AServer{}

func (as AServer) AMethod(ctx context.Context, req *connect.Request[a.ARequest]) (*connect.Response[a.AResponse], error) {
	return connect.NewResponse(&a.AResponse{Msg: "message from A"}), nil
}

var _ bconnect.BServiceHandler = &BServer{}

func (bs BServer) BMethod(ctx context.Context, req *connect.Request[b.BRequest]) (*connect.Response[b.BResponse], error) {
	return connect.NewResponse(&b.BResponse{Msg: "message from B"}), nil
}
