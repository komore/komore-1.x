import {
  type DetectFacesCommand,
  type DetectTextCommand,
  type GetFaceDetectionCommand,
} from '@aws-sdk/client-rekognition';

import { awsQueryProperties, createAwsQueryType } from '@komore/aws';

import { rekognitionDomain } from '../rekognition.domain';

/**
 * Rekognition query
 */
export const rekognitionQuery = createAwsQueryType(rekognitionDomain, {
  /**
   * Detects faces in an image and converts it into machine-readable text
   *
   * @note {@link https://docs.aws.amazon.com/rekognition/latest/APIReference/API_DetectFaces.html DetectFaces}
   */
  detectFaces: awsQueryProperties<DetectFacesCommand>(),
  /**
   * Detects text in an image and converts it into machine-readable text
   *
   * @note {@link https://docs.aws.amazon.com/rekognition/latest/APIReference/API_DetectText.html DetectText}
   */
  detectText: awsQueryProperties<DetectTextCommand>(),
  /**
   * TODO
   *
   * @note {@link https://docs.aws.amazon.com/rekognition/latest/APIReference/API_GetFaceDetection.html GetFaceDetection}
   */
  getFaceDetection: awsQueryProperties<GetFaceDetectionCommand>(),
});
