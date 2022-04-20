import { type SpecificationSourceProcessor } from './specification-source-processor';

/**
 * Creates a specification source processor
 *
 * @returns Specification source processor
 */
export function createSpecificationSourceProcessor(): SpecificationSourceProcessor {
  return {};
}

/*
TODO

Objective: an API similar to Spock in Groovy

- developers write specifications, as *.spec.ts files, typically one .spec.ts for each .ts
- read a *.spec.ts
- find each feature()/describe()
  - each one will be considered its own independent feature in the specification
  - there maybe be more than one per .spec.ts
- find each rule()/describe()
  - each one will be considered a sub group (or rule) of the parent specification
 */
