import { awsProvider, s3Bucket } from '@komore/aws/stack';
import { defineStack, variable } from '@komore/stack';

console.log('Web stack');

/**
 * Web stack
 */
export const web = defineStack('web', $ =>
  $.pipe(
    // TODO: variables
    variable('awsRegion', {
      description: 'AWS region',
      type: 'string',
    }),
    variable('bucketName', {
      description: 'Bucket name',
      type: 'string',
    }),
    awsProvider('amazon', ({ variables: { awsRegion } }) => ({
      region: awsRegion.stringValue,
    })),
    s3Bucket('bucket', ({ variables: { bucketName } }) => ({
      acl: 'private',
      bucket: bucketName.stringValue,
    }))
  )
);
