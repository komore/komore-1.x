import { type ReadonlyRecord } from '@komore/typescript';
import { type StackType } from '../type/stack-type';
import { type TypedLocal } from '../type/typed-local';

/**
 * Generic scope locals
 */
export type GenericScopeLocals = ReadonlyRecord<string, TypedLocal<StackType>>;
