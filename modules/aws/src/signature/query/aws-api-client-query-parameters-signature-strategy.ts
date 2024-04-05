import { type AwsApiClientSignatureStrategy } from '../aws-api-client-signature-strategy';
import { buildAwsSignatureCredentialString } from '../credential/build-aws-signature-credential-string';
import { type AwsApiClientQueryParametersSignatureStrategyOptions } from './aws-api-client-query-parameters-signature-strategy-options';

/**
 * Creates an AWS API client query parameters signature strategy, passing the signature via query parameters
 *
 * @param strategyOptions Query parameters signature strategy options
 * @returns AWS API client query parameters signature strategy
 */
export function awsApiClientQueryParametersSignatureStrategy(
  _strategyOptions: AwsApiClientQueryParametersSignatureStrategyOptions
): AwsApiClientSignatureStrategy {
  return ({
    algorithm,
    credentials: { accessKeyId },
    dateTime,
    region,
    service,
    signature: { signature, signedHeaders },
  }) => {
    const date = dateTime.toPlainDate();
    return {
      queryParameters: {
        'X-Amz-Algorithm': algorithm,
        'X-Amz-Credential': buildAwsSignatureCredentialString({ accessKeyId, date, region, service }),
        'X-Amz-SignedHeaders': signedHeaders.join(';'),
        'X-Amz-Signature': signature,
      },
    };
  };
}
