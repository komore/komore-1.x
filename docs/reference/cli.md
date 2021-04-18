# CLI Reference

## Syntax

The komore command-line interface requires a `command` followed by a list of `arguments` and optional `flags`:

```sh
komore <command> <arguments...> <--flags...>
```

It is also available under a shorter alias, `k`:

```sh
k <command> <arguments...> <--flags...>
```

## Commands

### Build

The `build` command executes the `build` target for the specified module.

By default, the target is the `@komore/nx:build` schematic that builds and packages the code.

| Flag         | Description                 |
| :----------- | :-------------------------- |
| `--affected` | [tsdoc:BuildFlags.affected] |
| `--verbose`  | [tsdoc:BuildFlags.verbose]  |
| `--watch`    | [tsdoc:BuildFlags.watch]    |
| `--watchAll` | [tsdoc:BuildFlags.watchAll] |

### Deploy

The `deploy` command executes the `deploy` target for the specified stack.

By default, the target is the `@komore/nx:deploy` schematic that deploys a stack.

| Flag         | Description                  |
| :----------- | :--------------------------- |
| `--verbose`  | [tsdoc:DeployFlags.verbose]  |
| `--watch`    | [tsdoc:DeployFlags.watch]    |
| `--watchAll` | [tsdoc:DeployFlags.watchAll] |

### Generate

The `generate` command runs a generator. Generators are used to create new resources.

Creating a new resource requires a `resourceType` and a `resourceName`.

```sh
komore generate <resourceType> @my-org/my-module/<resourceName> <--flags>
```

| Resource type | Resource name       | Description                 |
| :------------ | :------------------ | :-------------------------- |
| `command`     | `commandName`       | Generates a new [command]   |
| `event`       | `eventName`         | Generates a new [event]     |
| `log-event`   | `logGroup/logEvent` | Generates a new [log event] |
| `log-group`   | `logGroup`          | Generates a new [log group] |

### Lint

The `lint` command executes the `lint` target for the specified module.

By default, the target uses the `@komore/nx:lint` executor that validates code with [ESLint] and [Prettier].

```sh
komore lint @my-org/my-module
  --affected
  --watch
```

### Publish

The `publish` command executes the `publish` target for the specified module.

By default, the target uses the `@komore/nx:publish` executor that builds the module alongside its secondary entry
points, then publishes the module to the NPM registry.

```sh
komore publish @my-org/my-module
  --dryRun
```

| Flag            | Description                      |
| :-------------- | :------------------------------- |
| `--buildTarget` | [tsdoc:PublishFlags.buildTarget] |
| `--dryRun`      | [tsdoc:PublishFlags.dryRun]      |
| `--verbose`     | [tsdoc:PublishFlags.verbose]     |

### Run

The `run` command executes a specific target for the specified module.

```sh
komore run <target-name> @<module-name>
```

| Flag | Description |
| :--- | :---------- |
|      |             |

### Serve

The `serve` command executes the `serve` target for the specified module or stack.

By default, the target uses the `@komore/nx:serve` executor that runs a development server.

```sh
komore serve @my-org/my-module
  --todo
```

| Flag            | Description                    |
| :-------------- | :----------------------------- |
| `--buildTarget` | [tsdoc:ServeFlags.buildTarget] |
| `--host`        | [tsdoc:ServeFlags.host]        |
| `--port`        | [tsdoc:ServeFlags.port]        |
| `--sslCert`     | [tsdoc:ServeFlags.sslCert]     |
| `--sslKey`      | [tsdoc:ServeFlags.sslKey]      |
| `--watch`       | [tsdoc:ServeFlags.watch]       |
| `--liveReload`  | [tsdoc:ServeFlags.liveReload]  |
| `--`            |                                |

### Test

The `test` command executes the `test` target for the specified module and its secondary entry points.

By default, the target uses the `@komore/nx:test` executor that runs tests with [Jest].

```sh
komore test @my-org/my-module
```

| Flag         | Description                |
| :----------- | :------------------------- |
| `--affected` | [tsdoc:TestFlags.affected] |
| `--name`     | [tsdoc:TestFlags.name]     |
| `--verbose`  | [tsdoc:TestFlags.verbose]  |
| `--watch`    | [tsdoc:TestFlags.watch]    |
| `--watchAll` | [tsdoc:TestFlags.watchAll] |

[command]: ../modules/command.md
[eslint]: https://eslint.org/
[event]: ../modules/event.md
[log event]: ../modules/observability-logging.md#create-a-log-event
[log group]: ../modules/observability-logging.md#create-a-log-group
[jest]: https://jestjs.io/
[prettier]: https://prettier.io/
[tsdoc:buildflags.affected]: ../../modules/cli/build/src/build-flags.ts
[tsdoc:buildflags.verbose]: ../../modules/cli/build/src/build-flags.ts
[tsdoc:buildflags.watch]: ../../modules/cli/build/src/build-flags.ts
[tsdoc:buildflags.watchall]: ../../modules/cli/build/src/build-flags.ts
[tsdoc:publishflags.dryrun]: ../../modules/cli/publish/src/publish-flags.ts
[tsdoc:publishflags.verbose]: ../../modules/cli/publish/src/publish-flags.ts
[tsdoc:testflags.affected]: ../../modules/ci/test/src/test-flags.ts
[tsdoc:testflags.name]: ../../modules/ci/test/src/test-flags.ts
[tsdoc:testflags.verbose]: ../../modules/ci/test/src/test-flags.ts
[tsdoc:testflags.watch]: ../../modules/ci/test/src/test-flags.ts
[tsdoc:testflags.watchall]: ../../modules/ci/test/src/test-flags.ts
