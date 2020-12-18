import { GetAccountSettingsRequest, GetAccountSettingsResponse } from '@aws-sdk/client-lambda';
import { Command } from '@komore/dev-server-local-amazon/service';
import { mapTo } from 'rxjs/dist/types/operators';

const MAX_INT = Number.MAX_SAFE_INTEGER;
const accountSettings: GetAccountSettingsResponse = {
  AccountLimit: {
    CodeSizeUnzipped: MAX_INT,
    CodeSizeZipped: MAX_INT,
    ConcurrentExecutions: MAX_INT,
    TotalCodeSize: MAX_INT,
    UnreservedConcurrentExecutions: MAX_INT
  },
  AccountUsage: {
    FunctionCount: MAX_INT
  }
};

/**
 * Retrieves details about the account's limits
 * @note {@link https://docs.aws.amazon.com/lambda/latest/dg/API_GetAccountSettings.html GetAccountSettings}
 */
export const getAccountSettings: Command<GetAccountSettingsRequest, GetAccountSettingsResponse> = mapTo(
  accountSettings
);
