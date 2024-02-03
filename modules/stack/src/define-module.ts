import { type GenericScope } from './scope/generic-scope';
import { type TypedModuleDefinition } from './type/typed-module-definition';

export function defineModule<ModuleId extends string, ScopeType extends GenericScope>(
  _moduleId: ModuleId,
  _project: (scope: Observable<GenericScope>) => Observable<ScopeType>
): TypedModuleDefinition {
  return;
}
