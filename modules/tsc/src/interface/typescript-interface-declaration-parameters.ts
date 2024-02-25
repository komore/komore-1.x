import { type TypeScriptHeritageClause } from '../extends/typescript-heritage-clause';
import { type TypeScriptIdentifier } from '../identifier/typescript-identifier';
import { type TypeScriptModifier } from '../modifier/typescript-modifier';
import { type TypeScriptTypeElement } from '../type/typescript-type-node-element';
import { type TypeScriptTypeParameterDeclaration } from '../type/typescript-type-parameter-declaration';

/**
 * TypeScript interface declaration parameters
 */
export interface TypeScriptInterfaceDeclarationParameters {
  /**
   * Heritage clauses
   */
  readonly extends?: ReadonlyArray<TypeScriptHeritageClause>;
  /**
   * Members
   */
  readonly members: ReadonlyArray<TypeScriptTypeElement>;
  /**
   * Modifiers
   */
  readonly modifiers?: ReadonlyArray<TypeScriptModifier>;
  /**
   * Interface name
   */
  readonly name: string | TypeScriptIdentifier;
  /**
   * Type parameters
   */
  readonly typeParameters?: ReadonlyArray<TypeScriptTypeParameterDeclaration>;
}
