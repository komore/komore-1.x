import { type ObservableMap } from '@komore/reactive';

import { type ExecutorReferenceString } from '../executor/reference/executor-reference-string';
import { type WorkspaceExecutorDescriptor } from '../executor/workspace-executor-descriptor';
import { type GeneratorReferenceString } from '../generator/reference/generator-reference-string';
import { type WorkspaceGeneratorDescriptor } from '../generator/workspace-generator-descriptor';
import { type PackageName } from '../package/name/package-name';
import { type PackageWithPackageJsonAndSchematics } from '../package/package-with-package-json-and-schematics';
import { type WorkspaceContextSchematicsExecutor } from './workspace-context-schematics-executor';

/**
 * Schematics information
 */
export interface WorkspaceContextSchematics {
  /**
   * Executor information
   */
  readonly executor: {
    /**
     * Map of executors by package
     */
    readonly byPackage: ObservableMap<PackageName, ReadonlyArray<WorkspaceExecutorDescriptor>>;
    /**
     * Map of executors
     */
    readonly byReferenceString: ObservableMap<ExecutorReferenceString, WorkspaceContextSchematicsExecutor>;
    /**
     * List of installed executors
     */
    readonly list: Observable<ReadonlyArray<WorkspaceExecutorDescriptor>>;
  };
  /**
   * Generator information
   */
  readonly generator: {
    /**
     * Map of generators by package
     */
    readonly byPackage: ReadonlyMap<PackageName, Observable<ReadonlyArray<WorkspaceGeneratorDescriptor>>>;
    /**
     * Map of generators
     */
    readonly byReferenceString: ReadonlyMap<GeneratorReferenceString, Observable<WorkspaceGeneratorDescriptor>>;
    /**
     * List of installed generators
     */
    readonly list: Observable<ReadonlyArray<WorkspaceGeneratorDescriptor>>;
  };
  /**
   * Package information
   */
  readonly package: {
    /**
     * List of packages with schematics
     */
    readonly withSchematics: Observable<ReadonlyArray<PackageWithPackageJsonAndSchematics>>;
    /**
     * Package with schematics by name
     */
    readonly withSchematicsByName: ReadonlyMap<PackageName, Observable<PackageWithPackageJsonAndSchematics>>;
  };
}
