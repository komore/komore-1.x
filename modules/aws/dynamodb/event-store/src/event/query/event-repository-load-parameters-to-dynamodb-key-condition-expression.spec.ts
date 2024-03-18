import { type EventStoreEventRepositoryLoadParameters } from '@komore/event/store';
import { feature } from '@komore/testing';

import { dynamodbEventRepositoryQueryPlaceholders } from './dynamodb-event-repository-query-placeholders';
import { eventRepositoryLoadParametersToDynamoDBKeyConditionExpression } from './event-repository-load-parameters-to-dynamodb-key-condition-expression';

feature('Event repository load parametes to DynamoDB key condition expression', {
  'can build an event key condition expression'(sequenceStart, sequenceEnd, expectedResult) {
    given: 'load parameters with optional start and/or end sequence numbers';
    const parameters: EventStoreEventRepositoryLoadParameters = {
      aggregateKey: 'test',
      sequenceEnd,
      sequenceStart,
    };

    when: 'creating a function that returns a DynamoDB key condition expression';
    const func = eventRepositoryLoadParametersToDynamoDBKeyConditionExpression();
    and: 'calling it';
    const expression = func(parameters);

    then: 'the expression takes the presence of the start and/or end sequence number into account';
    expression === expectedResult;

    where: 'TODO';
    const ph = dynamodbEventRepositoryQueryPlaceholders;
    const data = [
      [false, false, `${ph.key.name} = ${ph.key.value}`],
      [true, false, `${ph.key.name} = ${ph.key.value} and ${ph.sequence.name} >= ${ph.sequence.start}`],
      [false, true, `${ph.key.name} = ${ph.key.value} and ${ph.sequence.name} <= ${ph.sequence.end}`],
      [
        true,
        true,
        `${ph.key.name} = ${ph.key.value} and ${ph.sequence.name} between ${ph.sequence.start} and ${ph.sequence.end}`,
      ],
    ];
  },
});
