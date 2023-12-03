import { type ReadonlyRecord } from '@komore/typescript';

import { type GeneratorName } from '../name/generator-name';
import { type WorkspaceGeneratorDescriptorJson } from './workspace-generator-descriptor-json';

/**
 * Workspace generator descriptors JSON
 */
export interface WorkspaceGeneratorDescriptorsJson
  extends ReadonlyRecord<GeneratorName, WorkspaceGeneratorDescriptorJson> {
  readonly $schema: 'https://komore.dev/json-schemas/schematics/generators';
}
