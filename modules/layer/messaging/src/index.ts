import { defer } from 'rxjs';

const kafkaModule$ = defer(() => import('@komore/integration-kafka').then(({  }) => ({})));
const pulsarModule$ = defer(() => import('@komore/integration-pulsar').then(({ }) => ({})));

export {};
