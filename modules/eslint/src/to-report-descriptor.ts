import type { TSESLint } from '@typescript-eslint/experimental-utils';

/**
 * Creates a function that returns a report descriptor using a projection function
 * @param project Function that maps the input value to a report descriptor
 * @returns Function that returns a report description using the projection function
 * @template T Value type
 * @template MessageIds Message identifiers
 */
export function toReportDescriptor<T, MessageIds extends string>(
  project: (value: T) => TSESLint.ReportDescriptor<MessageIds>
): (value: T) => TSESLint.ReportDescriptor<MessageIds> {
  return value => project(value);
}
