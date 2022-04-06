import { defineModule, variable } from '@komore/stack';
import { withGithubRepositoryWebhook } from '@komore/stack-github';

/**
 * Bot - GitHub module
 */
export const botGithubModule = defineModule('github', $ =>
  $.pipe(
    variable('githubOwner', {
      description: 'GitHub owner/organization',
      type: 'string',
    }),
    variable('githubToken', {
      description: 'GitHub token',
      sensitive: true,
      type: 'string',
    }),
    variable('githubRepository', {
      description: 'GitHub repository name',
      type: 'string',
    })
    withGithubRepositoryWebhook
  )
);
