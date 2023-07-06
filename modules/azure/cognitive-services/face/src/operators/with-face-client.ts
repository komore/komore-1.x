import { type FaceClient } from '@azure/cognitiveservices-face';
import { withAzureClient } from '@komore/integration-azure';
import { createFaceClient } from '../create-face-client';

/**
 * Adds a Face client to a message
 * @param faceClient Face client
 * @returns Operator function that turns a message into a message with a Face client
 */
export const withFaceClient = (faceClient?: FaceClient) =>
  withAzureClient('cognitiveservices-face', faceClient ?? createFaceClient());
