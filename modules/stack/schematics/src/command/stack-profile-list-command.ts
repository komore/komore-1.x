import { createCliCommand } from '@komore/application-cli';
import { mapTo } from '@komore/reactive';

/**
 * Stack profile list command
 */
export const stackProfileListCommand = createCliCommand('profile', $ => $.pipe(mapTo(0)), {
  description: 'List available Cloud profiles'
});
