import { TargetConfiguration } from '@nrwl/devkit';
import { BaseGeneratorOptions } from '../base-generator-options';
import { NormalizedGeneratorOptions } from '../normalized-generator-options';

/**
 * Build function executor name
 */
const buildFunctionExecutorName = '@komore/nx:build-function';

/**
 * Build function target
 */
interface BuildFunctionTarget extends TargetConfiguration {
  options: Readonly<{
    outputPath: string;
    tsConfig: string;
    packageJson: string;
    main: string;
  }>;
}

/**
 * Creates a build function target
 * @param normalizedGeneratorOptions Normalized generator options 
 * @returns Build function target
 * @template GeneratorOptionsTypes Generator options type
 */
export function createBuildFunctionTarget<GeneratorOptionsType extends BaseGeneratorOptions>({
  projectRoot,
  sourceRoot
}: NormalizedGeneratorOptions<GeneratorOptionsType>): BuildFunctionTarget {
  return {
    executor: buildFunctionExecutorName,
    outputs: ['{options.outputPath}'],
    options: {
      outputPath: `dist/${projectRoot}`,
      tsConfig: `${projectRoot}/tsconfig.lib.json`,
      packageJson: `${projectRoot}/package.json`,
      main: `${sourceRoot}/index.ts`
    }
  };
}
