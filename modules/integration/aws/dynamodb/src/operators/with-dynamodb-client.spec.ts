import { type DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { createMessage } from '@komore/message';
import { lastValueFrom, of } from '@komore/reactive';
import { mock } from 'jest-mock-extended';
import { withDynamoDBClient } from './with-dynamodb-client';

describe('With DynamoDB client operator', () => {
  it('adds the DynamoDB client to the message', async () => {
    given: 'a DynamoDB client';
    const dynamoDBClient = mock<DynamoDBClient>();
    and: 'a message observable';
    const message = createMessage('test', {});
    const message$ = of(message);

    when: 'applying the operator';
    const result = await lastValueFrom(message$.pipe(withDynamoDBClient(dynamoDBClient)));

    then: 'the DynamoDB client is stored in the message';
    expect(result.integration.aws.clients.dynamodb).toBe(dynamoDBClient);
  });
});
