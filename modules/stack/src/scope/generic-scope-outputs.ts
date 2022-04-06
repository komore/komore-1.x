import { type ReadonlyRecord } from '@komore/typescript';
import { type StackType } from '../type/stack-type';
import { type TypedOutput } from '../type/typed-output';

/**
 * Generic scope outputs
 */
export type GenericScopeOutputs = ReadonlyRecord<string, TypedOutput<StackType>>;
