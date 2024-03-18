import { type ListLanguagesCommand } from '@aws-sdk/client-translate';

import { awsQueryProperties, createAwsQueryType } from '@komore/aws';

import { translateDomain } from './translate.domain';

/**
 * Translate query
 */
export const translateQuery = createAwsQueryType(translateDomain, {
  /**
   * Returns the list of supported languages (RFC-5646 codes and names)
   *
   * @see {@link https://docs.aws.amazon.com/translate/latest/APIReference/API_ListLanguages.html ListLanguages}
   */
  listLanguages: awsQueryProperties<ListLanguagesCommand>(),
});
