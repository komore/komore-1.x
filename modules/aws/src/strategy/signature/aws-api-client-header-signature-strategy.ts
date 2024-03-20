import { type AwsApiClientSignatureStrategy } from './aws-api-client-signature-strategy';

/**
 * Creates an AWS API client header signature strategy, passing the signature via an `authorization` HTTP header
 *
 * @returns AWS API client header signature strategy
 */
export function awsApiClientHeaderSignatureStrategy(): AwsApiClientSignatureStrategy {
  return {};
}
