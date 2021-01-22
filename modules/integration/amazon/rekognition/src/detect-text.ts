import type { DetectTextCommandInput, RekognitionClient } from '@aws-sdk/client-rekognition';
import { DetectTextCommand } from '@aws-sdk/client-rekognition';
import { sendCommand } from '@komore/integration-amazon';

/**
 * Detects text in an image and converts it into machine-readable text
 * @param rekognitionClient Rekognition client
 * @param commandInput Base64 encoded image and filters used to detect text
 * @returns List of detected texts
 * @note {@link https://docs.aws.amazon.com/rekognition/latest/dg/API_DetectText.html DetectText}
 */
export const detectText = (rekognitionClient: RekognitionClient, commandInput: DetectTextCommandInput) =>
  sendCommand(rekognitionClient, new DetectTextCommand(commandInput));
