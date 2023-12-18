import { type testDomain } from '@komore/domain/testing';
import { feature } from '@komore/testing';
import { type TypeCreator } from '@komore/typescript';

import { type Query } from '../query';
import { type QueryCreator } from './query-creator';

feature('Query creator', {
  todo() {
    type QueryName = 'testQuery';
    type QueryParameters = { test: string };
    type QueryResult = { result: number };
    type QueryType = Query<typeof testDomain, QueryName, [QueryResult, QueryParameters]>;
    type TestQueryCreator = QueryCreator<QueryName, TypeCreator<QueryParameters, QueryType>>;
    type _T = TestQueryCreator;
  },
});
