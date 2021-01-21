import { isEligibleScriptElement } from './is-script-element';

describe('Is script element', () => {
  describe('Is eligible script element', () => {
    it('accepts script elements', () => {
      given: 'a script element'
      const scriptElement = document.createElement('script');
      expect: 'the element to pass the test'
      expect(isEligibleScriptElement(scriptElement)).toBe(true);
    });

    it('rejects other elements', () => {
      given: 'a span element'
      const spanElement = document.createElement('span');
      expect: 'the element to fail the test'
      expect(isEligibleScriptElement(spanElement)).toBe(false);
    });
  });
});
