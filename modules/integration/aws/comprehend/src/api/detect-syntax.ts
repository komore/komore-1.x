import {
  DetectSyntaxCommand,
  type ComprehendClient,
  type DetectSyntaxCommandInput,
  type SyntaxToken,
} from '@aws-sdk/client-comprehend';
import { sendAwsCommand, type FixedAwsType } from '@komore/integration-aws';
import { map, type Observable } from '@komore/reactive';

type DetectSyntaxCommandInputFixed = FixedAwsType<DetectSyntaxCommandInput, 'LanguageCode' | 'Text'>;

/**
 * Inspects text for syntax and of part of speech of words
 *
 * @param comprehendClient Comprehend client
 * @param commandInput `DetectSyntax` command input
 * @returns List of syntax tokens
 * @note {@link https://docs.aws.amazon.com/comprehend/latest/dg/API_DetectSyntax.html DetectSyntax}
 */
export function detectSyntax(
  comprehendClient: ComprehendClient,
  commandInput: DetectSyntaxCommandInputFixed
): Observable<ReadonlyArray<SyntaxToken>> {
  return sendAwsCommand(comprehendClient, new DetectSyntaxCommand(commandInput)).pipe(
    map(output => output.SyntaxTokens ?? [])
  );
}
