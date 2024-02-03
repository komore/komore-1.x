import { type Client, type Command, type SmithyResolvedConfiguration } from '@aws-sdk/smithy-client';
import { type HttpRequest, type MetadataBearer } from '@aws-sdk/types';
import { createRequest } from '@aws-sdk/util-create-request';

import { fromPromise } from '@komore/reactive';

export function toRequest<InputTypesUnion extends Record<string, unknown>>(
  client: Client<unknown, InputTypesUnion, MetadataBearer, SmithyResolvedConfiguration<unknown>>
): <InputType extends InputTypesUnion, OutputType extends MetadataBearer = MetadataBearer>(
  command: Command<InputType, OutputType, unknown, InputTypesUnion, MetadataBearer>
) => Observable<HttpRequest> {
  return command => fromPromise(createRequest(client, command));
}
