import { type ComprehendSentiment } from './comprehend-sentiment';
import { type ComprehendSentimentScore } from './comprehend-sentiment-score';

/**
 * Detect Comprehend sentiment result
 *
 * @see {@link https://docs.aws.amazon.com/comprehend/latest/APIReference/API_DetectSentiment.html#API_DetectSentiment_ResponseElements DetectSentiment Response Elements}
 */
export interface DetectComprehendSentimentResult {
  /**
   * Language code
   */
  readonly Sentiment: ComprehendSentiment;
  /**
   * Sentiment score
   */
  readonly SentimentScore: ComprehendSentimentScore;
  // TODO: inline into a DetectComprehendSentimentResult<T> if the available key depends on Sentiment
}
