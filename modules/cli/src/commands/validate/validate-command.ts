import { createCliCommand } from '@komore/application-cli';
import { mapTo, tapNext } from '@komore/reactive';

/**
 * validate command definition
 */
export const validateCommand = createCliCommand(
  'validate',
  $ =>
    $.pipe(
      tapNext(() => console.log('TODO: validate workspace')),
      mapTo(0)
    ),
  {
    description: 'Validates the workspace',
  }
);
