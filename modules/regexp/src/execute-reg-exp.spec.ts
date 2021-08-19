import { executeRegExp } from './execute-reg-exp';

describe('Execute regular expression', () => {
  it('returns an empty list when there are no matches', () => {
    given: 'a regular expression and a string that would not match';
    const regExp = /test/g;
    const string = 'no-match';
    when: 'executing the regular expression';
    const results = Array.from(executeRegExp(regExp, string));
    expect: 'an empty list to be returned';
    expect(results.length).toBe(0);
  });

  it('returns a single match when there is only one', () => {
    given: 'a regular expression and a string that would match once';
    const regExp = /gle-(test)/g;
    const string = 'single-test';
    when: 'executing the regular expression';
    const results = Array.from(executeRegExp(regExp, string));
    expect: 'the match to be returned';
    expect(results.length).toBe(1);
    expect(results[0][1]).toBe('test');
  });

  it('returns multiple matches when there is more than one match', () => {
    given: 'a regular expression and a string that would match multiple times';
    const regExp = /a(\d+)b/g;
    const string = 'longer a123btest witha42b multiple matches';
    when: 'executing the regular expression';
    const results = Array.from(executeRegExp(regExp, string));
    expect: 'each match to be returned';
    expect(results.length).toBe(2);
    expect(results[0][1]).toBe('123');
    expect(results[1][1]).toBe('42');
  });
});
