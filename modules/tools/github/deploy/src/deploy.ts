import * as core from '@actions/core';
import * as github from '@actions/github';
import type { Observable } from '@komore/reactive';

function deploy(): Observable<void> {
  const token = core.getInput('repository-token', { required: true });
  const configurationPath = core.getInput('configuration-path', { required: true });
  const updateLabels = core.getInput('update-labels', { required: false }) ?? false;

  const pullRequest = github.context.payload.pull_request;
  if (pullRequest === undefined) {
    
  }
}
