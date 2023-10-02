import { addLogEventMapping, createLogEventMapping } from '@komore/logging';
import { createNodeConsoleLogAppender } from '@komore/logging/node';
import { createNodeHost } from '@komore/node';
import { cache, defer, of } from '@komore/reactive';

import { createCliApplicationLogEncoder } from './log/create-cli-application-log-encoder';

export const cliApplicationSetup = defer(() => {
  const nodeHost = createNodeHost();
  nodeHost; // TODO
  const encoder = createCliApplicationLogEncoder();
  const target = console;
  const logAppender = createNodeConsoleLogAppender({ encoder, target });
  logAppender;
  // TODO: addLogAppender('console', logAppender);
  const logEventMapping = createLogEventMapping('console');
  addLogEventMapping(logEventMapping);
  return of(void 0);
}).pipe(cache());
