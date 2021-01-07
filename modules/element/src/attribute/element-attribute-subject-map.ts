import type { BehaviorSubject } from 'rxjs';

/**
 * Element attribute subject map
 * @template ElementAttributeMap Element attribute map
 */
export type ElementAttributeSubjectMap<ElementAttributeMap extends Record<string, any>> = Readonly<{
  [K in keyof ElementAttributeMap]: BehaviorSubject<ElementAttributeMap[K]>;
}>;
