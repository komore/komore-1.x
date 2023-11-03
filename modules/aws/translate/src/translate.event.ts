import { type TranslateTextCommandOutput } from '@aws-sdk/client-translate';

import { createAwsEventType } from '@komore/aws';
import { eventProperties } from '@komore/event';

import { translateDomain } from './translate.domain';

/**
 * Translate event
 */
export const translateEvent = createAwsEventType(translateDomain, {
  /**
   * Input text has been translated from a source language to a target language
   *
   * @see {@link https://docs.aws.amazon.com/translate/latest/APIReference/API_TranslateText.html TranslateText}
   */
  textTranslated: eventProperties<TranslateTextCommandOutput>(),
});
