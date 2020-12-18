import type { TextAnalyticsClient } from '@azure/ai-text-analytics';
import { Observable } from 'rxjs';

export type TextLayerClient = Readonly<{
  implementations: Readonly<{
    aws?: 
    azure?: TextAnalyticsClient;
  }>;
}>;

function createTextLayerClient(): Observable<TextLayerClient> {

}
