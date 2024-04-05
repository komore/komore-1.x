import { type AwsApiClientUrlStrategy } from '../aws-api-client-url-strategy';

/**
 * Creates a default AWS API client URL strategy
 *
 * @returns Default AWS API client URL strategy
 */
export function awsApiClientDefaultUrlStrategy(): AwsApiClientUrlStrategy {
  return ({ region, resourcePath = '', searchParams, service }) => {
    const endpointUrl = new URL(`https://${service}.${region}.amazonaws.com/`);
    const path = searchParams !== undefined ? `${resourcePath}?${searchParams.toString()}` : resourcePath;
    return path ? new URL(path, endpointUrl) : endpointUrl;
  };
}
