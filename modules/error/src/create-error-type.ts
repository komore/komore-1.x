import { type ReadonlyRecord } from '@komore/typescript';
import { ErrorType } from './error-type';

/**
 * Creates an error type
 *
 * @param groupName Group name
 * @param typeName Type name
 * @template ErrorGroupName Error group name
 * @template ContextByCode Context by code
 */
export function createErrorType<ErrorGroupName extends string, ContextByCode extends ReadonlyRecord<string, unknown>>(
  groupName: ErrorGroupName,
  typeName: string
): ErrorType<ErrorGroupName, keyof ContextByCode, keyof ContextByCode> {
  return class extends Error {
    readonly code: keyof ContextByCode;
    readonly context: ContextByCode[keyof ContextByCode];
    readonly name = groupName;

    constructor(code: string) {}
  };
}
