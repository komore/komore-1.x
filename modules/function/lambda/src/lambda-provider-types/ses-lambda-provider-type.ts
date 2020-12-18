import { SESEvent } from 'aws-lambda';
import { s3EventType, s3MessageType } from '../lambda';
import { createLambdaEventTypeTest } from '../lambda-event-types/create-lambda-event-type-test';
import { createLambdaRecordProviderType } from './create-lambda-record-provider-type';

/**
 * Creates an S3 Lambda function provider type
 */
export const createS3LambdaFunctionProviderType = () =>
  createLambdaRecordProviderType(s3MessageType, createLambdaEventTypeTest<S3Event>(s3EventType));
