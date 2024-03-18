import { feature } from '@komore/testing';

import { normalizeDynamoDBEventRepositoryAttributeNames } from './normalize-dynamodb-event-repository-attribute-names';

feature('Normalize DynamoDB event repository attribute names', {
  'works todo'() {
    normalizeDynamoDBEventRepositoryAttributeNames();
  },
});
