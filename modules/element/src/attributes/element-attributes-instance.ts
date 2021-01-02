import { BehaviorSubject } from 'rxjs';
import { ElementAttributesSchema, ElementAttributesSchemaType } from './element-attributes-schema';

/**
 * Element attributes
 * @template Attributes Attributes schema
 */
export class ElementAttributesInstance<Attributes extends ElementAttributesSchema<any>> {
    x?: Attributes;
    y?: keyof ElementAttributesSchemaType<Attributes>;
  [AttributeName in keyof ElementAttributesSchemaType<Attributes>] = new BehaviorSubject<ElementAttributesSchemaType<Attributes>[AttributeName]>(undefined);
};
