import type { FormRecognizerClient } from '@azure/cognitiveservices-formrecognizer';
import { withAzureClient } from '@komore/integration-azure';
import { createFormRecognizerClient } from '../create-form-recognizer-client';

/**
 * Adds a Form Recognizer client to a message
 * @param formRecognizerClient Form Recognizer client
 * @returns Operator function that turns a message into a message with a Form Recognizer client
 */
export const withFormRecognizerClient = (formRecognizerClient?: FormRecognizerClient) =>
  withAzureClient('cognitiveservices-formrecognizer', formRecognizerClient ?? createFormRecognizerClient());
