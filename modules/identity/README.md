# komore Identity Module

TODO: identity provider

- only Authorization Code Flow with Proof Key for Code Exchange (PKCE)
  - https://auth0.com/docs/flows/concepts/auth-code-pkce
- follows komore principles (event sourcing, domain events to other bounded context)
- REST OpenAPI
  - /authorize
  - /oauth/token
  - /userinfo
  - /mfa/associate - add 
  - GET    /mfa/authenticators - Get the list of authenticators
  - DELETE /mfa/authenticators/{id} - Remove an authenticator
- GraphQL API
  - addAuthenticator
  - listAuthenticators
  - deleteAuthenticator
- federation is out of scope for now
