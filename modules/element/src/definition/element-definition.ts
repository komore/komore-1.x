import { ElementAttributesSchema } from './schema/element-attributes-schema';
import { ElementEventsSchema } from './schema/element-events-schema';
import { ElementPropertiesSchema } from './schema/element-properties-schema';
import { ElementStateSchema } from './schema/element-state-schema';

/**
 * Element definition
 * @template Base Base HTML element
 * @template State Element state schema
 * @template Attributes Element attributes schema
 * @template Properties Element properties schema
 * @template Events Element events schema
 */
export type ElementDefinition<
  Base extends HTMLElement | undefined = undefined,
  Attributes extends ElementAttributesSchema<any> | undefined = undefined,
  Properties extends ElementPropertiesSchema<any> | undefined = undefined,
  Events extends ElementEventsSchema<any> | undefined = undefined,
  State extends ElementStateSchema<any> | undefined = undefined
> = Readonly<{
  state?: State;
  attributes?: Attributes;
  properties?: Properties;
  events?: Events;
  styles?: string; // TODO: type
  base?: new (...params: any[]) => Base;
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
