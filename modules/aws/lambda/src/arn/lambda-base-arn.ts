import { type RegionalArn } from '@komore/aws';

/**
 * Lambda base ARN
 */
export type LambdaBaseArn<Value extends string> = RegionalArn<'lambda', Value>;
