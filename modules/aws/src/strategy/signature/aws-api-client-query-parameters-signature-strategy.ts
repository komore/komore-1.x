import { type AwsApiClientSignatureStrategy } from './aws-api-client-signature-strategy';

/**
 * Creates an AWS API client query parameters signature strategy, passing the signature via query parameters
 *
 * @returns AWS API client query parameters signature strategy
 */
export function awsApiClientQueryParametersSignatureStrategy(): AwsApiClientSignatureStrategy {
  return {};
  /*
  X-Amz-Algorithm=AWS4-HMAC-SHA256&
  X-Amz-Credential=AKIAIOSFODNN7EXAMPLE/20220830/us-east-1/ec2/aws4_request&
  X-Amz-Date=20220830T123600Z&
  X-Amz-SignedHeaders=host;x-amz-date&
  X-Amz-Signature=calculated-signature
  */
}
