import { GetObjectCommandInput, GetObjectCommandOutput } from '@aws-sdk/client-s3';
import { Observable } from 'rxjs';

/**
 * Retrieves an object
 * @param commandInput GetObject command input
 * @returns GetObject command output
 * @note {@link https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObject.html GetObject}
 */
export function getObject(commandInput: GetObjectCommandInput): Observable<GetObjectCommandOutput> {

}
