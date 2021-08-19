[//]: #title (Reactive)
[//]: #description (komore reactive module overview)
[//]: #keyword (reactive)
[//]: #keyword (overview)
[//]: #keyword (@komore/reactive)
[//]: #path (modules/reactive/overview)
[//]: #path-alias (modules/reactive)
[//]: #see-also (./architecture.md)
[//]: #see-also (./usage.md)

# @komore/reactive

The `@komore/reactive` module helps build reactive and observable flows.

## Key concepts

- [Observables] can notify observers
- [Observers] consume notifications from observables
- [Notifications] may be a stream of values, an error, or a completion
- [Operators] are used to build a flow for notifications

# Installation

The `@komore/reactive` module can be installed via pnpm, Npm or Yarn:

```sh
npm install @komore/reactive --save
```

```sh
pnpm add @komore/reactive
```

```sh
yarn add @komore/reactive
```

[observables]: ./architecture.md#Observables
[observers]: ./architecture.md#Observers
[operators]: ./architecture.md#Operators
[notifications]: ./architecture.md#Notifications
