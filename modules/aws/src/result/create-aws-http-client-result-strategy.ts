import { objectWithProperties } from '@komore/functional';
import { type MediaType } from '@komore/http';
import { type PickCallSignature } from '@komore/typescript';

import { type AwsApiClientResultStrategy } from './aws-api-client-result-strategy';

export function createAwsApiClientResultStrategy(
  supportedMediaTypes: ReadonlyArray<MediaType>
): (transform: PickCallSignature<AwsApiClientResultStrategy>) => AwsApiClientResultStrategy {
  const mediaTypes = new Set(supportedMediaTypes);
  return transform =>
    objectWithProperties(
      { mediaTypes },
      {
        configurable: false,
        enumerable: false,
        writable: false,
      }
    )(transform) as AwsApiClientResultStrategy;
}
