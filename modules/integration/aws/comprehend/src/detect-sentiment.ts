import { ComprehendClient, DetectSentimentCommand, DetectSentimentCommandInput } from '@aws-sdk/client-comprehend';
import { sendCommand } from '@komore/integration-aws';

/**
 * Determines the sentiment from a text
 * @param comprehendClient Comprehend client
 * @param commandInput `DetectSentiment` command input
 * @returns Detected sentiment
 * @note {@link https://docs.aws.amazon.com/comprehend/latest/dg/API_DetectSentiment.html DetectSentiment}
 */
export const detectSentiment = (comprehendClient: ComprehendClient, commandInput: DetectSentimentCommandInput) =>
  sendCommand(comprehendClient, new DetectSentimentCommand(commandInput));
