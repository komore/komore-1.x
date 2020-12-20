import { HttpMethods, withHttpEndpoint as on } from '@komore/api/http';
import { getObject } from './commands/get-object';
import { headBucket } from './commands/head-bucket';
import { listBuckets } from './commands/list-buckets';
import { listObjectsV2 } from './commands/list-objects-v2';

const { GET, HEAD } = HttpMethods;

export const withS3Endpoints = on('/s3',
  // TODO: Host: :Bucket.s3.amazon.com
  on(GET, '?list-type=2&continuation-token=:ConfigurationToken&delimited=:Delimiter&encoding-type=:EncodingType&fetch-owner=:FetchOwner&max-keys=:MaxKeys&prefix=:Prefix&start-after=:StartAfter', listObjectsV2),
  on(GET, listBuckets),
  on(HEAD, headBucket),
  on('/:Key',
    on(GET, `?versionId=:VersionId&partNumber=:PartNumber
      &response-cache-control=:ResponseCacheControl
      &response-content-disposition=:ResponseContentDisposition
      &response-content-encoding=:ResponseContentEncoding
      &response-content-language=:ResponseContentLanguage
      &response-content-type=:ResponseContentType
      &response-expires=:ResponseExpires`,
      getObject)
    /* TODO:
      If-Match: :IfMatch
      If-Modified-Since: :IfModifiedSince
      If-None-Match: :IfNoneMatch
      If-Unmodified-Since: :IfUnmodifiedSince
      Range: :Range
      x-amz-server-side-encryption-customer-algorithm: :SSECustomerAlgorithm
      x-amz-server-side-encryption-customer-key: :SSECustomerKey
      x-amz-server-side-encryption-customer-key-MD5: :SSECustomerKeyMD5
      x-amz-request-payer: :RequestPayer // can be ignored
      x-amz-expected-bucket-owner: :ExpectedBucketOwner
    */
  )
);
