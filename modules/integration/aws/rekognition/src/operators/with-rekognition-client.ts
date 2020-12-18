import { RekognitionClient } from '@aws-sdk/client-rekognition';
import { withAwsClient } from '@komore/integration-aws';

/**
 * Adds a Rekognition client to a message
 * @param rekognitionClient Rekognition client
 * @returns Unary function that turns a message into a message with a Rekognition client
 */
export const withRekognitionClient = (rekognitionClient?: RekognitionClient) =>
  withAwsClient('rekognition', rekognitionClient ?? new RekognitionClient({}));
