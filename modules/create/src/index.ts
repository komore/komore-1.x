import { setupCommand } from './setup-command';
import { executeCli } from '@komore/application-cli';

executeCli(process.argv, {
  commands: [setupCommand],
});
