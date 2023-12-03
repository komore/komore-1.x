import { schematicsError } from '../../schematics.error';
import { type GeneratorName } from '../name/generator-name';
import { type WorkspaceGeneratorDescriptor } from '../workspace-generator-descriptor';
import { type WorkspaceGeneratorDescriptorJson } from './workspace-generator-descriptor-json';

export function workspaceGeneratorDescriptorJsonEntryToWorkspaceGeneratorDescriptor(
  entry: readonly [name: GeneratorName, descriptorJson: WorkspaceGeneratorDescriptorJson]
): Omit<WorkspaceGeneratorDescriptor, 'package'> {
  const [name, { factory, options = {}, ...jsonDescriptor }] = entry;
  if (factory === undefined) {
    throw schematicsError.generatorFactoryNotFound({ generatorName: name, path: 'dunno' });
  }

  return {
    ...jsonDescriptor,
    factory,
    name,
    options,
  };
}
