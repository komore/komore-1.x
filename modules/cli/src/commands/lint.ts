import { lintCommand } from '@komore/cli/lint';
import { createCommand } from '@komore/local/cli';

export default createCommand('lint', lintCommand, {
  args: {
  },
  flags: {
  }
});
