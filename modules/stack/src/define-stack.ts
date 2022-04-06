import { catchError, defer, EMPTY, mapTo, of, switchMap, type Observable } from '@komore/reactive';
import { App, type TerraformStack } from 'cdktf';
import { type GenericScope } from './scope/generic-scope';
import { Stack } from './stack';

/**
 * Defines a stack
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
            return EMPTY;
          })
        )
      ),
      mapTo(stack)
    );
  });
}
