import {
  type StartTextDetectionCommandOutput,
  type StartFaceDetectionCommandOutput,
} from '@aws-sdk/client-rekognition';

import { createAwsEventType } from '@komore/aws';
import { eventProperties } from '@komore/event';

import { rekognitionDomain } from '../rekognition.domain';

/**
 * Rekognition event
 */
export const rekognitionEvent = createAwsEventType(rekognitionDomain, {
  /**
   * Asynchronous detection of faces in a stored video started
   *
   * @note {@link https://docs.aws.amazon.com/rekognition/latest/APIReference/API_StartFaceDetection.html StartFaceDetection}
   */
  faceDetectionStarted: eventProperties<StartFaceDetectionCommandOutput>(),
  /**
   * Asynchronous detection of text in a stored video started
   *
   * @note {@link https://docs.aws.amazon.com/rekognition/latest/APIReference/API_StartTextDetection.html StartTextDetection}
   */
  textDetectionStarted: eventProperties<StartTextDetectionCommandOutput>(),
});
