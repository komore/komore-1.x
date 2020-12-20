import { GetObjectOutput, GetObjectRequest } from '@aws-sdk/client-s3';
import { Command, throwUnimplementedCommand } from '@komore/dev-server-local-amazon/service';

/**
 * Retrieves an object
 * @note {@link https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObject.html GetObject}
 */
export const getObject: Command<GetObjectRequest, GetObjectOutput> = throwUnimplementedCommand('GetObject');
