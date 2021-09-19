import { RouterInsertionType } from './router-injection-type';

/**
 * Router options
 */
export interface RouterOptions {
  readonly insertionPoint: Element;
  readonly insertionType: RouterInsertionType;
}
