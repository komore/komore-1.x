/**
 * Lambda event identity
 */
export type LambdaEventIdentity<Id extends string = string, Type extends string | undefined = undefined> = {
  /**
   * Principal identifier
   */
  readonly principalId: Id;
} & (Type extends string
  ? {
      /**
       * Type
       */
      readonly type: Type;
    }
  : {});
