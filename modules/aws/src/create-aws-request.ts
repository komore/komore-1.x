import { type HttpRequest, type MetadataBearer } from '@aws-sdk/types';
import { createRequest as awsSdkCreateRequest } from '@aws-sdk/util-create-request';
import { type Client, type Command, type SmithyResolvedConfiguration } from '@smithy/smithy-client';

import { deferPromise } from '@komore/reactive';

/**
 * Creates an AWS HTTP request from an AWS client command
 *
 * @param command Command
 * @param client Client
 * @returns Observable HTTP request
 * @template InputTypesUnion Input types union
 * @template InputType Input type
 * @template OutputType Output type
 */
export function createAwsRequest<
  InputTypesUnion extends Record<string, unknown>,
  InputType extends InputTypesUnion,
  OutputType extends MetadataBearer = MetadataBearer,
>(
  command: Command<InputType, OutputType, unknown, InputTypesUnion, MetadataBearer>,
  client: Client<unknown, InputTypesUnion, MetadataBearer, SmithyResolvedConfiguration<unknown>>
): Observable<HttpRequest> {
  return deferPromise(() => awsSdkCreateRequest(client, command));
}
