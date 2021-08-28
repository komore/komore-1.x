[//]: #title (Function)
[//]: #description (komore function module overview)
[//]: #keyword (function)
[//]: #keyword (overview)
[//]: #keyword (@komore/function)
[//]: #path (modules/function/overview)
[//]: #path-alias (modules/function)
[//]: #see-also (./architecture.md)
[//]: #see-also (./install.md)
[//]: #see-also (./usage.md)
[//]: #see-also (../../concepts/function-as-a-service.md)

# @komore/function

The `@komore/function` module allows the execution of pipelines within serverless function environments.

## Key concepts

- [Functions] are event-driven units of code that implement services
- [Function triggers] are event-emitting sources that cause a function to run
- Functions get deployed to [serverless platforms] and are only active when triggered
- Functions are [elastic]: they automatically scale up or down

## Installation

The [@komore/function] module can be installed via Npm, pnpm, or Yarn:

```sh
npm install @komore/function --save
```

```sh
pnpm add @komore/function
```

```sh
yarn add @komore/function
```

## Environments

Functions can be deployed to the following environments:

- [AWS Lambda]
- [Azure Cloud Function]
- [Google Cloud Function]
- [OpenFaaS]

[@komore/function]: https://npmjs.com/package/@komore/function
[aws lambda]: ./lambda/README.md
[azure cloud function]: ./azure/README.md
[elastic]: ./architecture.md#elasticity
[google cloud function]: ./google/README.md
[functions]: ./architecture.md#functions
[function triggers]: ./architecture.md#function-triggers
[openfaas]: ./openfaas/README.md
[serverless platforms]: #environments
