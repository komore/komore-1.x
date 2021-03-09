import { defer } from '@komore/reactive';

const githubModule$ = defer(() => import('@komore/integration-github').then(({  }) => ({})));
const gitlabModule$ = defer(() => import('@komore/integration-gitlab').then(({ }) => ({})));

export {};
