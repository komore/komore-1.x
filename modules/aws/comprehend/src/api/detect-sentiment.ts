import {
  DetectSentimentCommand,
  type ComprehendClient,
  type DetectSentimentCommandOutput,
} from '@aws-sdk/client-comprehend';

import { sendAwsCommand, type FixedAwsType } from '@komore/aws';

import { type DetectSentimentOptions } from './detect-sentiment-options';

type DetectSentimentCommandOutputFixed = FixedAwsType<DetectSentimentCommandOutput, 'Sentiment' | 'SentimentScore'>;

/**
 * Determines the sentiment from a text
 *
 * @param comprehendClient Comprehend client
 * @param options Options
 * @returns Detected sentiment
 * @note
 * @note {@link https://docs.aws.amazon.com/comprehend/latest/dg/API_DetectSentiment.html DetectSentiment}
 */
export function detectSentiment(
  comprehendClient: ComprehendClient,
  options: DetectSentimentOptions
): Observable<DetectSentimentCommandOutputFixed> {
  // TODO: split into multiple requests when the text is over 5000 bytes
  return sendAwsCommand(comprehendClient, new DetectSentimentCommand({
    Text,
    LanguageCode:
  }));
}
