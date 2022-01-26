import { deferPromise } from '@komore/reactive';

const azureModule$ = deferPromise(() => import('@komore/integration-azure/text-analytics').then(({ createDefaultTextAnalyticsClient, analyzeText }) => ({})));

export function detectSentiment() {

}
