import {
  argvToCommandLineArguments,
  createCliApplication,
  createCliApplicationLogEncoder,
  executeCliApplication,
} from '@komore/cli';
import { createLogger } from '@komore/logging';
import { createNodeConsoleLogAppender } from '@komore/logging/node';

import { generateApiList } from './generate-api-list';

createCliApplication({
  events: () => void 0,
  logger: createLogger({
    appenders: [
      createNodeConsoleLogAppender({
        encoder: createCliApplicationLogEncoder(),
      }),
    ],
  }),
});

executeCliApplication(argvToCommandLineArguments(process.argv), {
  commands: [generateApiList],
});
