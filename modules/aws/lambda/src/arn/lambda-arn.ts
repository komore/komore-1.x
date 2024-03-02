import { type LambdaFunctionAliasArn } from './function/alias/lambda-function-alias-arn';
import { type LambdaFunctionArn } from './function/lambda-function-arn';
import { type LambdaFunctionVersionArn } from './function/version/lambda-function-version-arn';
import { type LambdaLayerArn } from './layer/lambda-layer-arn';
import { type LambdaLayerVersionArn } from './layer/version/lambda-layer-version-arn';

/**
 * Lambda ARN
 */
export type LambdaArn =
  | LambdaFunctionArn
  | LambdaFunctionAliasArn
  | LambdaFunctionVersionArn
  | LambdaLayerArn
  | LambdaLayerVersionArn;
