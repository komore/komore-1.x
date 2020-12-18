import { ComprehendClient, DetectSyntaxCommand, DetectSyntaxCommandInput } from '@aws-sdk/client-comprehend';
import { sendCommand } from '@komore/integration-aws';

/**
 * Inspects text for syntax and of part of speech of words
 * @param comprehendClient Comprehend client
 * @param commandInput `DetectSyntax` command input
 * @returns List of syntax tokens
 * @note {@link https://docs.aws.amazon.com/comprehend/latest/dg/API_DetectSyntax.html DetectSyntax}
 */
export const detectSyntax = (comprehendClient: ComprehendClient, commandInput: DetectSyntaxCommandInput) =>
  sendCommand(comprehendClient, new DetectSyntaxCommand(commandInput));
