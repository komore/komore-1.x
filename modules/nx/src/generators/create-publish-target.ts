import { TargetConfiguration } from '@nrwl/devkit';
import { BaseGeneratorOptions } from './base-generator-options';
import { NormalizedGeneratorOptions } from './normalized-generator-options';

/**
 * Publish executor name
 */
const publishExecutorName = '@komore/nx:publish';

/**
 * Publish target
 */
interface PublishTarget extends TargetConfiguration {
  options: Readonly<{
    buildTarget: string;
  }>;
}

/**
 * Creates a publish target
 * @param normalizedGeneratorOptions Normalized generator options
 * @returns Publish target
 * @template GeneratorOptionsType Generator options type
 */
export function createPublishTarget<GeneratorOptionsType extends BaseGeneratorOptions>({
  projectName
}: NormalizedGeneratorOptions<GeneratorOptionsType>): PublishTarget {
  return {
    executor: publishExecutorName,
    options: {
      buildTarget: `build:${projectName}`
    }
  };
}
