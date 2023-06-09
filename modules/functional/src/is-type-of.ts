import { type TypeNames } from '@komore/typescript';

/**
 * Creates a function that tests whether a value is of a specific type, using `typeof`
 *
 * @param typeName Type name
 * @returns Function that tests whether a value is of the specific type
 */
export function isTypeOf<TypeName extends keyof TypeNames>(
  typeName: TypeName
): (value: unknown) => value is TypeNames[TypeName] {
  return (value): value is TypeNames[TypeName] => typeof value === typeName;
}
