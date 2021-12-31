import { type CustomPropertySyntax } from './custom-property-syntax';
import { type KnownPropertySyntaxes } from './known-property-syntaxes';

/**
 * Property syntax
 */
export type PropertySyntax = keyof KnownPropertySyntaxes | CustomPropertySyntax;
