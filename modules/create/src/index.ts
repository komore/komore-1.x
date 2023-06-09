import { createCliApplication, executeCliApplication } from '@komore/application-cli';

import { setupCommand } from './setup-command';

createCliApplication({ })
executeCliApplication(process.argv, {
  commands: [setupCommand],
});
