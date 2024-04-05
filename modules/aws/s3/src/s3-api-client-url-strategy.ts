import { awsApiClientDefaultUrlStrategy, type AwsApiClientUrlStrategy } from '@komore/aws';

/**
 * Creates an S3 API client URL strategy
 *
 * @returns S3 API client URL strategy
 */
export function s3ApiClientUrlStrategy(): AwsApiClientUrlStrategy {
  const defaultUrlStrategy = awsApiClientDefaultUrlStrategy();
  return strategyParameters => {
    const { parameters } = strategyParameters;
    return typeof parameters !== 'object' || parameters === null || !('Bucket' in parameters)
      ? new URL('https://s3.amazonaws.com/')
      : defaultUrlStrategy(strategyParameters);
  };
}
