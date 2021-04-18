import { runCommand } from '@komore/cli/run';
import { createCommand } from '@komore/local/cli';

export default createCommand('run', runCommand, {
  args: {
  },
  flags: {
  }
});
