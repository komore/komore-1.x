import { createRuleTester } from '@komore/eslint/testing';
import { noRxJSImport } from './no-rxjs-import';

describe('No RxJS import rule', () => {
  const tester = createRuleTester({
    fileName: 'lala',
    project: './tsconfig.json'
  });

  it('works', ruleTester.run(() => {
      tester();
  });
});
