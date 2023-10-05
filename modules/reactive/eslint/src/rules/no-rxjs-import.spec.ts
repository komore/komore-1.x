import { createRuleTester } from '@komore/linting/testing';
import { feature } from '@komore/testing';

import { noRxJSImport } from './no-rxjs-import';

feature('No RxJS import rule', () => {
  const tester = createRuleTester({
    fileName: 'lala',
    project: './tsconfig.json',
  });
  noRxJSImport;
  tester;
});
