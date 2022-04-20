import { type DocumentedTypeScriptApiElement } from '../documented-typescript-api-element';
import { type TypeScriptApiTypeReference } from '../typescript-api-type-reference';

/**
 * TypeScript API function return description
 */
export interface TypeScriptApiFunctionReturnDescription extends DocumentedTypeScriptApiElement {
  /**
   * Type
   */
  readonly type: TypeScriptApiTypeReference;
}
