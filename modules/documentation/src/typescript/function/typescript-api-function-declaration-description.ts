import { type DocumentedTypeScriptApiElement } from '../documented-typescript-api-element';
import { type TypeScriptApiFunctionParameterDescription } from './typescript-api-function-parameter-description';
import { type TypeScriptApiFunctionReturnDescription } from './typescript-api-function-return-description';
import { type TypeScriptApiFunctionTypeParameterDescription } from './typescript-api-function-type-parameter-description';

/**
 * TypeScript API function declaration description
 */
export interface TypeScriptApiFunctionDeclarationDescription extends DocumentedTypeScriptApiElement {
  /**
   * Function name
   */
  readonly name: string;
  /**
   * Function parameters
   */
  readonly parameters?: ReadonlyArray<TypeScriptApiFunctionParameterDescription>;
  /**
   * Function return value
   */
  readonly returnValue: TypeScriptApiFunctionReturnDescription;
  /**
   * Template parameters
   */
  readonly typeParameters?: ReadonlyArray<TypeScriptApiFunctionTypeParameterDescription>;
}
