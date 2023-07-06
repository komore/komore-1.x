import { TextAnalyticsClient } from '@azure/ai-text-analytics';
import { withAzureClient } from '@komore/integration-azure';
import { createTextAnalyticsClient } from '../create-text-analytics-client';

/**
 * Adds a Text Analytics client to a message
 * @param textAnalyticsClient Text Analytics client
 * @returns Operator function that turns a message into a message with a Text Analytics client
 */
export const withTextAnalyticsClient = (textAnalyticsClient?: TextAnalyticsClient) =>
  withAzureClient('text-analytics', textAnalyticsClient ?? createTextAnalyticsClient());
