# @komore/function for AWS Lambda

TODO: [Lambda Function URL]

[lambda function url]: https://aws.amazon.com/blogs/aws/announcing-aws-lambda-function-urls-built-in-https-endpoints-for-single-function-microservices/

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
import { apiGatewayTrigger } from '@komore/function-lambda';

export const exampleFunction = createFunction('exampleFunction', apiGatewayTrigger<RQ, RS>(), $ => $.pipe(

));
```

[aws lambda]: https://aws.amazon.com/lambda/
[official documentation]: https://komore.dev/modules/function/lambda
