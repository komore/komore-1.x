import { type ReadonlyRecord } from '@komore/typescript';
import { ErrorClass } from './error-class';

/**
 * Creates an error class
 *
 * @param groupName Group name
 * @param className Class name
 * @template GroupName Group name
 * @template ContextByCode Context by code
 */
export function createErrorClass<GroupName extends string, ContextByCode extends ReadonlyRecord<string, unknown>>(
  groupName: GroupName,
  className: string
): ErrorClass<GroupName, keyof ContextByCode, keyof ContextByCode> {
  return class extends Error {
    readonly code: keyof ContextByCode;
    readonly context: ContextByCode[keyof ContextByCode];
    readonly name = groupName;

    constructor(code: string) {}
  };
}
