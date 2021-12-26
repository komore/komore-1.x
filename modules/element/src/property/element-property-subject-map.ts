import { type ElementPropertySubject } from './element-property-subject';

/**
 * Element property subject map
 * @template ElementPropertyMap Element attribute map
 */
export type ElementPropertySubjectMap<ElementPropertyMap extends Record<string, any>> = {
  readonly [K in keyof ElementPropertyMap]: ElementPropertySubject<ElementPropertyMap[K]>;
};
