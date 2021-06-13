import type {
  CognitoEvent,
  CognitoEventMap,
  CognitoEventRequestType,
  CognitoEventResponseType
} from '@komore/function-lambda';

/**
 * Creates a test Cognito event
 * @param triggerSource Trigger source
 * @param request Request
 * @param response Response
 * @returns Cognito event
 * @template TriggerSourceName Trigger source name
 */
export function createTestCognitoEvent<TriggerSourceName extends keyof CognitoEventMap>(
  triggerSource: TriggerSourceName,
  request: CognitoEventRequestType<TriggerSourceName>,
  response: CognitoEventResponseType<TriggerSourceName>
): CognitoEvent<TriggerSourceName> {
  const awsSdkVersion = 'TODO: test real values';
  const clientId = 'TODO: test real values';
  const region = 'us-east-1';
  const userName = 'test-user';
  const userPoolId = 'TODO: test real values';
  const version = 'TODO: test real values';

  return {
    callerContext: {
      awsSdkVersion,
      clientId
    },
    region,
    request,
    response,
    triggerSource,
    userName,
    userPoolId,
    version
  };
}
