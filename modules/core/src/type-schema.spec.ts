import { expectTypeOf } from 'expect-type'; // TODO: implicit
import { _typeSchema, _TypeSchema } from './type-schema';

/**
 * Type schema function specification
 */
describe('_typeSchema function', () => {
  it('can define a type schema', () => {
    // given: a type
    const schemaTypeName = 'test-type' as const;
    type SchemaType = { x: number };
    // when: 
    const typeSchema = _typeSchema<typeof schemaTypeName, SchemaType>(schemaTypeName);
    // then: 
    expect(typeSchema._t).toBe(schemaTypeName);
    expectTypeOf(typeSchema).toEqualTypeOf<_TypeSchema<'test-type', SchemaType>>();
  });
});
