export { type ExampleFunction } from './dsl/example-function';
export { type FeatureFunction } from './dsl/feature-function';
export { type RuleFunction } from './dsl/rule-function';
export { type ScenarioFunction } from './dsl/scenario-function';

// TODO

/*
// Some documentation for the feature (can be Markdown)
feature('My feature', () => {
  setup:
  // same as beforeAll()
  cleanup:
  // same as afterAll()

  rule('Rule 1', () => {
    background:
    given: 'xx';
    and: 'yy';
    // equivalent to beforeEach()

    after:
    // equivalent to afterEach()

    scenario('Some use case', () => {
      given: 'the initial condition';
      when: 'doing something';
      then: 'this is what happens';
    });

    example('Example 1', () => {
      given: 'a specific case';
      when: 'doing something';
      then: 'this is what would happen';
      and: ...;
      but: ...;
    })
  });

  rule('Rule 2', () => {

    scenario('Some other use case', ({ name, email, twitter, result }) => {
      given: `someone named ${name}`;

      examples:
      name     || email                || twitter           || result
      'Aslak'  || 'aslak@cucumber.io'  || '@aslak_hellesoy' || 42
      'Julien' || 'julien@cucumber.io' || '@jbpros'         || 420
      'Matt'   || 'matt@cucumber.io'   || '@mattwynne'      || 4200
    });
  });
});

=>

Feature: My specification
  Some documentation for the specification (can be Markdown)

  Rule: Rule 1

    Background:

    Scenario: Some use case
      Given the initial condition
      When doing something
      Then this is what happens

    Example: Example 1
      Given a specific case
      When doing something
      Then this is what would happen

  Rule: Rule 2

    Scenario Outline: Some other use case
      Given someone named <name>
      Examples: (or Scenarios:)
        | name   | email              | twitter         | result |
        | Aslak  | aslak@cucumber.io  | @aslak_hellesoy | 42     |
        | Julien | julien@cucumber.io | @jbpros         | 420    |
        | Matt   | matt@cucumber.io   | @mattwynne      | 4200   |
*/
// TODO: generate .spec.ts skeleton from Gherkin specification
