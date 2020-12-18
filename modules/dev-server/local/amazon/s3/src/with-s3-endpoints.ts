import { HttpMethods, HttpStatuses, withHttpEndpoint as on } from '@komore/dev-server/core';
import { pipe } from 'rxjs';
import { getObject } from './commands/get-object';
import { listBuckets } from './commands/list-buckets';
import { listObjectsV2 } from './commands/list-objects-v2';

const { GET } = HttpMethods;
const { Ok } = HttpStatuses;

export const withS3HttpEndpoints = on('/s3', $ => $.pipe(
  on(GET, '/', () => listBuckets()),
  on(GET, '/', () => listObjectsV2())
));
