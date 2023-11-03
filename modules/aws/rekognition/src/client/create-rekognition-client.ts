import { RekognitionClient as AwsSdkRekognitionClient } from '@aws-sdk/client-rekognition';

import { createAwsClient } from '@komore/aws';

import { rekognitionCommand } from '../rekognition.command';
import { rekognitionEvent } from '../rekognition.event';
import { rekognitionQuery } from '../rekognition.query';
import { type RekognitionClient } from './rekognition-client';
import { type RekognitionClientOptions } from './rekognition-client-options';
import { rekognitionCommandEventMapping } from './rekognition-command-event-mapping';

/**
 * Creates an Rekognition client
 * @param configuration Configuration
 * @returns Rekognition client
 */
export function createRekognitionClient(options: RekognitionClientOptions): RekognitionClient {
  return createAwsClient({
    commandEventMapping: rekognitionCommandEventMapping,
    commandType: rekognitionCommand,
    constructor: AwsSdkRekognitionClient,
    eventType: rekognitionEvent,
    options,
    queryType: rekognitionQuery,
  });
}
