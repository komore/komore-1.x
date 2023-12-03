/**
 * API Gateway event identity
 */
export interface ApiGatewayEventIdentity {
  // TODO: verify which ones can really be null and when
  readonly accessKey: string | null;
  readonly accountId: string | null;
  readonly apiKey: string | null;
  readonly apiKeyId: string | null;
  readonly caller: string | null;
  readonly cognitoAuthenticationProvider: string | null;
  readonly cognitoAuthenticationType: string | null;
  readonly cognitoIdentityId: string | null;
  readonly cognitoIdentityPoolId: string | null;
  readonly principalOrgId: string | null;
  readonly sourceIp: string;
  readonly user: string | null;
  readonly userAgent: string | null;
  readonly userArn: string | null;
}
