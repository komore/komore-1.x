import { App, type TerraformStack } from 'cdktf';

import { catchError, defer, empty, mapTo, of, switchMap } from '@komore/reactive';

import { type GenericScope } from './scope/generic-scope';
import { Stack } from './stack';

/**
 * Defines a stack
 *
 * @param stackId Stack identifier
 * @param project Projection function
 * @returns Observable stack
 */
export function defineStack<ScopeType extends GenericScope>(
  stackId: string,
  project: (scope: Observable<GenericScope>) => Observable<ScopeType>
): Observable<TerraformStack> {
  return defer(() => {
    const app = new App();
    const stack = new Stack(app, stackId);

    return stack.scope$.pipe(
      switchMap(scope =>
        project(of(scope)).pipe(
          catchError(error => {
            console.log('Error while building the scope :(', error);
            return empty;
          })
        )
      ),
      mapTo(stack)
    );
  });
}
