import { defer } from 'rxjs';

const azureModule$ = defer(() => import('@komore/integration-azure/text-analytics').then(({ createDefaultTextAnalyticsClient, analyzeText }) => ({})));

export function detectLanguage() {

}
