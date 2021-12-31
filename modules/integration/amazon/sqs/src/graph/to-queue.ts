import { OperatorFunction } from "@komore/reactive";

export function toQueue(queueUrl: string): <T extends MessageWithAmazonSqsClient