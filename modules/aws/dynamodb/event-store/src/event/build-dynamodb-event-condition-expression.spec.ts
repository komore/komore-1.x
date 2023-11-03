import { buildDynamoDBEventConditionExpression } from './build-dynamodb-event-condition-expression';
import { dynamodbEventQueryPlaceholders } from './dynamodb-event-query-placeholders';

describe('Build DynamoDB event condition expression', () => {
  const ph = dynamodbEventQueryPlaceholders;

  it.each([
    [false, false, `${ph.key.name} = ${ph.key.value}`],
    [true, false, `${ph.key.name} = ${ph.key.value} and ${ph.sequence.name} >= ${ph.sequence.start}`],
    [false, true, `${ph.key.name} = ${ph.key.value} and ${ph.sequence.name} <= ${ph.sequence.end}`],
    [
      true,
      true,
      `${ph.key.name} = ${ph.key.value} and ${ph.sequence.name} between ${ph.sequence.start} and ${ph.sequence.end}`,
    ],
  ])('can build an event condition expression', (start, end, expectedResult) => {
    given: 'the presence of a start and/or end sequence number';

    when: 'building a DynamoDB event condition expression';
    const expression = buildDynamoDBEventConditionExpression(start, end);

    then: 'the expression takes the presence of the start and/or end sequence number into account';
    expect(expression).toBe(expectedResult);
  });
});
