import { translateDomain } from '@komore/aws/translate';
import { commandProperties, createCommandType } from '@komore/command';

/**
 * Translate command
 */
export const translateCommand = createCommandType(translateDomain, {
  /**
   * Translates input text from a source language to a target language
   *
   * @see {@link https://docs.aws.amazon.com/translate/latest/APIReference/API_TranslateText.html TranslateText}
   */
  translateText: commandProperties<TranslateTextCommandInput>(),
});
