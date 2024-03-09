/**
 * Comprehend sentiment score
 *
 * @see {@link https://docs.aws.amazon.com/comprehend/latest/APIReference/API_SentimentScore.html SentimentScore}
 */
export interface ComprehendSentimentScore {
  readonly Mixed?: number;
  readonly Negative?: number;
  readonly Neutral?: number;
  readonly Positive?: number;
}
