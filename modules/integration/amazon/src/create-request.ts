import type { Client, Command, SmithyResolvedConfiguration } from '@aws-sdk/smithy-client';
import type { HttpRequest, MetadataBearer } from '@aws-sdk/types';
import { createRequest as awsSdkCreateRequest } from '@aws-sdk/util-create-request';
import type { Observable } from '@komore/reactive';
import { defer } from '@komore/reactive';

/**
 * Creates an HTTP request from a client command
 * @param command Command
 * @param client Client
 * @returns Observable HTTP request
 * @template InputTypesUnion Input types union
 * @template InputType Input type
 * @template OutputType Output type
 */
export function createRequest<
  InputTypesUnion extends Record<string, unknown>,
  InputType extends InputTypesUnion,
  OutputType extends MetadataBearer = MetadataBearer
>(
  command: Command<InputType, OutputType, unknown, InputTypesUnion, MetadataBearer>,
  client: Client<unknown, InputTypesUnion, MetadataBearer, SmithyResolvedConfiguration<unknown>>
): Observable<HttpRequest> {
  return defer(() => awsSdkCreateRequest(client, command));
}
