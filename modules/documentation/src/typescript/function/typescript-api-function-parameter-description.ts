import { type DocumentedTypeScriptApiElement } from '../documented-typescript-api-element';

/**
 * TypeScript API function parameter description
 */
export interface TypeScriptApiFunctionParameterDescription extends DocumentedTypeScriptApiElement {
  /**
   * Parameter name
   */
  readonly name: string;
  /**
   * Whether the parameter is optional
   */
  readonly optional?: boolean;
  /**
   * Whether the parameter is a rest parameter
   */
  readonly rest?: boolean;
}
