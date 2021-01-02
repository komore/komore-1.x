import { TargetConfiguration } from '@nrwl/devkit';
import { BaseGeneratorOptions } from '../base-generator-options';
import { NormalizedGeneratorOptions } from '../normalized-generator-options';

/**
 * Deploy function executor name
 */
const deployFunctionExecutorName = '@komore/nx:function-deploy';

/**
 * Deploy function target
 */
interface DeployFunctionTarget extends TargetConfiguration {
  options: Readonly<{}>;
}

/**
 * Creates a build function target
 * @param normalizedGeneratorOptions Normalized generator options
 * @returns Build function target
 * @template GeneratorOptionsTypes Generator options type
 */
export function createDeployFunctionTarget<
  GeneratorOptionsType extends BaseGeneratorOptions
>({}: NormalizedGeneratorOptions<GeneratorOptionsType>): DeployFunctionTarget {
  return {
    executor: deployFunctionExecutorName,
    options: {}
  };
}
