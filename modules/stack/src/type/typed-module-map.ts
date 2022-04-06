import { type ReadonlyRecord } from '@komore/typescript';
import { type TypedModule } from './typed-module';
import { type TypedModuleDefinition } from './typed-module-definition';

/**
 * Typed module map
 *
 * @template ModuleId Module identifier
 * @template ModuleType Module type
 */
export type TypedModuleMap<
  ModuleId extends string,
  ModuleType extends TypedModule<string, TypedModuleDefinition>
> = ReadonlyRecord<ModuleId, ModuleType>;
