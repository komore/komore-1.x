import { type TextAnalyticsClient } from '@azure/ai-text-analytics';
import { deferPromise } from '@komore/reactive';

/**
 * Analyses the sentiment found in text inputs
 * @param textAnalysisClient Text Analysis client
 * @param parameters Text Analysis client `analyzeSentiment` parameters
 * @note {@link https://docs.microsoft.com/en-us/javascript/api/%40azure/ai-text-analytics/textanalyticsclient?view=azure-node-latest#analyzeSentiment_TextDocumentInput____AnalyzeSentimentOptions_ TextAnalyticsClient.analyzeSentiment}
 */
export function analyzeSentiment(
  textAnalysisClient: TextAnalyticsClient,
  ...parameters: Parameters<TextAnalyticsClient['analyzeSentiment']>
) {
  return deferPromise(() => textAnalysisClient.analyzeSentiment(...parameters));
}
