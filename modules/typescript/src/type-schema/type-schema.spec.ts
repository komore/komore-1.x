import { expectTypeOf } from 'expect-type';
import type { _TypeSchema } from './type-schema';
import { _typeSchema } from './type-schema';
import { typeSchemaTypeName } from './type-schema-symbol';

describe('_typeSchema function', () => {
  it('can define a type schema', () => {
    given: 'a schema type name and type'
    const schemaTypeName = 'test-type' as const;
    type SchemaType = { x: number };
    when: 'creating a type schema'
    const typeSchema = _typeSchema<typeof schemaTypeName, { x: number }>(schemaTypeName);
    expect: 'a property typed type schema to be created'
    expect(typeSchema[typeSchemaTypeName]).toBe(schemaTypeName);
    expectTypeOf(typeSchema).toEqualTypeOf<_TypeSchema<'test-type', SchemaType>>();
  });
});
