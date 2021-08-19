# AppSync Events Authorization

[AppSync requests need to be authorized.

There are 4 built-in authorization mechanisms:

- [API key]
- [Cognito user pools]
- [IAM]
- [OpenID Connect]

Public APIs that expect unauthenticated requests still require to be authorized via an API key.

## Configuring the API

The GraphQL API resource needs at least one authorization model, via the `authentication_type` argument.

```hcl
resource "aws_appsync_graphql_api" "example" {
  authentication_type = "<type>"
}
```
```ts
// TODO
```

Additional authorization mechanisms may be added via the `additional_authentication_provider` block.

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

// # API_KEY | AMAZON_COGNITO_USER_POOLS | AWS_IAM | OPENID_CONNECT

More details are available within the [`aws_appsync_graphql_api` resource documentation].

## API key

## Cognito user pools

## IAM

## OpenID Connect

[`aws_appsync_graphql_api` resource documentation]: https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/appsync_graphql_api
[api key]: #api-key
[cognito user pools]: #cognito-user-pools
[iam]: #iam
[openid connect]: #openid-connect
