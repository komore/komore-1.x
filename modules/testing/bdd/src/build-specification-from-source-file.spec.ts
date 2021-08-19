import { buildSpecificationFromSourceFile } from './build-specification-from-source-file';

describe('Build specification from source file', () => {
  it.skip('works', () => {
    const sourceFile = createTestSource(`
        describe('test specification text', () => {
          given: 'given statement';
          when: 'when statement';
          then: 'then statement';
        });
      `);
    console.log(
      'length',
      `
      describe('test specification text', () => {
        given: 'given statement';
        when: 'when statement';
        then: 'then statement';
      });
    `.length
    );
    buildSpecificationFromSourceFile(sourceFile);
  });
});
