import type { Bucket } from '@aws-sdk/client-s3';
import type { Observable } from '@komore/reactive';
import { forkJoin, of } from '@komore/reactive';
import { map, mergeMap } from '@komore/reactive/operators';
import { fromPromise } from '@komore/reactive/promise';
import type { Dirent } from 'fs';
import { readdir, stat } from 'fs/promises';
import { getS3EmulationPath } from './s3-emulation-path';

/**
 * Gets buckets based on the folders available in the S3 emulation path
 * @returns List of buckets
 */
export function getBuckets(): Observable<ReadonlyArray<Bucket>> {
  const path = getS3EmulationPath();
  const promise = readdir(path, { withFileTypes: true });
  return fromPromise(promise).pipe(
    map(files => files.filter(file => file.isDirectory())),
    mergeMap(file => buildBuckets(file))
  );
}

/**
 * Builds buckets
 * @param fileNames File names
 * @returns List of buckets
 */
function buildBuckets(files: ReadonlyArray<Dirent>): Observable<ReadonlyArray<Bucket>> {
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
  const promise = stat(directoryName);
  return fromPromise(promise).pipe(map(stats => ({ Name: directoryName, CreationTime: stats.ctime })));
}
