import { type Command, type MetadataBearer } from '@aws-sdk/types';
import { type SmithyResolvedConfiguration } from '@smithy/smithy-client';

/**
 * AWS command input type from an AWS command
 *
 * @private
 */
export type AwsCommandInputTypeFromAwsCommand<
  CommandType extends Command<object, object, MetadataBearer, MetadataBearer, SmithyResolvedConfiguration<unknown>>,
> = CommandType extends Command<
  object,
  infer CommandInput,
  MetadataBearer,
  MetadataBearer,
  SmithyResolvedConfiguration<unknown>
>
  ? CommandInput
  : never;
