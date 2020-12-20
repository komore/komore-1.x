# komore Local Development Server

> :warning: This server is meant for development only and should never be used in production

Local development server meant to implement cloud services via extensions:

- [`@komore/dev-server-local-amazon`] for [Amazon Web Services]
- [`@komore/dev-server-local-azure`] for [Azure]
- [`@komore/dev-server-local-google`] for [Google Cloud]

## Install

The module can be installed via Npm or Yarn:

```shell
npm install @komore/dev-server-local --save-dev
```

```shell
yarn add @komore/dev-server-local --dev
```

## Usage

Once installed, the `klds` command is available to control the server:

```sh
klds --help

TODO: add output
```

The full list of available options is available in the [CLI reference].


[`@komore/dev-server-local-amazon`]: https://npmjs.com/package/@komore/dev-server-local-amazon
[`@komore/dev-server-local-azure`]: https://npmjs.com/package/@komore/dev-server-local-azure
[`@komore/dev-server-local-google`]: https://npmjs.com/package/@komore/dev-server-local-google
[amazon web services]: https://aws.amazon.com/
[azure]: https://azure.microsoft.com/
[google cloud]: https://cloud.google.com/
[cli reference]: https://komore.dev/modules/dev-server/local
