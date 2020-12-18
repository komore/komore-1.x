import { ListAliasesRequest, ListAliasesResponse } from '@aws-sdk/client-lambda';
import { Command, throwUnimplementedCommand } from '@komore/dev-server-local-amazon/service';

/**
 * Lists available aliases for a Lambda function
 * @note {@link https://docs.aws.amazon.com/lambda/latest/dg/API_ListAliases.html ListAliases}
 */
export const listAliases: Command<ListAliasesRequest, ListAliasesResponse> = throwUnimplementedCommand('ListAliases');
