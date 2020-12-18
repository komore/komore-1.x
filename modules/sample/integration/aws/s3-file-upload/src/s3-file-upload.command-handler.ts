import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3';
import { createHandler, on } from '@komore/command';
import { createRequest } from '@komore/integration-aws';
import { preSignS3Request } from '@komore/integration-aws/s3';
import { map, mergeMap } from 'rxjs/operators';
import { getS3FileUploadHttpRequest } from './s3-file-upload.commands';

const s3Client = new S3Client({});

const s3FileUploadCommandHandler = createHandler(
  on(getS3FileUploadHttpRequest, $ => $.pipe(
    map(({ command: { bucketName: Bucket, fileName: Key } }) => new PutObjectCommand({ Bucket, Key })),
    mergeMap(command => createRequest(command, s3Client)),
    mergeMap(httpRequest => preSignS3Request(httpRequest, undefined, s3Client))
  ))
);
