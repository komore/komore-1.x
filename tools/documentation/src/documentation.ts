import '@komore/reactive/polyfill';
import '@komore/temporal/polyfill';

import { createTypeScriptApiDescription } from '@komore/documentation';
import { firstValueFrom } from '@komore/reactive';

async function main() {
  const apiDescription$ = createTypeScriptApiDescription({
    paths: {
      entryPoint: 'modules/reactive/src/index.ts',
      packageJson: 'modules/reactive/reactive.package.json',
      tsConfig: 'modules/reactive/reactive.tsconfig.library.json',
      tsConfigSpec: 'modules/reactive/reactive.tsconfig.specifications.json',
    },
  });
  console.log('here we go');
  const { name, exports } = await firstValueFrom(apiDescription$);

  console.log(name);
  console.log('  Functions');
  exports.functions.forEach(({ name: functionName, declarations }) => {
    declarations.forEach(({ description }) => {
      const newLineIndex = description.indexOf('\n');
      const firstLine = (newLineIndex !== -1 ? description.substring(0, newLineIndex) : description).trim();
      const shortDesc = firstLine.length > 70 ? firstLine.substring(0, 68) + '...' : firstLine;
      console.log(`    ${functionName}: ${shortDesc}`);
    });
  });
  console.log('  Types');
  console.log('    TODO');
}

main();
