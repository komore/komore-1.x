import { createAuthorizationHttpHeader } from '@komore/http';

import { type AwsApiClientSignatureStrategy } from '../aws-api-client-signature-strategy';
import { buildAwsSignatureCredentialString } from '../credential/build-aws-signature-credential-string';
import { type AwsApiClientHeaderSignatureStrategyOptions } from './aws-api-client-header-signature-strategy-options';

/**
 * Creates an AWS API client header signature strategy, passing the signature via an `authorization` HTTP header
 *
 * @param strategyOptions Header signature strategy options
 * @returns AWS API client header signature strategy
 */
export function awsApiClientHeaderSignatureStrategy(
  _strategyOptions: AwsApiClientHeaderSignatureStrategyOptions
): AwsApiClientSignatureStrategy {
  return ({
    algorithm: authorizationScheme,
    credentials: { accessKeyId },
    dateTime,
    region,
    service,
    signature: { signature, signedHeaders },
  }) => {
    const date = dateTime.toPlainDate();
    const credential = buildAwsSignatureCredentialString({ accessKeyId, date, region, service });
    const properties = [
      ['Credential', credential],
      ['SignedHeaders', signedHeaders.join(';')],
      ['Signature', signature],
    ];
    const authorizationParameters = properties.map(([name, value]) => `${name}=${value}`).join(', ');
    const authorizationHttpHeader = createAuthorizationHttpHeader(authorizationScheme, authorizationParameters);
    return {
      headers: [authorizationHttpHeader],
    };
  };
}
