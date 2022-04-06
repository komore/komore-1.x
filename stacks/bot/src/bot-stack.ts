import { defineStack, variable } from '@komore/stack';
import { awsProvider } from '@komore/stack-aws';
import { githubProvider } from '@komore/stack-github';

console.log('Bot stack');

/**
 * Bot stack
 */
export const botStack = defineStack('bot', $ =>
  $.pipe(
    variable('awsRegion', {
      description: 'AWS region',
      type: 'string',
    }),
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
    }),
    awsProvider('aws', ({ variables: { awsRegion } }) => ({
      region: awsRegion.stringValue,
    })),
    githubProvider('github', ({ variables: { githubOwner, githubToken } }) => ({
      owner: githubOwner.stringValue,
      token: githubToken.stringValue,
    }))
  )
);
