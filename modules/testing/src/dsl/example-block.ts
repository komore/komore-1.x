import { type Observable } from '@komore/reactive';

/**
 * Example block
 */
export interface ExampleBlock {
  (): void | Observable<void> | Promise<void>;
}
