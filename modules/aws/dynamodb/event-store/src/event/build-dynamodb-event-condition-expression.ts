import { dynamodbEventQueryPlaceholders } from './dynamodb-event-query-placeholders';

/**
 * Returns a condition expression based on sequence start and end requirements
 *
 * @param sequenceStart Whether to include a sequence start
 * @param sequenceEnd Whether to include a sequence end
 * @returns Condition expression
 */
export function buildDynamoDBEventConditionExpression(sequenceStart: boolean, sequenceEnd: boolean): string {
  const ph = dynamodbEventQueryPlaceholders;
  const keyTest = `${ph.key.name} = ${ph.key.value}`;
  if (sequenceStart && sequenceEnd) {
    return `${keyTest} and ${ph.sequence.name} between ${ph.sequence.start} and ${ph.sequence.end}`;
  } else if (sequenceStart) {
    return `${keyTest} and ${ph.sequence.name} >= ${ph.sequence.start}`;
  } else if (sequenceEnd) {
    return `${keyTest} and ${ph.sequence.name} <= ${ph.sequence.end}`;
  } else {
    return keyTest;
  }
}
