import { getWorkspaceLayout, names, Tree } from '@nrwl/devkit';
import { BaseGeneratorOptions } from './base-generator-options';
import { NormalizedGeneratorOptions } from './normalized-generator-options';

/**
 * Normalize a generator's options
 * @param host Host
 * @param options Options
 * @returns Normalized generator options
 * @template GeneratorOptionsType Generator options type
 */
export function normalizeGeneratorOptions<GeneratorOptionsType extends BaseGeneratorOptions>(
  host: Tree,
  options: GeneratorOptionsType
): NormalizedGeneratorOptions<GeneratorOptionsType> {
  const name = names(options.name).fileName;
  const projectDirectory = options.directory ? `${names(options.directory).fileName}/${name}` : name;
  const projectName = projectDirectory.replace(new RegExp('/', 'g'), '-');
  const projectRoot = `${getWorkspaceLayout(host).libsDir}/${projectDirectory}`;
  const parsedTags = options.tags?.split(',').map(tag => tag.trim()) ?? [];
  const sourceRoot = `${projectRoot}/src`;

  return {
    ...options,
    projectName,
    projectRoot,
    projectDirectory,
    parsedTags,
    sourceRoot
  };
}
