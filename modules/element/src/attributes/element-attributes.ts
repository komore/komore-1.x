import { BehaviorSubject } from 'rxjs';
import { ElementAttributesSchema, ElementAttributesSchemaType } from './element-attributes-schema';

/**
 * Element attributes
 * @template Attributes Attributes schema
 */
export type ElementAttributes<Attributes extends ElementAttributesSchema<any>> = Readonly<
  {
    [AttributeName in keyof ElementAttributesSchemaType<Attributes>]: BehaviorSubject<
      ElementAttributesSchemaType<Attributes>[AttributeName]
    >;
  }
>;
