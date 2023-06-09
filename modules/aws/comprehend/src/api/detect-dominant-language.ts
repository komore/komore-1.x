import {
  DetectDominantLanguageCommand,
  type ComprehendClient,
  type DominantLanguage,
} from '@aws-sdk/client-comprehend';
import { sendAwsCommand } from '@komore/integration-aws';
import { map, type Observable } from '@komore/reactive';

/**
 * Determines the dominant languages used in a text
 *
 * @param comprehendClient Comprehend client
 * @param text Text from which to detect languages
 * @returns List of detected dominant languages along with a confidence score
 * @note {@link https://docs.aws.amazon.com/comprehend/latest/dg/API_DetectDominantLanguage.html DetectDominantLanguage}
 */
export function detectDominantLanguage(
  comprehendClient: ComprehendClient,
  text: string
): Observable<ReadonlyArray<DominantLanguage>> {
  return sendAwsCommand(comprehendClient, new DetectDominantLanguageCommand({ Text: text })).pipe(
    map(output => output.Languages ?? [])
  );
}
