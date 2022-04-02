import { defineStack, withVariable } from '@komore/stack';
import { usingAmazon } from '@komore/stack-provider-amazon';
import { usingGithub } from '@komore/stack-provider-github';

console.log('Bot stack');

/**
 * Bot stack
 */
export const org = defineStack('org', scope$ =>
  scope$.pipe(
    withVariable('aws_region', {
      description: 'AWS region',
      type: 'string',
    }),
    usingAmazon('amazon', ({ variables: { aws_region } }) => ({
      region: aws_region.value,
    })),
    withVariable('github_owner', {
      description: 'GitHub owner/organization',
      type: 'string',
    }),
    withVariable('github_token', {
      description: 'GitHub token',
      sensitive: true,
      type: 'string',
    }),
    withVariable('github_repository', {
      description: 'GitHub repository name',
      type: 'string',
    }),
    usingGithub('github', ({ variables: { github_owner, github_token } }) => ({
      owner: github_owner.value,
      token: github_token.value,
    }))
  )
);
