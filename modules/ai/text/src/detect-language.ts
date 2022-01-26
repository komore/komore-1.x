import { deferPromise } from '@komore/reactive';

const azureModule$ = deferPromise(() => import('@komore/integration-azure/text-analytics').then(({ createDefaultTextAnalyticsClient, analyzeText }) => ({})));
const awsModule$ = deferPromise(() => import('@komore/integration-amazon/rekognition').then(({ })));
export function detectLanguage() {

}
