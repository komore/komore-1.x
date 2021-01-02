import { Observable } from 'rxjs';

/**
 * Element template resolver
 * @template ElementDefinitionType Element definition type
 */
export type ElementTemplateResolver<ElementDefinitionType extends ElementDefinition<any, any, any, any>> =
  | string
  | number
  | boolean
  | Observable<unknown>
  | ((element: unknown) => ElementTemplateResolver<ElementDefinitionType>);
