import { Observable } from 'rxjs';
import { ElementAttributesSchema, ElementAttributesSchemaType } from './definition/schema/element-attributes-schema';
import { ElementEventsSchema } from './definition/schema/element-events-schema';
import { ElementPropertiesSchema, ElementPropertiesSchemaType } from './definition/schema/element-properties-schema';
import { ElementStateSchema } from './definition/schema/element-state-schema';
import { HtmlTemplateCreator } from './template/html-template-creator';

/**
 * Element template context
 * @template ElementDefinitionType Element definition type
 */
export type ElementTemplateContext<
  Attributes extends ElementAttributesSchema<any> | undefined = undefined,
  Properties extends ElementPropertiesSchema<any> | undefined = undefined,
  Events extends ElementEventsSchema<any> | undefined = undefined,
  State extends ElementStateSchema<any> | undefined = undefined
> = Readonly<
 (Attributes extends ElementAttributesSchema<any> ? { attributes$: Observable<ElementAttributesSchemaType<Attributes>>; } : {}) &
 (Properties extends ElementPropertiesSchema<any> ? { properties$: Observable<ElementPropertiesSchemaType<Properties>>; } : {}) &
 (Events extends ElementEventsSchema<any> ? { events$ } : {}) &
 {
   html: HtmlTemplateCreator<>;
 }
>;
