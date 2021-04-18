[metadata:title]: @komore/function
[metadata:description]: "TODO"
[metadata:tag]: function
[metadata:path]: modules/function/overview
[metadata:path-alias]: modules/function
[metadata:see-also]: ./function-as-a-service.md
[metadata:see-also]: ./graph.md

# @komore/function

The `@komore/function` module allows the execution of pipelines within serverless function environments.

## Key concepts

- [Functions] are event-driven units of code that implement services
- [Function triggers] are event-emitting sources that cause a function to run
- Functions get deployed to [serverless platforms] and only run when triggered
- Functions are [elastic]: they automatically scale up or down

## Target platforms

Functions can be deployed to the following platforms:

- [Amazon Alexa]
- [Apache Pulsar]
- [AWS Lambda]
- [Azure Cloud Function]
- [Cloudflare Worker]
- [Google Cloud Function]
- [OpenFaaS]

[amazon alexa]: ./function-alexa.md
[apache pulsar]: ./function-pulsar.md
[aws lambda]: ./function-lambda.md
[azure cloud function]: ./function-azure.md
[cloudflare worker]: ./function-cloudflare.md
[elastic]: ./function-architecture.md#elasticity
[google cloud function]: ./function-google.md
[functions]: ./function-architecture.md#functions
[function triggers]: ./function-architecture.md#function-triggers
[openfaas]: ./function-openfaas.md
[serverless platforms]: #target-platforms
