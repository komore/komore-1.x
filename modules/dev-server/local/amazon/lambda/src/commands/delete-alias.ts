import { AliasConfiguration, CreateAliasRequest } from '@aws-sdk/client-lambda';
import { throwUnimplementedCommand } from '@komore/dev-server-local-amazon/service';
import { Command } from '@komore/dev-server-local-amazon/service';

/**
 * Deletes an alias
 * @note {@link https://docs.aws.amazon.com/lambda/latest/dg/API_DeleteAlias.html DeleteAlias}
 */
export const deleteAlias: Command<CreateAliasRequest, AliasConfiguration> = throwUnimplementedCommand(
  'DeleteAlias'
);
// TODO
