import { executeCliApplication } from '@komore/cli';
import { generateApiList } from './generate-api-list';

executeCliApplication(process.argv.slice(1), {
  commands: [generateApiList],
});
