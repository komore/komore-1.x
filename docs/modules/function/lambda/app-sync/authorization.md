# AppSync Events Authorization

AppSync requests need to be authorized.

There are 5 available authorization mechanisms:

- [API key]
- [Cognito user pools]
- [IAM]
- [Lambda]
- [OpenID Connect]

Public APIs that expect unauthenticated requests will still require a valid API key.

## Configuring the API

The GraphQL API resource needs at least one authorization model: the `authentication_type` argument.

```hcl
resource "aws_appsync_graphql_api" "example" {
  authentication_type = "<type>"
}
```

```ts
// TODO
```

Additional authorization mechanisms may be added using the `additional_authentication_provider` block.

```hcl
resource "aws_appsync_graphql_api" "example_with_additional_mechanism" {
  authentication_type = "<type1>"

  additional_authentication_provider {
    authentication_type = "<type2>"
  }
}
```

```ts
// TODO
```

More details are available within the [`aws_appsync_graphql_api` resource documentation].

## Authorization models

TODO:

- `API_KEY`
- `AMAZON_COGNITO_USER_POOLS`
- `AWS_IAM`
- `OPENID_CONNECT`

### API key

Using an API key is the simplest authorization model:

```hcl
resource "aws_appsync_graphql_api" "example_with_api_key" {
  authorization_type = "API_KEY"
  name               = "example"
}
```

```ts
// TODO
```

To ensure the function is being executed using an API key authorization, [`hasApiKeyAuthorization()`] can be used:

```ts
import { type AppSyncEvent } from '@komore/function-lambda/app-sync';
import { hasApiKeyAuthorization } from '@komore/function-lambda/app-sync';

function example(event: Observable<AppSyncEvent<unknown>>) {
  return event.pipe(
    throwUnless(hasApiKeyAuthorization, () => new Error('may only be called with an API key authorization'))
  );
}
```

### Cognito user pools

```hcl
resource "aws_appsync_graphql_api" "example_with_cognito" {
  authentication_type = "AMAZON_COGNITO_USER_POOLS"
  name                = "example"

  user_pool_config {
    aws_region     = "<aws-region>"
    default_action = "DENY"
    user_pool_id   = "<user-pool-id>"
  }
}
```

```ts
// TODO
```

To ensure the function is being executed using a Cognito user pool authorization, [`hasCognitoAuthorization()`] can be
used:

```ts
import { type AppSyncEvent } from '@komore/function-lambda/app-sync';
import { hasCognitoAuthorization } from '@komore/function-lambda/app-sync';

function example(event: Observable<AppSyncEvent<unknown>>) {
  return event.pipe(
    throwUnless(hasCognitoAuthorization, () => new Error('may only be called with a Cognito user pool authorization'))
  );
}
```

### IAM

TODO: configuration, [`hasIAMAuthorization()`]

### Lambda

TODO: configuration, [`hasLambdaAuthorization()`]

### OpenID Connect

TODO: configuration, [`hasOpenIDConnectAuthorization()`]

[`aws_appsync_graphql_api` resource documentation]: https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/appsync_graphql_api
[api key]: #api-key
[cognito user pools]: #cognito-user-pools
[iam]: #iam
[lambda]: #lambda
[openid connect]: #openid-connect
[`hasapikeyauthorization()`]: ../../../../../modules/function/lambda/app-sync/src/has-api-key-authorization.ts
[`hascognitoauthorization()`]: ../../../../../modules/function/lambda/app-sync/src/has-cognito-authorization.ts
[`hasiamauthorization()`]: ../../../../../modules/function/lambda/app-sync/src/has-iam-authorization.ts
[`haslambdaauthorization()`]: ../../../../../modules/function/lambda/app-sync/src/has-lambda-authorization.ts
[`hasopenidconnectauthorization()`]: ../../../../../modules/function/lambda/app-sync/src/has-openid-connect-authorization.ts
