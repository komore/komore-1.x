# Operators

## Map a response

- mapPreSignUpResponse
- mapTokenGenerationResponse

## Add claims

Events triggered by a token generation trigger source allow adding claims to the token.

The [`addClaims()`] function can create an operator that adds such claims:

```ts
import { createFunction } from '@komore/function';
import { cognitoEventTrigger } from '@komore/function-lambda';
import { addClaims } from '@komore/function-lambda/operators';

createFunction('f', cognitoEventTrigger({ triggerSources: 'TokenGeneration_Authentication' }), $ =>
  $.pipe(
    addClaims({
      'claim-name': 'claim-value'
    })
  )
);
```

## Remove claims

## Automatically confirm

## Automatically verify

[`addclaims()`]: https://TODO
