import { TargetConfiguration } from '@nrwl/devkit';
import { BaseGeneratorOptions } from './base-generator-options';
import { NormalizedGeneratorOptions } from './normalized-generator-options';

/**
 * Jest executor name
 */
const jestExecutorName = '@nrwl/jest:jest';

/**
 * Test target
 */
interface TestTarget extends TargetConfiguration {
  options: Readonly<{
    jestConfig: string;
    passWithNoTests: true;
  }>;
}

/**
 * Creates a test target
 * @param normalizedGeneratorOptions Normalized generator options
 * @returns Test target
 * @template GeneratorOptionsType Generator options type
 */
export function createTestTarget<GeneratorOptionsType extends BaseGeneratorOptions>({
  projectName,
  projectRoot
}: NormalizedGeneratorOptions<GeneratorOptionsType>): TestTarget {
  return {
    executor: jestExecutorName,
    outputs: [`coverage/${projectName}`],
    options: {
      jestConfig: `${projectRoot}/jest.preset.js`,
      passWithNoTests: true
    }
  };
}
