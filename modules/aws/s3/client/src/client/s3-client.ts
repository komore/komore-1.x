import { type Client } from '@komore/client';

import { type s3Command } from '../s3.command';
import { type s3Error } from '../s3.error';
import { type s3Event } from '../s3.event';
import { type s3Query } from '../s3.query';
import { type s3ClientCommandEventMap } from './s3-client-command-event-map';

/**
 * S3 client
 */
export interface S3Client
  extends Client<typeof s3Command, typeof s3Event, typeof s3Query, typeof s3Error, typeof s3ClientCommandEventMap> {}
