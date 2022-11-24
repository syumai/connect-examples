// @generated by protoc-gen-es v0.0.10 with parameter "target=ts,ts_nocheck=false"
// @generated from file proto/b/b.proto (package syumai.connect_examples.multiple_serivces.b, syntax proto3)
/* eslint-disable */

import type {BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage} from "@bufbuild/protobuf";
import {Message, proto3} from "@bufbuild/protobuf";

/**
 * @generated from message syumai.connect_examples.multiple_serivces.b.BRequest
 */
export class BRequest extends Message<BRequest> {
  constructor(data?: PartialMessage<BRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "syumai.connect_examples.multiple_serivces.b.BRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): BRequest {
    return new BRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): BRequest {
    return new BRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): BRequest {
    return new BRequest().fromJsonString(jsonString, options);
  }

  static equals(a: BRequest | PlainMessage<BRequest> | undefined, b: BRequest | PlainMessage<BRequest> | undefined): boolean {
    return proto3.util.equals(BRequest, a, b);
  }
}

/**
 * @generated from message syumai.connect_examples.multiple_serivces.b.BResponse
 */
export class BResponse extends Message<BResponse> {
  /**
   * @generated from field: string msg = 1;
   */
  msg = "";

  constructor(data?: PartialMessage<BResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "syumai.connect_examples.multiple_serivces.b.BResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "msg", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): BResponse {
    return new BResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): BResponse {
    return new BResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): BResponse {
    return new BResponse().fromJsonString(jsonString, options);
  }

  static equals(a: BResponse | PlainMessage<BResponse> | undefined, b: BResponse | PlainMessage<BResponse> | undefined): boolean {
    return proto3.util.equals(BResponse, a, b);
  }
}

