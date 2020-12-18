import { HeadBucketRequest } from '@aws-sdk/client-s3';
import { pipe } from 'rxjs';
import { Command } from '../../command';

export const headBucket: Command<HeadBucketRequest, void> = pipe(

);
