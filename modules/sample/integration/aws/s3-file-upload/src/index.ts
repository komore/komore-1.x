import { createFunctionFactory } from '@komore/function';
import { lambdaFunctionProvider } from '@komore/function/lambda';
import { s3FileUploadCommandHandler } from './s3-file-upload.command-handler';
import { s3FileUploadCommandProcessor } from './s3-file-upload.command-handler';

const functionFactory = createFunctionFactory({
  providers: [
    lambdaFunctionProvider()
  ]
});

export const getPreSignedFileUploadRequest = functionFactory().pipe(
  // Observable<{ message: ... }> where message depends on FunctionConfiguration.factory's message type
  processCommandWith(exampleCommandProcessor),
  // Observable<{ message } & { command }>
  withAuthorizationFrom(exampleAuthorizer),
  // Observable<{ message } & { command } & { authorization }>
  withAggregate(exampleAggregateFactory, ({ command }) => command.exampleAggregateId),
  // Observable<{ message } & { command } & { authorization } & { aggregate }>
  withCommandHandler(exampleCommandHandler) // Observable<{ message } & { command } & { authorization } & { aggregate } & { events }>
);
