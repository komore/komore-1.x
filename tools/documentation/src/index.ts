import { executeCli } from '@komore/application-cli';
import { generateApiList } from './generate-api-list';

executeCli(process.argv.slice(1), {
  commands: [generateApiList],
});
