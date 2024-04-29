import '@komore/reactive/polyfill';
import '@komore/temporal/polyfill';

import { createTerraformCliClient, getTerraformProviderSchemas, getTerraformVersion } from '@komore/terraform';
import { firstValueFrom } from '@komore/reactive';

async function main() {
  const cliClient = createTerraformCliClient({
    commandName: 'terraform',
    workingDirectory: '../../binarygenetics/organization/bootstrap',
  });
  const version$ = getTerraformVersion(cliClient)();
  const version = await firstValueFrom(version$);
  const providerSchemas$ = getTerraformProviderSchemas(cliClient)();
  const providerSchemas = await firstValueFrom(providerSchemas$);
  console.log('Terraform version', version);
  for (const providerSchema of providerSchemas) {
    console.log('Provide schema', providerSchema.attributes);
  }
}

main();
