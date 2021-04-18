# @komore/message

Adds support for message flows and graphs to [komore].

## Install

The `@komore/message` module can be installed via Npm or Yarn:

```shell
npm install @komore/message --save
```

```shell
yarn add @komore/message
```

## Graphs

The following graph constructs are exported by the module:

| Construct | Description |

- `Flow`
- `Sink`
- `Source`

The following operators are exported by the module:

| Operator        | Description                                     |
| :-------------- | :---------------------------------------------- |
| `mapType`       | Map the type of a message via a projection.     |
| `mapTypeTo`     | Map the type of a message.                      |
| `mapMetadata`   | Map the metadata of a message via a projection. |
| `mapMetadataTo` | Map the metadata of a message.                  |
| `mapInput`      | Map the input of a message via a projection.    |
| `mapInputTo`    | Map the input of a message.                     |
| `mapOutput`     | Map the output of a message via a projection.   |
| `mapOutputTo`   | Map the output of a message.                    |

## Testing

The `@komore/message/testing` module is installed automatically with `@komore/message`.

TODO: main example

TODO: link to more info on the documentation site

[komore]: https://komore.dev
