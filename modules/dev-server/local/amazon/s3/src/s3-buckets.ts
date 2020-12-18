import { Bucket } from '@aws-sdk/client-s3';
import { Dirent } from 'fs';
import { readdir, stat } from 'fs/promises';
import { forkJoin, from, Observable, of } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { getS3EmulationPath } from './s3-emulation-path';

/**
 * Gets buckets based on the folders available in the S3 emulation path
 * @returns List of buckets
 */
export function getBuckets(): Observable<ReadonlyArray<Bucket>> {
  const path = getS3EmulationPath();
  return from(readdir(path, { withFileTypes: true })).pipe(
    map(files => files.filter(file => file.isDirectory())),
    mergeMap(file => buildBuckets(file))
  );
}

/**
 * Builds buckets
 * @param fileNames File names
 * @returns List of buckets
 */
function buildBuckets(files: ReadonlyArray<Dirent>): Observable<Array<Bucket>> {
  // TODO: change once forkJoin is safe for empty arrays (rxjs 7?)
  if (files.length === 0) {
    return of([]);
  }

  return forkJoin(files.map(({ name }) => buildBucket(name)));
}

/**
 * Builds a bucket
 * @param directoryName Directory name
 * @returns Bucket
 */
function buildBucket(directoryName: string): Observable<Bucket> {
  return from(stat(directoryName)).pipe(map(stats => ({ Name: directoryName, CreationTime: stats.ctime })));
}
