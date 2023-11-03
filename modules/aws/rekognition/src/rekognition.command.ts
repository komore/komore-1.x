import { type StartFaceDetectionCommandInput, type StartTextDetectionCommandInput } from '@aws-sdk/client-rekognition';

import { createAwsCommandType } from '@komore/aws';
import { commandProperties } from '@komore/command';

import { rekognitionDomain } from './rekognition.domain';

/**
 * Rekognition command
 */
export const rekognitionCommand = createAwsCommandType(rekognitionDomain, {
  /**
   * Starts asynchronous detection of faces in a stored video
   *
   * @note {@link https://docs.aws.amazon.com/rekognition/latest/APIReference/API_StartFaceDetection.html StartFaceDetection}
   */
  startFaceDetection: commandProperties<StartFaceDetectionCommandInput>(),
  /**
   * Starts asynchronous detection of text in a stored video
   *
   * @note {@link https://docs.aws.amazon.com/rekognition/latest/APIReference/API_StartTextDetection.html StartTextDetection}
   */
  startTextDetection: commandProperties<StartTextDetectionCommandInput>(),
});
