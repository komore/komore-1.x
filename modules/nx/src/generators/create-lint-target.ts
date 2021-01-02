import { TargetConfiguration } from '@nrwl/devkit';
import { BaseGeneratorOptions } from './base-generator-options';
import { NormalizedGeneratorOptions } from './normalized-generator-options';

/**
 * eslint executor name
 */
const eslintExecutorName = '@nrwl/linter:eslint';

/**
 * Lint target
 */
interface LintTarget extends TargetConfiguration {
  options: Readonly<{
    lintFilePatterns: ReadonlyArray<string>;
  }>;
}

/**
 * Creates a lint target
 * @param normalizedGeneratorOptions Normalized generator options
 * @returns Lint target
 * @template GeneratorOptionsType Generator options type
 */
export function createLintTarget<GeneratorOptionsType extends BaseGeneratorOptions>({
  sourceRoot
}: NormalizedGeneratorOptions<GeneratorOptionsType>): LintTarget {
  return {
    executor: eslintExecutorName,
    options: {
      lintFilePatterns: [`${sourceRoot}/**/*.ts`]
    }
  };
}
