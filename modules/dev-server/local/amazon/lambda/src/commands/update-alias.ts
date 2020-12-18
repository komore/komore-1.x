import { AliasConfiguration, UpdateAliasRequest } from '@aws-sdk/client-lambda';
import { Command, throwUnimplementedCommand } from '@komore/dev-server-local-amazon/service';

/**
 * Updates a Lambda function alias
 * @note {@link https://docs.aws.amazon.com/lambda/latest/dg/API_UpdateAlias.html UpdateAlias}
 */
export const updateAlias: Command<UpdateAliasRequest, AliasConfiguration> = throwUnimplementedCommand('UpdateAlias');
