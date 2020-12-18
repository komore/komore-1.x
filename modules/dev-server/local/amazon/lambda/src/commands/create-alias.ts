import { AliasConfiguration, CreateAliasRequest } from '@aws-sdk/client-lambda';
import { Command, throwUnimplementedCommand } from '@komore/dev-server-local-amazon/service';

/**
 * Creates an alias
 * @note {@link https://docs.aws.amazon.com/lambda/latest/dg/API_CreateAlias.html CreateAlias}
 */
export const createAlias: Command<CreateAliasRequest, AliasConfiguration> = throwUnimplementedCommand(
  'CreateAlias'
);
// TODO
