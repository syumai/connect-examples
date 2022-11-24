import {
  createPromiseClient,
  PromiseClient,
  Transport,
} from "@bufbuild/connect-web";
import React, { FC, useContext, useMemo } from "react";
import { AService } from "../gen/proto/a/a_connectweb";
import { BService } from "../gen/proto/b/b_connectweb";

type ClientProviderProps = {
  transport: Transport;
  children?: React.ReactNode;
};

const AServiceClientContext = React.createContext<
  PromiseClient<typeof AService> | undefined
>(undefined);

export const AServiceClientProvider: FC<ClientProviderProps> = ({
  transport,
  children,
}) => {
  const client = useMemo(
    () => createPromiseClient(AService, transport),
    [transport]
  );
  return (
    <AServiceClientContext.Provider value={client}>
      {children}
    </AServiceClientContext.Provider>
  );
};

export const useAServiceClient = (): PromiseClient<typeof AService> => {
  const client = useContext(AServiceClientContext);
  if (!client) {
    throw new Error(
      "AServiceClient must be set, use AServiceClientProvider to provide one"
    );
  }
  return client;
};

const BServiceClientContext = React.createContext<
  PromiseClient<typeof BService> | undefined
>(undefined);

export const BServiceClientProvider: FC<ClientProviderProps> = ({
  transport,
  children,
}) => {
  const client = useMemo(
    () => createPromiseClient(BService, transport),
    [transport]
  );
  return (
    <BServiceClientContext.Provider value={client}>
      {children}
    </BServiceClientContext.Provider>
  );
};

export const useBServiceClient = (): PromiseClient<typeof BService> => {
  const client = useContext(BServiceClientContext);
  if (!client) {
    throw new Error(
      "BServiceClient must be set, use BServiceClientProvider to provide one"
    );
  }
  return client;
};
