/**
 * Google Cloud client result
 */
export type GoogleCloudClientResult<ResponseType, RequestType, OptionsType> = readonly [
  response: ResponseType,
  request: RequestType,
  options: OptionsType,
];
