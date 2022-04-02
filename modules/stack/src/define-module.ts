import { type Observable } from '@komore/reactive';
import { type GenericScope } from './scope/generic-scope';
import { type TypedModuleDefinition } from './type/typed-module-definition';

export function defineModule<ModuleId extends string, ScopeType extends GenericScope>(
  moduleId: ModuleId,
  project: (scope: Observable<GenericScope>) => Observable<ScopeType>
): TypedModuleDefinition {
  return 
}
