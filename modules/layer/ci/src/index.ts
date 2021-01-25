import { defer } from 'rxjs';

const githubModule$ = defer(() => import('@komore/integration-github').then(({  }) => ({})));
const gitlabModule$ = defer(() => import('@komore/integration-gitlab').then(({ }) => ({})));

export {};
