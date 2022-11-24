import { PartialMessage } from "@bufbuild/protobuf";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { useAServiceClient, useBServiceClient } from "./client";
import { ARequest, AResponse } from "../gen/proto/a/a_pb";
import { AService } from "../gen/proto/a/a_connectweb";
import { BRequest, BResponse } from "../gen/proto/b/b_pb";
import { BService } from "../gen/proto/b/b_connectweb";

export function useAMethodQuery(
  request: PartialMessage<ARequest>
): UseQueryResult<AResponse> {
  const client = useAServiceClient();
  return useQuery([AService.methods.aMethod.name, request], () =>
    client.aMethod(request)
  );
}

export function useBMethodQuery(
  request: PartialMessage<BRequest>
): UseQueryResult<BResponse> {
  const client = useBServiceClient();
  return useQuery([BService.methods.bMethod.name, request], () =>
    client.bMethod(request)
  );
}
