import { type TypedModuleDefinition } from './typed-module-definition';

/**
 * Typed module
 *
 * @template ModuleId Module identifier
 * @template ModuleDefinitionType Module definition type
 */
export type TypedModule<_ModuleId extends string, _ModuleDefinitionType extends TypedModuleDefinition> = any;
