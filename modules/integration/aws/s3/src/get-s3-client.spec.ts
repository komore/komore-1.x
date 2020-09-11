import { S3Client } from '@aws-sdk/client-s3';
import { getS3Client } from './get-s3-client';

/**
 * Get S3 client specification
 */
describe('getS3Client', () => {
  it('returns the S3 client when provided', () => {
    // given: an S3 client
    const s3Client = new S3Client({});
    // when: getting the S3 client
    const returnedClient = getS3Client(s3Client);
    // then: the provided client is returned
    expect(returnedClient).toBe(s3Client);
  });

  it('returns an S3 client with default settings when no client is provided', () => {
    // when: getting the S3 client
    const returnedClient = getS3Client(undefined);
    // then: an S3 client is returned
    expect(returnedClient).toBeInstanceOf(S3Client);
  });
});
