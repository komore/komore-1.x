import { buildSpecificationFromSourceFile } from './build-specification-from-source-file';

feature('Build specification from source file', {
  works() {
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
  },
});
