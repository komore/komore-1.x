import { ElementTemplateContext } from './element-template-context';
import { CssTemplate } from './template/css-template';
import { StyleTemplateContext } from './template/style-template-context';
import { ElementAttributesSchema } from './schema/element-attributes-schema';
import { ElementEventsSchema } from './schema/element-events-schema';
import { ElementPropertiesSchema } from './schema/element-properties-schema';
import { ElementStateSchema } from './schema/element-state-schema';

/**
 * Element definition
 * @template ElementName Element name
 * @template BaseType Base HTML element type
 * @template State Element state schema
 * @template Attributes Element attributes schema
 * @template Properties Element properties schema
 * @template StyleProperties Element style properties schema
 * @template Events Element events schema
 */
export type ElementDefinition<
  ElementName extends string,
  BaseType extends HTMLElement = HTMLElement,
  Attributes extends ElementAttributesSchema<any> | undefined = undefined,
  Properties extends ElementPropertiesSchema<any> | undefined = undefined,
  Events extends ElementEventsSchema<any> | undefined = undefined,
  State extends ElementStateSchema<any> | undefined = undefined
> = Readonly<{
  name: ElementName;
  extends?: new () => BaseType;
  state?: State;
  attributes?: Attributes;
  properties?: Properties;
  events?: Events;
  styles?: (context: StyleTemplateContext) => CssTemplate | ReadonlyArray<CssTemplate>;
  template: (context: ElementTemplateContext<ElementName, BaseType, Attributes, Properties, Events, State>) => ElementTemplate;
}>;

/**
 * Element definition base type
 * @template ElementDefinitionType Element definition type
 */
export type ElementDefinitionBase<ElementDefinitionType> = ElementDefinitionType extends ElementDefinition<
  infer Base,
  any,
  any,
  any,
  any
>
  ? Base
  : never;

/**
 * Element definition attributes schema type
 * @template ElementDefinitionType Element definition type
 */
export type ElementDefinitionAttributesSchema<ElementDefinitionType> = ElementDefinitionType extends ElementDefinition<
  any,
  infer Attributes,
  any,
  any,
  any
>
  ? Attributes
  : never;

/**
 * Element definition properties schema type
 * @template ElementDefinitionType Element definition type
 */
export type ElementDefinitionPropertiesSchema<ElementDefinitionType> = ElementDefinitionType extends ElementDefinition<
  any,
  any,
  infer Properties,
  any,
  any
>
  ? Properties
  : never;

/**
 * Element definition events schema type
 * @template ElementDefinitionType Element definition type
 */
export type ElementDefinitionEventsSchema<ElementDefinitionType> = ElementDefinitionType extends ElementDefinition<
  any,
  any,
  any,
  infer Events,
  any
>
  ? Events
  : never;

/**
 * Element definition state schema type
 * @template ElementDefinitionType Element definition type
 */
export type ElementDefinitionStateSchema<ElementDefinitionType> = ElementDefinitionType extends ElementDefinition<
  any,
  any,
  any,
  any,
  infer State
>
  ? State
  : never;
