import type { DetectFacesCommandInput, RekognitionClient } from '@aws-sdk/client-rekognition';
import { DetectFacesCommand } from '@aws-sdk/client-rekognition';
import { sendCommand } from '@komore/integration-amazon';

/**
 * Detects faces in an image and converts it into machine-readable text
 * @param rekognitionClient Rekognition client
 * @param commandInput Base64 encoded image and attributes used to detect faces
 * @returns List of detected faces
 * @note {@link https://docs.aws.amazon.com/rekognition/latest/dg/API_DetectFaces.html DetectFaces}
 */
export const detectFaces = (rekognitionClient: RekognitionClient, commandInput: DetectFacesCommandInput) =>
  sendCommand(rekognitionClient, new DetectFacesCommand(commandInput));

