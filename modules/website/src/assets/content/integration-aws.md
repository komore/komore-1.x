# AWS Integration

TODO.


```typescript
import { withAwsClient } from '@komore/integration-amazon';
import { S3Client } from '@aws-sdk/client-s3';

const s3Client = new S3Client({});

$.pipe(
  withAwsClient('s3', s3Client)
);
