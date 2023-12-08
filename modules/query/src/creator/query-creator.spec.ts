import { feature } from '@komore/testing';

import { type QueryCreator } from './query-creator';

feature('Query creator', {
  todo() {
    type QueryName = 'testQuery';
    type QueryParameters = { test: string };
    type TestQueryCreator = QueryCreator<QueryName, QueryParameters, unknown>;
  },
});
