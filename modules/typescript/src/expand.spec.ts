import { expectTypeOf } from 'expect-type';
import { type Expand } from './expand';

describe('Expand', () => {
  it('can expand a type, removing intersections', () => {
    given: 'a type with an intersection';
    type TypeWithIntersection = { readonly x: string } & { readonly y: number };

    when: 'expanding the type';
    type ExpandedType = Expand<TypeWithIntersection>;

    expect: 'the type to have been expanded, removing the intersection';
    expectTypeOf<ExpandedType>().toEqualTypeOf<{ readonly x: string; readonly y: number }>();
  });
});
