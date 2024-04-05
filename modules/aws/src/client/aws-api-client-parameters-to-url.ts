import { type AwsApiClientBaseParameters } from './aws-api-client-base-parameters';
import { type AwsApiClientParametersToUrlOptions } from './aws-api-client-parameters-to-url-options';

/**
 * Creates a function that returns a URL, given AWS API client parameters
 *
 * @param options Options
 * @returns Function that returns a URL, given AWS API client parameters
 * @private
 */
export function awsApiClientParametersToUrl(
  options: AwsApiClientParametersToUrlOptions
): (parameters: AwsApiClientBaseParameters) => URL {
  const { defaultRegion, service, urlStrategy } = options;
  return ({ parameters, region = defaultRegion, resourcePath = '', searchParams }) =>
    urlStrategy({
      ...(parameters !== undefined ? { parameters } : {}),
      region,
      resourcePath,
      service,
      ...(searchParams ? { searchParams } : {}),
    });
}
