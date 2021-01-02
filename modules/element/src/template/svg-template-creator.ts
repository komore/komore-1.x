import { ElementTemplate } from "./element-template";

export type SvgTemplateCreator = <T extends any[]>(literals: TemplateStringsArray, ...placeholders: T) => ElementTemplate<>;
