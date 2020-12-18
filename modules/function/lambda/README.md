# komore Function - AWS Lambda

Support for the [AWS Lambda] execution environment.

[Official documentation]

## Install

```shell
npm install @komore/function-lambda
```

or

```shell
yarn add @komore/function-lambda
```

## Usage

```typescript
import { awsLambdaProvider } from '@komore/function-lambda';

export const exampleFunction = createFunction({
  providers: [awsLambdaProvider()]
});
```

[aws lambda]: https://aws.amazon.com/lambda/
[official documentation]: https://komore.dev/function/lambda
