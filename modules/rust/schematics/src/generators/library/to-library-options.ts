import { getWorkspaceLayout, names, type Tree } from '@nrwl/devkit';
import { buildProjectDirectoryName } from '../build-project-directory-name';
import { buildProjectTags } from '../build-project-tags';
import { type LibraryOptions } from './library-options';
import { type LibrarySchema } from './library-schema';

/**
 * Returns a function that builds library options from a library schema
 * @param tree Tree
 * @returns Function that builds library options from a library schema
 */
export function toLibraryOptions(tree: Tree): (librarySchema: LibrarySchema) => LibraryOptions {
  return librarySchema => {
    const { directory, edition, name, proceduralMacros, tags } = librarySchema;
    const { libsDir } = getWorkspaceLayout(tree);
    const generatedNames = names(name);
    const projectDirectory = buildProjectDirectoryName(directory, generatedNames.fileName);
    const root = `${libsDir}/${projectDirectory}`;
    return {
      directory: projectDirectory,
      edition: edition ?? '2021',
      name,
      proceduralMacros: proceduralMacros ?? false,
      root,
      tags: buildProjectTags(tags),
    };
  };
}
