/**
 * Lambda event identity
 */
export interface LambdaEventIdentity<Id extends string = string, Type extends string | undefined = string | undefined> {
  readonly principalId: Id;
  readonly type: Type;
}
