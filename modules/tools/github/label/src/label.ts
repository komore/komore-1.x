import * as core from '@actions/core';
import * as github from '@actions/github';
import type { LabelOptions } from './label-options';

type GithubClient = ReturnType<typeof github.getOctokit>;

/**
 * Manages labels for a pull request
 * @param options Label options
 */
export function label(options: LabelOptions) {
  const githubClient = github.getOctokit(options.repositoryToken);
}

function getPullRequest(githubClient: GithubClient, pullNumber: string) {
  githubClient.pull
}
