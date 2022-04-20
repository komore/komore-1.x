import { deferPromise } from '@komore/reactive';
import { type TextAiLayer } from './text-ai-layer';

const azureModule$ = deferPromise(() => import('@komore/integration-azure/text-analytics').then(({ createDefaultTextAnalyticsClient, analyzeText }) => ({})));

export function detectTextSentiment(layer: TextAiLayer) {

}
