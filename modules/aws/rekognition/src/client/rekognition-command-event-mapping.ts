import { type CommandName } from '@komore/command';
import { type EventName } from '@komore/event';
import { type ReadonlyRecord } from '@komore/typescript';

import { type rekognitionEvent } from '../rekognition.event';
import { type rekognitionCommand } from '../rekognition.command';

/**
 * Rekognition command event mapping
 */
export const rekognitionCommandEventMapping = {
  startFaceDetection: 'faceDetectionStarted',
  startTextDetection: 'textDetectionStarted',
} as const satisfies ReadonlyRecord<CommandName<typeof rekognitionCommand>, EventName<typeof rekognitionEvent>>;
