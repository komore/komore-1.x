import { identity } from '@komore/functional';
import { map, type MonoTypeOperatorFunction } from '@komore/reactive';
import { type GenericScope } from '../scope/generic-scope';

export function importModule<ScopeType extends GenericScope, ModuleId extends string>(
  _moduleId: ModuleId
): MonoTypeOperatorFunction<ScopeType> {
  return map(identity);
}
