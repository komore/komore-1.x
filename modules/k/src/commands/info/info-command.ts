import { createCliCommand } from '@komore/application-cli';
import { mapTo, tapNext } from '@komore/reactive';

/**
 * info command definition
 */
export const infoCommand = createCliCommand(
  'info',
  $ =>
    $.pipe(
      tapNext(() => console.log('info command')),
      mapTo(1)
    ),
  {
    description: 'TODO: info',
  }
);
