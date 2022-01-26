import { createCssProcessorFactory } from './create-css-processor-factory';

describe('Create CSS processor factory', () => {
  it('returns a media type regular expression that matches text/css', () => {
    given: 'the text/css media type';
    const mediaType = 'text/css';
    when: 'creating a CSS processor factory';
    const cssProcessorFactory = createCssProcessorFactory({});
    expect: 'the text/css media type to be matched';
    const { mediaTypeRegExp } = cssProcessorFactory;
    expect(mediaTypeRegExp).toBeDefined();
    expect(mediaTypeRegExp?.test(mediaType)).toBe(true);
  });

  it.each(['test.css', '/x/y/test.css'])('returns a path regular expression that matches *.css', path => {
    given: 'a path ending in .css';
    when: 'creating a CSS processor factory';
    const cssProcessorFactory = createCssProcessorFactory({});
    expect: 'the text/css media type to be matched';
    const { pathRegExp } = cssProcessorFactory;
    expect(pathRegExp).toBeDefined();
    expect(pathRegExp?.test(path)).toBe(true);
  });
});
