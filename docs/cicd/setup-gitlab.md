# Setup CI/CD with Gitlab

TODO.

- .gitlab.yml generation via `k g ci gitlab`
- shallow clone set to 0
- gitlab used to store the Terraform state
- report code coverage

## Project configuration

The *Settings*, *CI/CD* page holds parameters for the CI/CD aspects of Gitlab.

### General pipelines

Some settings need to be modified for builds to work properly.

| Setting               | Value  | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| :-------------------- | :----- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Git shallow clone     | `0`    | Without setting this value to `0`, the pipeline will not have access to branches other than the current one.<br><br>The `--affected` flag needs other branches to compute changes.<br><br>The pipeline will be slightly slower when retrieving the code, but the effectiveness of the flag compensates that behavior.<br><br>An alternative is to enable shallow clones but manually retrieve the necessary branches. This is outside the scope of this documentation. |
| Test coverage parsing | `TODO` | Regular expression used to extract the coverage percentage from the pipeline logs.                                                                                                                                                                                                                                                                                                                                                                                     |

## Terraform state

Gitlab can be used as an [HTTP remote backend] for Terraform state file storage:

```ts
import { defineStack } from '@komore/state';
import { withHttpBackend } from '@komore/state/operators';

defineStack(myStack).pipe(
  withHttpBackend(/* TODO */)
);
```

## Badges

The General piplines CI/CD settings on Gitlab have a *Pipeline status* and a *Coverage report* section offering markup
that can be used to add badges to a repository's `README.md`.

[HTTP remote backend]: https://www.terraform.io/docs/language/settings/backends/http.html
