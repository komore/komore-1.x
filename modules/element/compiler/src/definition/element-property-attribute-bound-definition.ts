import { type ElementPropertyDefinition } from '@komore/element/compiler/processor';

/**
 * Element property definition with a bount attribute
 */
export interface ElementPropertyAttributeBoundDefinition extends ElementPropertyDefinition {
  readonly boundAttributeName: string;
}
