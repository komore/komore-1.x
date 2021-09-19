import { catchError, of, switchMap, tap } from 'rxjs';
import { createRouter, toRouterEventDebugLog } from './komore/element/router';

export function initializeWebsite(): void {
  console.log('initialize');

  document.querySelectorAll<HTMLLIElement>('li.with-children').forEach(element => {
    element.addEventListener(
      'click',
      ev => {
        ev.stopPropagation();
        if (element.hasAttribute('expanded')) {
          element.removeAttribute('expanded');
        } else {
          element.setAttribute('expanded', '');
        }
      },
      false
    );
  });

  document.querySelectorAll<HTMLAnchorElement>('a').forEach(element => {
    element.addEventListener('click', ev => {
      ev.preventDefault();
      ev.stopPropagation();
      console.log('supposed to go to', element.href);
    });
  });

  createRouter(events => events.pipe(tap(toRouterEventDebugLog)), {
    insertionPoint: document.body.querySelector<HTMLElement>(':host > main') as HTMLElement,
    insertionType: 'firstChild'
  }).subscribe(router => console.log('router', router));
}
