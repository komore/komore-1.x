import {
  DetectTextCommand,
  type DetectTextCommandInput,
  type DetectTextCommandOutput,
  type RekognitionClient,
} from '@aws-sdk/client-rekognition';
import { sendAwsCommand } from '@komore/integration-aws';
import { type Observable } from '@komore/reactive';

/**
 * Detects text in an image and converts it into machine-readable text
 *
 * @param rekognitionClient Rekognition client
 * @param commandInput Base64 encoded image and filters used to detect text
 * @returns List of detected texts
 * @note {@link https://docs.aws.amazon.com/rekognition/latest/dg/API_DetectText.html DetectText}
 */
export function detectText(
  rekognitionClient: RekognitionClient,
  commandInput: DetectTextCommandInput
): Observable<DetectTextCommandOutput> {
  return sendAwsCommand(rekognitionClient, new DetectTextCommand(commandInput));
}
