import { type EToroLoginConfiguration } from './etoro-login-configuration';
import { type EToroLoginDataApiResponse } from './etoro-login-data-api-response';
import { type EToroLoginResponseSummary } from './etoro-login-response-summary';

/**
 * eToro login data
 */
export interface EToroLoginData {
  readonly AggregatedResult: {
    readonly ApiResponses: {
      readonly CurrentUserData: EToroLoginDataApiResponse<unknown>;
      readonly CustomerRestrictions: EToroLoginDataApiResponse<unknown>;
      readonly MirrorsUserData: EToroLoginDataApiResponse<unknown>;
      readonly PrivatePortfolio: EToroLoginDataApiResponse<unknown>;
    };
    readonly ResponseSummary: EToroLoginResponseSummary;
  };
  readonly Configuration: EToroLoginConfiguration;
}
