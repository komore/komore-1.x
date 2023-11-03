import { type GetAccountCommand } from '@aws-sdk/client-sesv2';

import { awsQueryProperties, createAwsQueryType } from '@komore/aws';

import { sesDomain } from './ses.domain';

/**
 * SES query
 */
export const sesQuery = createAwsQueryType(sesDomain, {
  /**
   * Returns information about the Amazon SES account in the current region
   *
   * @note {@link https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_GetAccount.html GetAccount}
   */
  getAccount: awsQueryProperties<GetAccountCommand>(),
});
