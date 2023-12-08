import { testDomain } from '@komore/domain/testing';
import { feature } from '@komore/testing';

import { createQueryType } from '../type/create-query-type';
import { queryProperties } from '../properties/query-properties';

feature('Query from creator', () => {
  const queryType = createQueryType(testDomain, { test: queryProperties<{ testProp: string }>() });
  queryType;
});
