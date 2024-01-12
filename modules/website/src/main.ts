import '@komore/website/layout/header';
import '@komore/website/layout/footer';
import '@komore/website/layout/navigation';
import '@komore/website/search/input';
//import './website-root.element';

import { runBrowserApplication } from '@komore/browser/application';
import { firstValueFrom } from '@komore/reactive';
//import { createRouter, toRouterEventDebugLog } from '@komore/element/router';
//import { tapNext } from '@komore/reactive';

async function main() {
  const run$ = runBrowserApplication({});
  await firstValueFrom(run$);
}

main();

/*export function initializeWebsite(): void {
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

  createRouter(events => events.pipe(tapNext(toRouterEventDebugLog)), {
    injectionOptions: {
      injectionPoint: document.body.querySelector<HTMLElement>(':host > main') as HTMLElement,
      injectionType: 'prepend',
    },
  }).subscribe(router => console.log('router', router));
}
*/
