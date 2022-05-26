import { getWorkspaceLayout, names, type Tree } from '@nrwl/devkit';
import { buildProjectDirectoryName } from '../build-project-directory-name';
import { buildProjectTags } from '../build-project-tags';
import { type ApplicationOptions } from './application-options';
import { type ApplicationSchema } from './application-schema';

/**
 * Returns a function that builds application options from an application schema
 * @param tree Tree
 * @returns Function that builds application options from an application schema
 */
export function toApplicationOptions(tree: Tree): (applicationSchema: ApplicationSchema) => ApplicationOptions {
  return applicationSchema => {
    const { directory, edition, name, tags } = applicationSchema;
    const { appsDir } = getWorkspaceLayout(tree);
    const generatedNames = names(name);
    const projectDirectory = buildProjectDirectoryName(directory, generatedNames.fileName);
    const root = `${appsDir}/${projectDirectory}`;
    return {
      directory: projectDirectory,
      edition: edition ?? '2021',
      name,
      root,
      tags: buildProjectTags(tags),
    };
  };
}
