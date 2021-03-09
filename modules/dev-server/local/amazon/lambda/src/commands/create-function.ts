import type {
  CreateFunctionRequest,
  FunctionConfiguration,
  LastUpdateStatus,
  PackageType,
  Runtime,
  State,
  StateReasonCode
} from '@aws-sdk/client-lambda';
import type { Command } from '@komore/dev-server-local-amazon/service';
import { pipe } from '@komore/reactive';
import { map, tap } from '@komore/reactive/operators';
import { lambdaFunctions } from '../lambda-functions';
import { createFunctionArn } from '../lambda-arn';

const supportedRuntimes: ReadonlyArray<string> = [Runtime.nodejs12x];
const supportedPackageTypes: ReadonlyArray<string> = [PackageType.Zip];

// TODO: https://github.com/aws/aws-sdk-js-v3/issues/1613
type TempCreateFunctionRequest = CreateFunctionRequest & { FunctionName: string } & Required<
    Pick<CreateFunctionRequest, 'PackageType' | 'Runtime'>
  >;

/**
 * Creates a Lambda function
 * @note {@link https://docs.aws.amazon.com/lambda/latest/dg/API_CreateFunction.html CreateFunction}
 */
export const createFunction: Command<TempCreateFunctionRequest, FunctionConfiguration> = pipe(
  assertSupportedRequest(
    'Code',
    'CodeSigningConfigArn',
    'FileSystemConfigs',
    'ImageConfig',
    'Layers',
    'Publish',
    'VpcConfig'
  ),
  map(
    ({
      DeadLetterConfig,
      Description,
      Environment,
      FunctionName,
      Handler,
      KMSKeyArn,
      MemorySize,
      PackageType,
      Role,
      Runtime,
      // TODO: Tags,
      Timeout,
      TracingConfig
    }) => {
      if (functions.has(FunctionName)) {
        throw new Error(`function ${FunctionName} already exists`);
      }

      if (FunctionName.includes(':')) {
        throw new Error(`invalid function name ${FunctionName}: ARNs are not supported`);
      }

      if (!supportedRuntimes.includes(Runtime)) {
        throw new Error(`invalid runtime ${Runtime}`);
      }

      if (!supportedPackageTypes.includes(PackageType)) {
        throw new Error('invalid package type ${request.PackageType');
      }

      const functionConfiguration: FunctionConfiguration & { FunctionName: string } = {
        FunctionName,
        FunctionArn: createFunctionArn(FunctionName),
        Runtime,
        Role,
        Handler,
        CodeSize: 0,
        Description,
        Timeout,
        MemorySize,
        LastModified: new Date().toISOString(),
        CodeSha256: 'TODO:code-sha-256',
        Version: '1',
        DeadLetterConfig,
        Environment,
        KMSKeyArn,
        TracingConfig,
        RevisionId: 'latest', // ?
        State: State.Inactive,
        StateReason: undefined,
        StateReasonCode: StateReasonCode.Idle,
        LastUpdateStatus: LastUpdateStatus.Successful,
        LastUpdateStatusReason: undefined,
        LastUpdateStatusReasonCode: undefined,
        PackageType
      };

      return functionConfiguration;
    }
  ),
  tap(functionConfiguration => functions.set(functionConfiguration.FunctionName, functionConfiguration))
);
