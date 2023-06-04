import { type Domain } from '@komore/domain';
import { type ReadonlyRecord } from '@komore/typescript';

import { ErrorType } from '../error-type';
import { ErrorGroup } from '../group/error-group';

/**
 * Defines an error type
 *
 * @param groupName Group name
 * @param typeName Type name
 * @template ErrorGroupName Error group name
 * @template ContextByCode Context by code
 */
export function defineError<
  ErrorGroupType extends ErrorGroup<Domain<string>, string>,
  Name extends string,
  ContextByCode extends ReadonlyRecord<string, unknown>
>(errorGroup: ErrorGroupType, typeName: string): ErrorType<ErrorGroupName, keyof ContextByCode, keyof ContextByCode> {
  const wrapper = {
    [typeName]: class extends Error {
      readonly code: keyof ContextByCode;
      readonly context: ContextByCode[keyof ContextByCode];
      readonly name = groupName;

      constructor(code: string) {}
    },
  } as const;
  return wrapper[typeName];
}
