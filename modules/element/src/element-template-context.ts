import { Observable } from 'rxjs';
import { ElementDefinition } from './definition/element-definition';

/**
 * Element template context
 * @template ElementDefinitionType Element definition type
 */
export type ElementTemplateContext<
  ElementDefinitionType extends ElementDefinition<any, any, any, any>>
 = Readonly<{
  state$: Observable<unknown>; // TODO: get all from ElementDefinitionType
  attributes$: Observable<unknown>;
  properties$: Observable<unknown>;
}>;
