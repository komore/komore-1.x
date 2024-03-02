/**
 * ARN (Amazon Resource Name)
 */
export type Arn<
  ServiceName extends string = string,
  Value extends string = string,
> = `arn:aws:${ServiceName}:${Value}` & {
  readonly __tag_awsArn: unique symbol;
};
