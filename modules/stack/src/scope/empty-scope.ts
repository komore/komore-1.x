import { type ReadonlyRecord } from '@komore/typescript';
import { type Scope } from './scope';

/**
 * Empty scope
 */
export type EmptyScope = Scope<
  EmptyObject,
  EmptyObject,
  EmptyObject,
  EmptyObject,
  EmptyObject,
  EmptyObject,
  EmptyObject
>;

type EmptyObject = ReadonlyRecord<string, never>;
