import { type Observable } from '@komore/reactive';
import { type SourceFile, type TransformerFactory } from 'typescript';

/**
 * Observable transformer factory
 * @template T Value type
 */
export interface ObservableTransformerFactory<T> {
  readonly factory: TransformerFactory<SourceFile>;
  readonly observable: Observable<T>;
}
