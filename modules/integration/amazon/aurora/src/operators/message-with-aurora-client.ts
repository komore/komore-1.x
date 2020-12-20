import { MessageWithAwsClient } from '@komore/integration-aws';
import { AwsClient } from 'modules/integration/aws/src/aws-client';

export type MessageWithAuroraClient = MessageWithAwsClient<any, AwsClient