import { expectTypeOf } from 'expect-type';
import { feature } from '@komore/testing';

import { fromArray } from './from-array';

feature('From array', () => {
  it('todo', () => {
    fromArray([1, 2, 3]);
  });

  it('todo2', () => {
    const $ = fromArray([]);
    expectTypeOf($).toEqualTypeOf<Observable<never>>();
  });
});
