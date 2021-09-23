import type { Client, Command, SmithyResolvedConfiguration } from '@aws-sdk/smithy-client';
import type { HttpRequest, MetadataBearer } from '@aws-sdk/types';
import { createRequest } from '@aws-sdk/util-create-request';
import type { Observable } from '@komore/reactive';
import { fromPromise } from '@komore/reactive/promise';

export function toRequest<InputTypesUnion extends Record<string, unknown>>(
  client: Client<unknown, InputTypesUnion, MetadataBearer, SmithyResolvedConfiguration<unknown>>
): <InputType extends InputTypesUnion, OutputType extends MetadataBearer = MetadataBearer>(
  command: Command<InputType, OutputType, unknown, InputTypesUnion, MetadataBearer>
) => Observable<HttpRequest> {
  return command => fromPromise(createRequest(client, command));
}
