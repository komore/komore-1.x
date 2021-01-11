import type { ElementAttributeSubject } from './element-attribute-subject';

/**
 * Element attribute subject map
 * @template ElementAttributeMap Element attribute map
 */
export type ElementAttributeSubjectMap<ElementAttributeMap extends Record<string, any>> = {
  readonly [K in keyof ElementAttributeMap]: ElementAttributeSubject<ElementAttributeMap[K]>;
};
