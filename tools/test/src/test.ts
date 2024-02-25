import '@komore/reactive/polyfill';
import '@komore/temporal/polyfill';

import { firstValueFrom } from '@komore/reactive';
import { createSpecificationSourceProcessor } from '@komore/testing/processor';

async function main() {
  const tsConfigPath = 'modules/string/string.tsconfig.specifications.json';
  const processor = createSpecificationSourceProcessor({ extractSpecification: true, tsConfigPath });
  const result$ = processor({ fileName: 'modules/string/src/character-codes-to-string.spec.ts' });
  const result = firstValueFrom(result$);
  console.log('result', result);
}

main();
