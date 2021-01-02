import { CSSTemplateCreator } from './css-template-creator';

/**
 * Style template context
 */
export type StyleTemplateContext = Readonly<{
  css: CSSTemplateCreator;
}>;
