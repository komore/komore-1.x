import { type TargetConfiguration } from '@nrwl/devkit';
import { type BaseGeneratorOptions } from '../base-generator-options';
import { type NormalizedGeneratorOptions } from '../normalized-generator-options';

/**
 * Deploy function executor name
 */
const deployFunctionExecutorName = '@komore/nx:function-deploy';

/**
 * Deploy function target
 */
interface DeployFunctionTarget extends TargetConfiguration {
  options: Readonly<{
    // TODO
  }>;
}

/**
 * Creates a build function target
 * @param normalizedGeneratorOptions Normalized generator options
 * @returns Build function target
 * @template GeneratorOptionsTypes Generator options type
 */
export function createDeployFunctionTarget<
  GeneratorOptionsType extends BaseGeneratorOptions
>(options: NormalizedGeneratorOptions<GeneratorOptionsType>): DeployFunctionTarget {
  return {
    executor: deployFunctionExecutorName,
    options
  };
}
