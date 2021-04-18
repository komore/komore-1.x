import type { Tree } from '@nrwl/devkit';
import { addProjectConfiguration, formatFiles, generateFiles, names, offsetFromRoot } from '@nrwl/devkit';
import * as path from 'path';
import { createLintTarget } from '../create-lint-target';
import { createPublishTarget } from '../create-publish-target';
import { createTestTarget } from '../create-test-target';
import { normalizeGeneratorOptions } from '../normalize-generator-options';
import type { NormalizedGeneratorOptions } from '../normalized-generator-options';
import { createBuildFunctionTarget } from './create-build-function-target';
import { createDeployFunctionTarget } from './create-deploy-function-target';
import { createServeFunctionTarget } from './create-serve-function-target';
import type { FunctionGeneratorOptions } from './function-generator-options';

/**
 * Function generator
 * @param host Host
 * @param options Options
 */
export default async function functionGenerator(host: Tree, options: FunctionGeneratorOptions): Promise<void> {
  const normalizedOptions = normalizeFunctionOptions(host, options);

  generateFunctionProjectConfiguration(host, normalizedOptions);
  generateFunctionProjectFiles(host, normalizedOptions);

  await formatFiles(host);
}

/**
 * Normalized function generator options
 */
type NormalizedFunctionGeneratorOptions = NormalizedGeneratorOptions<FunctionGeneratorOptions>;

/**
 * Normalizes a function generator's options
 * @param host Host
 * @param options Options
 * @returns Normalized function generator schema
 */
function normalizeFunctionOptions(host: Tree, options: FunctionGeneratorOptions): NormalizedFunctionGeneratorOptions {
  return normalizeGeneratorOptions(host, options);
}

/**
 * Generates a function project's configuration
 * @param host Host
 * @param normalizedOptions Normalized options
 */
function generateFunctionProjectConfiguration(host: Tree, normalizedOptions: NormalizedFunctionGeneratorOptions): void {
  const { projectName, projectRoot, sourceRoot } = normalizedOptions;

  addProjectConfiguration(host, projectName, {
    root: projectRoot,
    projectType: 'library',
    sourceRoot,
    targets: {
      lint: createLintTarget(normalizedOptions),
      test: createTestTarget(normalizedOptions),
      publish: createPublishTarget(normalizedOptions),
      build: createBuildFunctionTarget(normalizedOptions),
      serve: createServeFunctionTarget(normalizedOptions),
      deploy: createDeployFunctionTarget(normalizedOptions)
    }
  });
}

/**
 * Generates a function project's files
 * @param host Host
 * @param normalizedOptions Normalized options
 */
function generateFunctionProjectFiles(host: Tree, normalizedOptions: NormalizedFunctionGeneratorOptions): void {
  const { name, projectRoot } = normalizedOptions;
  const templateOptions = {
    ...normalizedOptions,
    names: names(name),
    offsetFromRoot: offsetFromRoot(projectRoot)
  };

  generateFiles(host, path.join(__dirname, 'templates'), normalizedOptions.projectRoot, templateOptions);
}
