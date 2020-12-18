# What is komore?

komore is a framework for building [functional], [serverless] applications in [TypeScript], using [Node] and  [RxJS].
komore provides modules for:

- Writing applications that follow [domain-driven design] principles.
- Architectures based on the [CQRS] and [event sourcing] patterns.
- Integrating with numerous providers and services.
- Tooling that enhance the developer experience when building applications.

## Modules

komore modules are divided into a small number of categories.

### Application

- [Event] - Event sourcing model for application development.
- [Command] - Command processing and handling.
- [Query] - TODO.
- [Function] - Reactive serverless function development for common cloud providers.
- [API] - Support for exposing komore services via GraphQL and REST endpoints.
- [Telemetry] - Support for telemetry, i.e. capturing traces and metrics from applications.

### Workflow

- [Process] - Support for common stateless and stateful process management patterns.
- [Integration] - Bindings for numerous providers and services using integration patterns.

### IAM

- [Authorization] - Role-based and attribute-based authorization models.
- [Identity] - Services that ease the creation of identity providers.

### Developer Tooling

- [Schematics] - Scaffolding module for komore applications.
- [Stacks] - A declarative intrastructure as code interface that integrates with [Terraform].
- [Development Server] - A local development server with live-reload support and cloud services emulation.
- [VS Code Extension] - A [Visual Studio Code] extension that facilitates developing with komore.



[API]: /documentation/application/api
[Authorization]: /documentation/iam/authorization
[Command]: /documentation/application/command
[CQRS]: /documentation/intro/cqrs
[Development Server]: /documentation/tooling/devserver
[domain-driven design]: /documentation/intro/ddd
[Event]: /documentation/eventsourcing/event
[event sourcing]: /documentation/intro/eventsourcing
[Function]: /documentation/serverless/function
[functional]: /documentation/intro/functional
[Identity]: /documentation/iam/identity
[Integration]: /documentation/workflow/integration
[serverless]: /documentation/intro/serverless
[Node]: https://nodejs.org/
[Process]: /documentation/workflow/process
[Query]: /documentation/application/query
[RxJS]: https://rxjs.dev/
[Schematics]: /documentation/tooling/schematics
[Stacks]: /documentation/tooling/stack
[Telemetry]: /documentation/serveless/telemetry
[Terraform]: https://www.terraform.io/
[TypeScript]: https://www.typescriptlang.org/
[Visual Studio Code]: https://code.visualstudio.com/
[VS Code Extension]: /documentation/tooling/vscode
