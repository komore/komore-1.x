import { type TranslateTextCommandInput } from '@aws-sdk/client-translate';

import { createAwsCommandType } from '@komore/aws';
import { commandProperties } from '@komore/command';

import { translateDomain } from './translate.domain';

/**
 * Translate command
 */
export const translateCommand = createAwsCommandType(translateDomain, {
  /**
   * Translates input text from a source language to a target language
   *
   * @see {@link https://docs.aws.amazon.com/translate/latest/APIReference/API_TranslateText.html TranslateText}
   */
  translateText: commandProperties<TranslateTextCommandInput>(),
});
