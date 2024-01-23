import { feature } from '@komore/testing';

import { isCloudStorageBucketName } from './is-cloud-storage-bucket-name';

feature('Is Cloud Storage bucket name', {
  'returns when a string is a valid bucket name'(bucketName: string, expectedResult: boolean) {
    when: 'testing that a bucket name is a valid Cloud Storage bucket name';
    const valid = isCloudStorageBucketName(bucketName);

    expect: 'true to be returned if the string is a valid bucket name';
    valid === expectedResult;

    where: [
      ['too-short', false],
      ['long-enough', true],
    ];
  },
});
