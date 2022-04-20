import {
  DetectFacesCommand,
  type DetectFacesCommandInput,
  type DetectFacesCommandOutput,
  type RekognitionClient,
} from '@aws-sdk/client-rekognition';
import { sendAwsCommand } from '@komore/integration-aws';
import { type Observable } from '@komore/reactive';

/**
 * Detects faces in an image and converts it into machine-readable text
 *
 * @param rekognitionClient Rekognition client
 * @param commandInput Base64 encoded image and attributes used to detect faces
 * @returns List of detected faces
 * @note {@link https://docs.aws.amazon.com/rekognition/latest/dg/API_DetectFaces.html DetectFaces}
 */
export function detectFaces(
  rekognitionClient: RekognitionClient,
  commandInput: DetectFacesCommandInput
): Observable<DetectFacesCommandOutput> {
  return sendAwsCommand(rekognitionClient, new DetectFacesCommand(commandInput));
}
