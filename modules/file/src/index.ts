import { defer } from '@komore/reactive';

const azureModule$ = defer(() => import('@komore/integration-azure/storage/blob').then(({ createBlobClient }) => ({})));
const awsModule$ = defer(() => import('@komore/integration-amazon/s3').then(({ })));


export {};
