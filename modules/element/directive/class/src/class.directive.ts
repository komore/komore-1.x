import { createDirectiveFactory } from '@komore/element/directive';
import { combineLatest } from '@komore/reactive';
import { map, tap } from '@komore/reactive/operators';
import type { ClassParameters } from './class-parameters';

/**
 * Class directive
 */
export const kClass = createDirectiveFactory<Element, boolean>(() => {
  return ({ element, parameters }) => combineLatest({
    element,
    initialClasses: element.pipe(
      map(({ classList }) => mapTokenList(classList))
    ),
    classes: parameters.pipe(
      map(params => {
        return prepareClassList(params);
      }),
      //pairwise()
    )
  }).pipe(
    tap(({ element, classes: [previous, current] }) => {

    })
  );
});

const dir = kClass();
if (typeof dir === 'function') {
  dir()
}


/**
 * Prepares a map of classes
 * @param parameters Parameters
 * @returns Map of classes
 */
function prepareClassList(parameters: ClassParameters): Record<string, boolean> {
  if (typeof parameters === 'string') {
    parameters = parameters.split(/\s+/);
  }

  if (Array.isArray(parameters)) {
    return Object.fromEntries(parameters.map(className => [className, true]));
  }

  return parameters as Record<string, boolean>;
}

function classesFromTokenList(tokenList: DOMTokenList): ReadonlyArray<string> {
  return Array.from(tokenList.entries());
}
