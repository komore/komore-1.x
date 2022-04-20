import { type Client, type SmithyResolvedConfiguration } from '@aws-sdk/smithy-client';
import { type Command, type MetadataBearer } from '@aws-sdk/types';
import { EMPTY, expand, type Observable, reduce } from '@komore/reactive';
import { sendAwsCommand } from './send-aws-command';

/**
 * Sends a batch AWS command using a client
 *
 * @param client Client
 * @param command Command
 * @param buildCommand Function used to create a command from an input
 * @param nextInput Function used to create the next input from a command output
 * @param reduceOutputs Function used to reduce a list of outputs
 * @param initialValue Initial seed used when reducing outputs
 * @param options Options
 * @returns Observable reduced command output
 */
export function sendBatchAwsCommand<
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
  return sendAwsCommand(client, buildCommand(commandInput), options).pipe(
    expand(output => {
      const nextCommandInput = nextInput(output);
      if (nextCommandInput === undefined) {
        return EMPTY;
      }

      return sendAwsCommand(client, buildCommand(nextCommandInput), options);
    }),
    reduce(reduceOutputs, initialValue)
  );
}
