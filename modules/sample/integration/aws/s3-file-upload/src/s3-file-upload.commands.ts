import { createCommand, schema } from '@komore/command';

/**
 * Get S3 file upload HTTP request
 */
export const getS3FileUploadHttpRequest = createCommand(
  's3-file-upload.get-http-request',
  schema<{ bucketName: string, fileName: string }>()
);
