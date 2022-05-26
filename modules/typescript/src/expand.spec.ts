import { feature } from '@komore/testing';
import { expectTypeOf } from 'expect-type';
import { type Expand } from './expand';

feature('Expand', {
  'Basic usage'() {
    given: 'a type with an intersection';
    type TypeWithIntersection = { readonly x: string } & { readonly y: number };

    when: 'expanding the type';
    type ExpandedType = Expand<TypeWithIntersection>;

    expect: 'the type to have been expanded, removing the intersection';
    expectTypeOf<ExpandedType>().toEqualTypeOf<{ readonly x: string; readonly y: number }>();
  },
});
