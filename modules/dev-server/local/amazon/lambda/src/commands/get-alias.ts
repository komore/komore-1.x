import { AliasConfiguration, GetAliasRequest } from '@aws-sdk/client-lambda';
import { throwUnimplementedCommand } from '@komore/dev-server-local-amazon/service';
import { Command } from '@komore/dev-server-local-amazon/service';

/**
 * Retrieves an alias' configuration
 * @note {@link https://docs.aws.amazon.com/lambda/latest/dg/API_GetAlias.html GetAlias}
 */
export const getAlias: Command<GetAliasRequest, AliasConfiguration> = throwUnimplementedCommand('GetAlias');
// TODO
