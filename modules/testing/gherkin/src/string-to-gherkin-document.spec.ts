import { type Feature } from '@cucumber/messages';
import { stringToGherkinDocument } from './string-to-gherkin-document';

describe('String to Gherkin document', () => {
  it('works', () => {
    given: 'a string with Gherkin syntax';
    const data = `
Feature: My feature
  Some documentation

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
      Given some key <key>
      Examples:
        | key   | value |
        | a     | 42    |
        | b     | 123   |
    `;
    and: 'a URI';
    const uri = 'test.feature';

    when: 'creating a function that turns a string into a Gherkin document';
    const func = stringToGherkinDocument(uri);
    and: 'calling it with the string';
    const gherkinDocument = func(data);

    expect: 'the Gherkin document to properly represent the source feature';
    expect(gherkinDocument).toBeDefined();
    expect(gherkinDocument.uri).toBe(uri);
    expect(gherkinDocument.feature).toBeDefined();
    const feature = gherkinDocument.feature as Feature;
    expect(feature.name).toBe('My feature')
    expect(feature.description.trim()).toBe('Some documentation')
    console.log(JSON.stringify(feature, undefined, 2));
  });
});
