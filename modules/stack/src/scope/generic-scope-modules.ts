import { type ReadonlyRecord } from '@komore/typescript';
import { type TypedModule } from '../type/typed-module';
import { type TypedModuleDefinition } from '../type/typed-module-definition';

/**
 * Generic scope modules
 */
export type GenericScopeModules = ReadonlyRecord<string, TypedModule<string, TypedModuleDefinition>>;
