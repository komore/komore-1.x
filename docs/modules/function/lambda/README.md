[//]: #title 'Lambda Function'
[//]: #description 'komore Lambda function module overview'
[//]: #keyword 'function'
[//]: #keyword 'lambda'
[//]: #keyword '@komore/function'
[//]: #keyword '@komore/function-lambda'
[//]: #path 'modules/function/lambda'
[//]: #path-alias 'modules/function/lambda/overview'
[//]: #see-also './usage.md'
[//]: #see-also './context.md'
[//]: #see-also './triggers.md'
[//]: #see-also '../README.md'
[//]: #see-also '../../../concepts/function-as-a-service.md'

# @komore/function-lambda

The [`@komore/function-lambda`] module enables function execution within an [AWS Lambda] host environment.

## Key concepts

- [Lambda function triggers] are event-emitting sources that cause a function to run
- A [Lambda context] holds contextual information about an event
- Emitted values contain the Lambda event and its associated context

## Installation

The `@komore/function-lambda` module is published on the Npm registry.

| Tool | Command                                      |
| :--- | :------------------------------------------- |
| npm  | `npm install @komore/function-lambda --save` |
| pnpm | `pnpm add @komore/function-lambda`           |
| Yarn | `yarn add @komore/function-lambda`           |

[`@komore/function-lambda`]: ./install.md
[aws lambda]: https://aws.amazon.com/lambda/
[lambda function triggers]: ./triggers.md
