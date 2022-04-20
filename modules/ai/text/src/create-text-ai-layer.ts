import { deferPromise, map, mapErrorTo, type Observable } from '@komore/reactive';
import { type ReadonlyRecord } from '@komore/typescript';
import { TextAiLayer } from './text-ai-layer';
import { TextAiLayerOptions } from './text-ai-layer-options';

/**
 * Creates a text AI layer
 *
 * @param options Options
 * @returns Text AI layer
 */
export function createTextAiLayer(options?: Partial<TextAiLayerOptions>): Observable<TextAiLayer> {
  type LayerLoader = () => Promise<TextAiLayer>;
  const layerLoaders: ReadonlyRecord<TextAiLayerOptions['platform'], LayerLoader> = {
    'aws': () => import('@komore/integration-aws/comprehend').then(m => m.createAwsTextAiLayer),
    'azure': () => import('@komore/integration-azure/text-analytics').then(m => m.createAzureTextAiLayer),
    'gcloud': () => import('@komore/integration-gcloud/cloud-natural-language').then(m => m.createGoogleCloudTextAiLayer)
  };

  const platform = options?.platform;
  const availablePlatforms;
}

function loadAwsTextAiLayer(): Observable<TextAiLayer | undefined> {
  return deferPromise(() => import('@komore/integration-aws/comprehend')).pipe(
    map(({ createAwsTextAiLayer }) => createAwsTextAiLayer()),
    mapErrorTo(undefined)
  );
}

function loadAzureTextAiLayer(): Observable<TextAiLayer | undefined> {
  return defer
}
