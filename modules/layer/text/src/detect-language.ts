import { defer } from 'rxjs';

const azureModule$ = defer(() => import('@komore/integration-azure/text-analytics').then(({ createDefaultTextAnalyticsClient, analyzeText }) => ({})));
const awsModule$ = defer(() => import('@komore/integration-amazon/rekognition').then(({ })));
export function detectLanguage() {

}
