# @komore/storybook

Storybook support for komore-based elements:

- Attributes auto-discovery
- Properties auto-discovery
- CSS properties auto-discovery

TODO: look at https://github.com/ljcl/storybook-addon-cssprops for displaying those attributes/properties

TODO: eventually replace storybook...

```json
{
  "storybook": {
    "executor": "@nrwl/storybook:storybook",
    "options": {
      "uiFramework": "@komore/storybook",
      "port": 4400,
      "config": {
        "configFolder": "path/to/.storybook"
      }
    }
  }
}
```
