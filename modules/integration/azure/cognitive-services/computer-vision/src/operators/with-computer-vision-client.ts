import type { ComputerVisionClient } from '@azure/cognitiveservices-computervision';
import { withAzureClient } from '@komore/integration-azure';
import { createComputerVisionClient } from '../create-computer-vision-client';

/**
 * Adds a Computer Vision client to a message
 * @param computerVisionClient Computer Vision client
 * @returns Operator function that turns a message into a message with a Computer Vision client
 */
export const withComputerVisionClient = (computerVisionClient?: ComputerVisionClient) =>
  withAzureClient('cognitiveservices-computervision', computerVisionClient ?? createComputerVisionClient());
