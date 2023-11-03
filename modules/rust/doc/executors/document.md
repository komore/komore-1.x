# Executor - @pcxone/nx-rust:document

Documents Rust code using [rustdoc].

## Schema

```json
{
  "targets": {
    "build": {
      "executor": "@pcxone/nx-rust:document",
      "options": {
        "crate": {
          "name": "custom-crate-name",
          "version": true
        },
        "documentPrivateItems": false,
        "extendCss": "path/to/custom.css",
        "extern": {
          "dependency-name": "path/to/dependency"
        },
        "html": {
          "after": ["path/to/extra-after.html"],
          "before": ["path/to/extra-before.html"],
          "header": ["path/to/extra-header.html"]
        },
        "libraryPath": ["path/to/dependencies"],
        "markdown": {
          "css": "path/to/markdown.css",
          "noToc": false,
          "playgroundUrl": "https://play.rust-lang.org/"
        },
        "outputPath": "target/project-name/doc",
        "sysroot": "path/to/sysroot",
        "test": {
          "args": "",
          "enabled": false
        },
        "theme": {
          "additionalThemes": ["path-to-theme.css"],
          "default": "light"
        }
      }
    }
  }
}
```

## Options

| Option                   | Default             | Description                                                                  |
| :----------------------- | :------------------ | :--------------------------------------------------------------------------- |
| `crate.name`             | `undefined`         | `--crate-name`: overrides the crate name (defaults to the Cargo crate name)  |
| `crate.version`          | `true`              | `--crate-version`: adds the crate or a hard-coded version string             |
| `documentPrivateItems`   | `false`             | `--document-private-items`: documents all items, even if they are not public |
| `extendCss`              | `undefined`         | `--extend-css`: adds custom CSS at the bottom of the theme style sheet       |
| `extern`                 | `{}`                | `--extern`: paths to specific dependencies                                   |
| `html.after`             | `[]`                | `--html-after-content`: appends content from HTML files to the &lt;body>     |
| `html.before`            | `[]`                | `--html-before-content`: prepends content from HTML files to the &lt;body>   |
| `html.header`            | `[]`                | `--html-in-header`: appends content from HTML files to the &lt;head>         |
| `libraryPath`            | `[]`                | `--library-path`: paths to dependencies                                      |
| `markdown.css`           | `undefined`         | `--markdown-css`: adds a &lt;link> style sheet when rendering Markdown files |
| `markdown.noToc`         | `false`             | `--markdown-no-toc`: prevents the generation of a table of contents          |
| `markdown.playgroundUrl` | `undefined`         | `--markdown-playground-url`: base URL for the Run buttons                    |
| `outputPath`             | `"target/proj/doc"` | Path where the documentation files are generated                             |
| `sysroot`                | `undefined`         | `--sysroot`: overrides the system root                                       |
| `target`                 | `undefined`         | `--target`: generates documentation for a different target triple            |
| `test`                   | `false`             | `--test`: runs code examples as tests                                        |
| `testArgs`               | `""`                | `--test-args`: passes options to the test running with `test` is `true`      |
| `theme.additionalThemes` | `undefined`         | `--theme`: adds a theme to the documentation output                          |
| `theme.default`          | `"light"`           | `--default-theme`: sets the default theme                                    |
| `verbose`                | `false`             | `--verbose`: enables verbose log output                                      |

Most options map to [rustdoc command-line arguments].

[rustdoc]: https://doc.rust-lang.org/rustdoc/what-is-rustdoc.html
[rustdoc command-line arguments]: https://doc.rust-lang.org/rustdoc/command-line-arguments.html
