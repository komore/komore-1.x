# Design

The framework aims to ease the creation of serverless microservices written using reactive, functional constructs.

## Goals

To achieve this, the following goals are defined:

- Reactive patterns
- Development must be hassle-free and integrate with existing ecosystems:
  - Nx is used to manage projects
  - Schematics facilitate reoccuring and cumbersome tasks
  - A plugin for VSCode shows the project with a komore lens: events, command handlers, APIs, etc.
  - Development server with live-reload and emulation for running everything locally
  - Basic support for Nest, making migrating towards the model easier and hopefully improving adoption
- Deployment and provisioning must be hassle-free and integrate with existing ecosystems:
  - Terraform is used for provisioning
  - Traditional application projects are replaced with stack projects used to describe the services



```typescript
export const createFunction = createFunctionFactory({
  
});


export const todoHandler = createFunction($ => $.pipe(
  
));
```
