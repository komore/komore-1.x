import { TargetConfiguration } from '@nrwl/devkit';
import { BaseGeneratorOptions } from '../base-generator-options';
import { NormalizedGeneratorOptions } from '../normalized-generator-options';

/**
 * Build function executor name
 */
const buildFunctionExecutorName = '@komore/nx:function-serve';

/**
 * Build function target
 */
interface ServeFunctionTarget extends TargetConfiguration {
  options: Readonly<{
    buildTarget: string;
  }>;
}

/**
 * Creates a serve function target
 * @param normalizedGeneratorOptions Normalized generator options 
 * @returns Build function target
 * @template GeneratorOptionsTypes Generator options type
 */
export function createServeFunctionTarget<GeneratorOptionsType extends BaseGeneratorOptions>({
  projectName
}: NormalizedGeneratorOptions<GeneratorOptionsType>): ServeFunctionTarget {
  return {
    executor: buildFunctionExecutorName,
    outputs: ['{options.outputPath}'],
    options: {
      buildTarget: `build:${projectName}`
    }
  };
}
