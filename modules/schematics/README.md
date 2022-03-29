# @komore/schematics

TODO: move all schematics to their own module, this one should be helper functions only

## Executors

- `@komore/nx:build-function`: Build the function
- `@komore/nx:deploy-function`: Deploy the function via a stack
- `@komore/nx:serve-function`: Serve the function via the local dev server
- `@komore/nx:publish`: Publish an npm package - build, update package.json, npm publish

## Generators

- `nx generate @komore/nx:api`
- `nx generate @komore/nx:application`
- `nx generate @komore/nx:ci`
- `nx generate @komore/nx:command`
- `nx generate @komore/nx:domain`
- `nx generate @komore/nx:element`
- `nx generate @komore/nx:event`
- `nx generate @komore/nx:function`
- `nx generate @komore/nx:log-group`
- `nx generate @komore/nx:process`
- `nx generate @komore/nx:stack`

## Usage with the CLI

- init workspace: set rules for tags/dependencies
- create application (@komore/application): PWA, optionally packaged as a TWA or via Electron
- create domain: directory structure and stack module
- create stack (@komore/stack): deployment scripts
- generate api
- generate log (@komore/observability/logging)
- generate metric (@komore/observability/metrics)
- generate element (@komore/element): custom element, css variables/parts, all observable

Common flags:

--domain=target directory

```sh
# creates modules/my-domain:
# /elements
# /functions
# /komore.json
 (with later domain metadata in json, from ddd?)
# todo: default domain
nx g @komore/nx:domain my-domain
# creates a function
nx g @komore/nx:function my-function --domain

# creates stacks/my-stack
nx g @komore/nx:stack my-stack

# creates shells/my-shell
# base shell front-end application
nx g @komore/nx:shell my-shell
```

## komore.json

```json
{
  "version": "1",
  "domains": {
    "domain1": {
      
    }
  },
  "stacks": {
    
  }
}
```
