import { type AdyenApiClientApiOptions } from './adyen-api-client-api-options';
import { type AdyenApiClientApiVersions } from './adyen-api-client-api-versions';

export type AdyenApiClientApisOptions = {
  readonly [ApiName in keyof AdyenApiClientApiVersions]: AdyenApiClientApiOptions<ApiName>;
};
