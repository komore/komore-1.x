import { type AwsClient } from '@komore/aws';

import { type rekognitionCommand } from '../rekognition.command';
import { type rekognitionEvent } from '../rekognition.event';
import { type rekognitionQuery } from '../rekognition.query';
import { type rekognitionError } from '../rekognition.error';
import { type rekognitionCommandEventMapping } from './rekognition-command-event-mapping';

/**
 * Rekognition client
 */
export type RekognitionClient = AwsClient<
  typeof rekognitionCommand,
  typeof rekognitionCommandEventMapping,
  typeof rekognitionEvent,
  typeof rekognitionQuery,
  typeof rekognitionError
>;
