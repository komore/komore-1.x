import { Client, Command } from '@aws-sdk/smithy-client';
import { createRequest as awsSdkCreateRequest } from '@aws-sdk/util-create-request';
import { HttpRequest, MetadataBearer } from '@aws-sdk/types';
import { defer, Observable } from 'rxjs';

/**
 * Creates an HTTP request from a client command
 * @param command Command
 * @param client Client
 * @returns Observable HTTP request
 */
export function createRequest<
  InputTypesUnion extends object,
  InputType extends InputTypesUnion,
  OutputType extends MetadataBearer = MetadataBearer
>(
  command: Command<InputType, OutputType, any, InputTypesUnion, MetadataBearer>,
  client: Client<any, InputTypesUnion, MetadataBearer, any>
): Observable<HttpRequest> {
  return defer(() => awsSdkCreateRequest(client, command));
}
