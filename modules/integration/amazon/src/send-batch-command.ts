import type { Client, SmithyResolvedConfiguration } from '@aws-sdk/smithy-client';
import type { Command, MetadataBearer } from '@aws-sdk/types';
import { EMPTY, Observable } from '@komore/reactive';
import { expand, reduce } from '@komore/reactive/operators';
import { sendCommand } from './send-command';

/**
 * Sends a batch command using a client
 * @param client Client
 * @param command Command
 * @param buildCommand Function used to create a command from an input
 * @param nextInput Function used to create the next input from a command output
 * @param reduceOutputs Function used to reduce a list of outputs
 * @param initialValue Initial seed used when reducing outputs
 * @param options Options
 * @returns Observable reduced command output
 */
export function sendBatchCommand<
  AwsClientHandlerOptions,
  AwsClientInput extends object,
  AwsClientOutput extends MetadataBearer,
  AwsClientResolvedConfiguration extends SmithyResolvedConfiguration<AwsClientHandlerOptions>,
  InputType extends AwsClientInput,
  OutputType extends AwsClientOutput,
  ReducedOutputType extends OutputType
>(
  client: Client<AwsClientHandlerOptions, AwsClientInput, AwsClientOutput, AwsClientResolvedConfiguration>,
  commandInput: InputType,
  buildCommand: (
    input: InputType
  ) => Command<
    AwsClientInput,
    InputType,
    AwsClientOutput,
    OutputType,
    SmithyResolvedConfiguration<AwsClientHandlerOptions>
  >,
  nextInput: (output: OutputType) => InputType | undefined,
  reduceOutputs: (prev: ReducedOutputType, curr: OutputType) => ReducedOutputType,
  initialValue: ReducedOutputType,
  options?: AwsClientHandlerOptions
): Observable<ReducedOutputType> {
  return sendCommand(client, buildCommand(commandInput), options).pipe(
    expand(output => {
      const nextCommandInput = nextInput(output);
      if (nextCommandInput === undefined) {
        return EMPTY;
      }

      return sendCommand(client, buildCommand(nextCommandInput), options);
    }),
    reduce(reduceOutputs, initialValue)
  );
}
