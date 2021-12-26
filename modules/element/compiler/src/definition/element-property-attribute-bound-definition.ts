import { type ElementPropertyDefinition } from './element-property-definition';

/**
 * Element property definition with a bount attribute
 */
export type ElementPropertyAttributeBoundDefinition = ElementPropertyDefinition & {
  readonly boundAttributeName: string;
};
