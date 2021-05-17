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

## Host environments

Functions can be deployed to the following host environments:

- [Amazon Alexa]
- [Apache Pulsar]
- [AWS Lambda]
- [Azure Cloud Function]
- [Cloudflare Worker]
- [Google Cloud Function]
- [OpenFaaS]

[amazon alexa]: ./function-alexa.md
[apache pulsar]: ./host-pulsar.md
[aws lambda]: ./host-lambda.md
[azure cloud function]: ./environment-azure.md
[cloudflare worker]: ./environment-cloudflare.md
[elastic]: ./architecture.md#elasticity
[google cloud function]: ./function-google.md
[functions]: ./architecture.md#functions
[function triggers]: ./architecture.md#function-triggers
[openfaas]: ./function-openfaas.md
[serverless platforms]: #target-platforms
