[//]: #title 'Lambda Function'
[//]: #description 'komore Lambda function module overview'
[//]: #keyword 'function'
[//]: #keyword 'lambda'
[//]: #keyword '@komore/function'
[//]: #keyword '@komore/function-lambda'
[//]: #keyword 'appsync'
[//]: #keyword 'graphql'
[//]: #path 'modules/function/lambda/app-sync'
[//]: #path-alias 'modules/function/lambda/app-sync/overview'
[//]: #see-also './install.md'
[//]: #see-also './usage.md'
[//]: #see-also '../README.md'
[//]: #see-also '../../README.md'
[//]: #see-also '../../../../concepts/function-as-a-service.md'

# AppSync Events

[AppSync] is a managed GraphQL API service.

A [Lambda function] may be used as a GraphQL resolver for a mutation or a query.

## Function definition

The [`appSyncEventTrigger()`] function is used to define a function that expects to receive AppSync events.

The function takes 2 generic parameters: the arguments type and the return type.

```ts
import { appSyncEventTrigger } from '@komore/function-lambda';

export const processQueue = createFunction('processQueue', appSyncTrigger(), $ =>
  $.pipe(
    tapValue(event => console.log('SQS event', event)),
    dropValue()
  )
);

```

## Function binding

AppSync needs to know that the Lambda function will be used as a resolver.

The following steps assume these variables are available when provisioning:

| Variable         | Description                                                              |
| :--------------- | :----------------------------------------------------------------------- |
| `function_name`  | Lambda function name, e.g. from an `aws_lambda_function` resource.       |
| `graphql_api_id` | GraphQL API identifier, e.g. from an `aws_appsync_graphql_api` resource. |

### Defining the

First, the Lambda function needs to be declared as a data source:

````hcl
resource "aws_appsync_datasource" "datasource" {
  api_id           = var.appsync_graphql_api_id
  name             = "example_datasource"
  service_role_arn = var.service_role_arn
}

```hcl
resource "aws_appsync_resolver" "resolver" {

}
````

The Lambda function needs to be declared as a data source
The function needs to be defined as a dataso

## Event event

An [`AppSyncEvent`] is sent to the function when a GraphQL query makes use of the resolver that has the fu

[appsync]: https://aws.amazon.com/appsync/
[`appsyncevent`]: ../../../../../modules/function/lambda/src/app-sync/app-sync-event.ts
[`appsynceventtrigger()`]: ../../../../../modules/function/lambda/src/app-sync/app-sync-event-trigger.ts
[lambda function]: ../README.md
