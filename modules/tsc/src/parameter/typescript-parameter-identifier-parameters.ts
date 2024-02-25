import { type TypeScriptIdentifier } from '../identifier/typescript-identifier';
import { type TypeScriptParameterBaseParameters } from './typescript-parameter-base-parameters';

/**
 * TypeScript parameter identifier parameters
 */
export interface TypeScriptParameterIdentifierParameters extends TypeScriptParameterBaseParameters {
  /**
   * Parameter name
   */
  readonly name: string | TypeScriptIdentifier;
}
