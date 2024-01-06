import { deferPromise } from '@komore/reactive';

const azureModule$ = deferPromise(() =>
  import('@komore/azure/blob-storage').then(({ createBlobStorageClient: _ }) => ({}))
);
const awsModule$ = deferPromise(() => import('@komore/aws/s3').then(({ createS3Client: _ }) => ({})));

export {};
