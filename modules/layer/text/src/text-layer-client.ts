import type { RekognitionClient } from '@aws-sdk/client-rekognition';
import type { TextAnalyticsClient } from '@azure/ai-text-analytics';
import { Observable } from 'rxjs';

export type TextLayerClient = Readonly<{
  implementations: Readonly<{
    aws?: RekognitionClient;
    azure?: TextAnalyticsClient;
  }>;
}>;

function createTextLayerClient(): Observable<TextLayerClient> {

}
