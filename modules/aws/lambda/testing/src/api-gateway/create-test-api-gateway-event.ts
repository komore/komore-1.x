import { type ApiGatewayEvent } from '@komore/aws/lambda/api-gateway';

/**
 * Creates a test API gateway event
 *
 * @param event Partial API gateway event, optionally with an object body
 * @returns API gateway event
 */
export function createTestApiGatewayEvent(
  event: Partial<Omit<ApiGatewayEvent, 'body'>> & { readonly body?: unknown }
): ApiGatewayEvent {
  const defaults: Omit<ApiGatewayEvent, 'body'> = {
    headers: {},
    httpMethod: 'GET',
    isBase64Encoded: false,
    multiValueHeaders: {},
    multiValueQueryStringParameters: {},
    path: '/',
    pathParameters: {},
    queryStringParameters: {},
    resource: '',
    requestContext: {
      accountId: 'test-account-id',
      apiId: 'test-api-id',
      httpMethod: 'TODO-check-actual-value',
      identity: {
        // TODO
        accessKey: null,
        accountId: null,
        apiKey: null,
        apiKeyId: null,
        caller: null,
        cognitoAuthenticationProvider: null,
        cognitoAuthenticationType: null,
        cognitoIdentityId: null,
        cognitoIdentityPoolId: null,
        principalOrgId: null,
        sourceIp: '127.0.0.1',
        user: null,
        userAgent: null,
        userArn: null,
      },
      path: 'TODO: check-actual-value',
      protocol: 'TODO: check-actual-value',
      stage: 'test-stage',
      requestId: 'test-uuid',
      requestTimeEpoch: 0,
      resourceId: 'TODO: check-actual-value',
      resourcePath: 'TODO: check-actual-value',
    },
    stageVariables: {},
  };
  const body =
    event.body === undefined || event.body === null
      ? null
      : typeof event.body === 'string'
        ? event.body
        : JSON.stringify(event.body);

  return {
    ...defaults,
    ...event,
    requestContext: {
      ...defaults.requestContext,
      ...event.requestContext,
    },
    body,
  };
}
