import type { TSESLint } from '@typescript-eslint/experimental-utils';

/**
 * Creates a function that reports a report descriptor using a rule context
 * @param ruleContext Rule context
 * @returns Function that reports a report descriptor using the rule context
 * @template MessageIds Message identifiers
 * @template Options Options type
 */
export function reportUsing<MessageIds extends string, Options extends ReadonlyArray<unknown>>(
  ruleContext: TSESLint.RuleContext<MessageIds, Options>
): (reportDescriptor: TSESLint.ReportDescriptor<MessageIds>) => void {
  return reportDescriptor => ruleContext.report(reportDescriptor);
}
