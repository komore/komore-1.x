import { BatchDetectDominantLanguageCommand, BatchDetectDominantLanguageCommandInput, BatchDetectDominantLanguageCommandOutput, ComprehendClient } from "@aws-sdk/client-comprehend"
import { sendBatchCommand, sendCommand } from "@komore/integration-aws";
import { of } from "rxjs";

/**
 * `Batch-Get-Item` command output with guaranteed consumed capacity and response properties
 */
type BatchDetectDominantLanguageCommandOutputFixed = BatchDetectDominantLanguageCommandOutput & {
  ErrorList: NonNullable<BatchDetectDominantLanguageCommandOutput['ErrorList']>;
  ResultList: NonNullable<BatchDetectDominantLanguageCommandOutput['ResultList']>;
};

// FIXME: https://github.com/aws/aws-sdk-js-v3/issues/1613
type BatchDetectDominantLanguageCommandInputFixed = BatchDetectDominantLanguageCommandInput & {
  TextList: NonNullable<BatchDetectDominantLanguageCommandInput['TextList']>;
}

/**
 * Detects the dominant languages used in a batch of texts
 *
 * This function contains additional logic to deal with some limitations of the `BatchDetectDominantLanguage` API it
 * is based on:
 *
 * - More than 25 documents can be processed
 *
 * @param comprehendClient Comprehend client
 * @param commandInput `BatchDetectDominantLanguage` command input
 * @returns List of detected dominant language for each text in the batch
 * @note {@link https://docs.aws.amazon.com/comprehend/latest/dg/API_BatchDetectDominantLanguage.html BatchDetectDominantLanguage}
 */
export const batchDetectDominantLanguage = (comprehendClient: ComprehendClient, commandInput: BatchDetectDominantLanguageCommandInputFixed) => {
  if (commandInput.TextList.length === 0) {
    const noTextOutput: BatchDetectDominantLanguageCommandOutputFixed = {
      $metadata: {},
      ErrorList: [],
      ResultList: []
    };

    return of(noTextOutput);
  }


  return sendCommand(comprehendClient, new BatchDetectDominantLanguageCommand(commandInput));

  const textCount = commandInput.TextList.length;

  if (textCount < 25) {

  }
  return sendBatchCommand(
    comprehendClient,
    commandInput,
    input => new BatchDetectDominantLanguageCommand(input),
    result => (result.UnprocessedKeys ? { ...commandInput, RequestItems: result.UnprocessedKeys } : undefined),,
    reduceBatchDetectDominantLanguageCommandOutputs,
    {
      $metadata: {},
      ErrorList: [],
      ResultList: []
    } as BatchDetectDominantLanguageReducedCommandOutput
  );
}

/**
 * Reduces `BatchDetectDominantLanguage` command outputs into a single output
 * @param prev Previous `BatchDetectDominantLanguage` command output
 * @param curr Current `BatchDetectDominantLanguage` command output
 * @returns Reduced `BatchDetectDominantLanguage` command output
 * @note To improve performance, the previous command gets mutated
 */
function reduceBatchDetectDominantLanguageCommandOutputs(
  prev: BatchDetectDominantLanguageReducedCommandOutput,
  curr: BatchDetectDominantLanguageCommandOutput
): BatchDetectDominantLanguageReducedCommandOutput {
  if (curr.ErrorList !== undefined) {
    prev.ErrorList.concat(curr.ErrorList);
  }

  if (curr.ResultList !== undefined) {
    prev.ResultList.concat(curr.ResultList);
  }

  return {
    ...prev,
    $metadata: curr.$metadata
  };
}
