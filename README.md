# komore

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

komore is a [TypeScript] framework for [Node] and the browser meant to ease the creation of services designed around the
[CQRS], [Event Sourcing] and [Saga] patterns in a [serverless], [Function-as-a-Service] environment.

komore functions use [declarative], [functional] and [reactive] programming paradigms. They can be executed within
[AWS Lambda], [Azure Functions] or [Google Cloud Functions] environments.

More information about those concepts can be found in the [architecture] and [development] documentation.

## Concept

komore TODO.

## Development

komore comes with first-class support for [Terraform].

The framework also offers a fully integrated development experience:

- Generate domains, errors, functions, etc. using schematics
- Execute and debug functions locally, with the ability to mock integrated services
- Serve functions with live-reload capabilities
- Monitor and trigger functions using the [VSCode extension]

## Integration

komore can integrate with numerous services, and can easily be extended to support additional services.

[architecture]: ./docs/architecture/README.md
[AWS Lambda]: https://aws.amazon.com/lambda/
[Azure Functions]: https://azure.microsoft.com/services/functions/
[CQRS]: ./docs/architecture/cqrs.md
[declarative]: ./docs/declarative.md
[development]: ./docs/development/README.md
[Event Sourcing]: ./docs/architecture/event-sourcing.md
[Function-as-a-Service]: ./docs/architecture/function-as-a-service.md
[functional]: ./docs/functional.md
[Google Cloud Functions]: https://cloud.google.com/functions/
[Node]: https://nodejs.org/
[reactive]: ./docs/reactive.md
[Saga]: ./docs/saga.md
[serverless]: https://en.wikipedia.org/wiki/Serverless_computing
[Terraform]: https://www.terraform.io/
[TypeScript]: https://www.typescriptlang.org/
