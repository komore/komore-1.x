import { ElementTemplate, ElementTemplateResolver } from './element-template';

export type HtmlTemplateCreator<ThisType extends object, T extends ElementTemplateResolver> = (
  literals: TemplateStringsArray,
  ...placeholders: T
) => ElementTemplate;
