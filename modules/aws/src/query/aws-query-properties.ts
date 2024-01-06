import { type MetadataBearer } from '@aws-sdk/types';
import { type Command } from '@smithy/types';

import { queryProperties } from '@komore/query';

import { type AwsCommandOutputTypeFromAwsCommand } from '../aws-command-output-type-from-aws-command';
import { type AwsCommandInputTypeFromAwsCommand } from '../aws-command-input-type-from-aws-command';

/**
 * Creates an AWS query properties schema
 *
 * @returns AWS query properties schema
 * @template CommandType AWS command type
 */
export function awsQueryProperties<CommandType extends Command<object, object, MetadataBearer, MetadataBearer, any>>() {
  return queryProperties<
    AwsCommandOutputTypeFromAwsCommand<CommandType>,
    AwsCommandInputTypeFromAwsCommand<CommandType>
  >();
}
