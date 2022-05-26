import { feature } from '@komore/testing';
import { expectTypeOf } from 'expect-type';
import { type TypeNames } from './type-names';

feature('Type names', {
  'All possible types are covered'() {
    expect: 'all possible types to be covered';
    const t = typeof 0;
    type AllTypes = typeof t;
    expectTypeOf<keyof TypeNames>().toEqualTypeOf<AllTypes>();
  },
});
