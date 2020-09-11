import { Client, Command } from '@aws-sdk/smithy-client';
import { HttpRequest, MetadataBearer } from '@aws-sdk/types';
import { UnaryFunction, Observable, pipe } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { createRequest } from './create-request';

/**
 * Creates a request with a specific client
 * @param client Client
 * @returns Function that merge maps commands to requests
 */
export function createRequestWith<
  InputTypesUnion extends object,
  InputType extends InputTypesUnion,
  OutputType extends MetadataBearer = MetadataBearer
>(
  client: Client<any, InputTypesUnion, MetadataBearer, any>
): UnaryFunction<
  Observable<Command<InputType, OutputType, any, InputTypesUnion, MetadataBearer>>,
  Observable<HttpRequest>
> {
  return pipe(mergeMap(command => createRequest(command, client)));
}
