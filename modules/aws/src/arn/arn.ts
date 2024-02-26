/**
 * ARN (Amazon Resource Name)
 */
export type Arn<ServiceName extends string = string> = `arn:aws:${ServiceName}:${string}` & {
  readonly __tag_awsArn: unique symbol;
};
