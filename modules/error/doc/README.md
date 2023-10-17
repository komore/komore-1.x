[//]: #title 'Error'
[//]: #description 'komore error module overview'
[//]: #keyword 'error'
[//]: #keyword 'overview'
[//]: #keyword '@komore/error'
[//]: #path-alias 'modules/error/overview'

# @komore/error

The [@komore/error] module allows defining typed errors with an attached context and localized messages.

## Key concepts

- [Error types] define specific errors
- Error types have an associated typed [error context]
- Error types can have [error message translations]
- [Error groups] encompass the error types that may occur within a [domain]
- [Errors] are instances of error types occuring at runtime

## Installation

<k-doc-module-install name="@komore/function"></k-doc-module-install>

[@komore/error]: https://npmjs.com/package/@komore/error
[domain]: ../../concepts/domain.md
[error context]: ./architecture.md#error-context
[error domains]: ./architecture.md#error-domain
[error message translations]: ./usage.md#defining-translations
[error types]: ./architecture.md#error-type
[errors]: ./usage.md#throwing-errors
