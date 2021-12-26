import { type TSESLint } from '@typescript-eslint/experimental-utils';

/**
 * Creates a functon that adds a rule fix to a report descriptor using a projection function
 * @param project Function that creates a rule fix
 * @returns Function that adds a rule fix to a report descriptor using the projection function
 */
export function withRuleFix<ReportDescriptorType extends TSESLint.ReportDescriptor<string>>(
  project: (fixer: TSESLint.RuleFixer, reportDescriptor: ReportDescriptorType) => TSESLint.RuleFix
): (reportDescriptor: ReportDescriptorType) => ReportDescriptorType {
  return reportDescriptor => ({
    ...reportDescriptor,
    fix: fixer => project(fixer, reportDescriptor)
  });
}
