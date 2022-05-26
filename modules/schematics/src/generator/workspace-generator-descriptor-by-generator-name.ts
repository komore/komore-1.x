import { type GeneratorName } from './generator-name';
import { type WorkspaceGeneratorDescriptor } from './workspace-generator-descriptor';

/**
 * Returns a function that tests whether a generator descriptor matches a generator name
 *
 * @param generatorName Generator name
 * @returns Function that tests whether a generator descriptor matches the generator name
 */
export function workspaceGeneratorDescriptorByGeneratorName(
  generatorName: GeneratorName
): (generatorDescriptor: WorkspaceGeneratorDescriptor) => boolean {
  return ({ name }) => name === generatorName;
}
