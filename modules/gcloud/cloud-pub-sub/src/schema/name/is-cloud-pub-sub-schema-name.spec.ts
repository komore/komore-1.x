import { feature } from '@komore/testing';

import { isCloudPubSubSchemaName } from './is-cloud-pub-sub-schema-name';

feature('Is Cloud Pub/Sub schema name', {
  'returns true when a string is a valid schema name'(schemaName: string, expectedResult: boolean) {
    when: 'testing whether a string is a valid Cloud Pub/Sub schema name';
    const result = isCloudPubSubSchemaName(schemaName);

    expect: 'true to be returned if the string is a valid schema name';
    result === expectedResult;

    where: [
      ['test', false],
      ['test5', true],
    ];
  },
});
