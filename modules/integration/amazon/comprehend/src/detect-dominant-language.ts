import {
  type ComprehendClient,
  DetectDominantLanguageCommand,
  type DetectDominantLanguageCommandInput
} from '@aws-sdk/client-comprehend';
import { sendCommand } from '@komore/integration-amazon';

/**
 * Determines the dominant languages used in a text
 * @param comprehendClient Comprehend client
 * @param commandInput `DetectDominantLanguage` command input
 * @returns List of detected dominant languages
 * @note {@link https://docs.aws.amazon.com/comprehend/latest/dg/API_DetectDominantLanguage.html DetectDominantLanguage}
 */
export const detectDominantLanguage = (
  comprehendClient: ComprehendClient,
  commandInput: DetectDominantLanguageCommandInput
) => sendCommand(comprehendClient, new DetectDominantLanguageCommand(commandInput));
