import "./App.css";
import { FC } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createConnectTransport } from "@bufbuild/connect-web";
import { Hero } from "./Hero";
import { AServiceClientProvider, BServiceClientProvider } from "./client";
import { A } from "./A";
import { B } from "./B";

const queryClient = new QueryClient();
const transport = createConnectTransport({
  baseUrl: import.meta.env.VITE_API_BASE_URL || "http://localhost:8080",
});

const App: FC = () => (
  <div className="app">
    <QueryClientProvider client={queryClient}>
      <AServiceClientProvider transport={transport}>
        <BServiceClientProvider transport={transport}>
          <Hero />
          <A />
          <B />
        </BServiceClientProvider>
      </AServiceClientProvider>
    </QueryClientProvider>
  </div>
);

export default App;
