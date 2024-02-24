import { type Command, type MetadataBearer } from '@aws-sdk/types';
import { type SmithyResolvedConfiguration } from '@smithy/smithy-client';

/**
 * AWS command output type from an AWS command
 *
 * @private
 */
export type AwsCommandOutputTypeFromAwsCommand<
  CommandType extends Command<object, object, MetadataBearer, MetadataBearer, SmithyResolvedConfiguration<unknown>>,
> = CommandType extends Command<
  object,
  object,
  MetadataBearer,
  infer CommandOutput,
  SmithyResolvedConfiguration<unknown>
>
  ? CommandOutput
  : never;
