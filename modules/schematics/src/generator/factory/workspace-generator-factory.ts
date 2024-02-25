import { type WorkspaceGenerator } from '../workspace-generator';
import { type WorkspaceGeneratorFactoryOptions } from './workspace-generator-factory-options';

/**
 * Workspace generator factory
 *
 * @template OptionsType Generator options type
 */
export interface WorkspaceGeneratorFactory<OptionsType = unknown> {
  /**
   * Creates a workspace generator
   *
   * @param options Options
   * @returns Workspace generator
   */
  (options: WorkspaceGeneratorFactoryOptions): Observable<WorkspaceGenerator<OptionsType>>;
}
