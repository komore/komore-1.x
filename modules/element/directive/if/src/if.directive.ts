import { createParameterizedDirective } from '@komore/element/directive';
import { combineLatest } from 'rxjs';
import { distinctUntilChanged, map, tap } from 'rxjs/operators';

/**
 * If directive
 */
export const kIf = createParameterizedDirective<Element, boolean>(({ element, parameters }) =>
  combineLatest({
    dom: element.pipe(
      map(element => [element, element.parentNode, element.nextSibling] as const)
    ),
    condition: parameters.pipe(map(Boolean), distinctUntilChanged())
  }).pipe(
    tap(({ dom: [element, parentNode, nextSibling], condition }) => {
      if (condition) {
        parentNode?.insertBefore(element, nextSibling);
      } else {
        element.remove();
      }
    })
  )
);
