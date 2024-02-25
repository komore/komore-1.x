import { type TypeScriptBindingName } from '../binding/typescript-binding-name';
import { type TypeScriptParameterBaseParameters } from './typescript-parameter-base-parameters';

/**
 * TypeScript parameter binding parameters
 */
export interface TypeScriptParameterBindingParameters extends TypeScriptParameterBaseParameters {
  /**
   * Parameter binding name
   */
  readonly name: TypeScriptBindingName;
}
