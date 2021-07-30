import { not } from './not';

describe('Not', () => {
  it('returns true when a function returns false', () => {
    given: 'a function that returns false';
    const f = () => false;
    when: 'wrapping the function';
    const notF = not(f);
    expect: 'calling the function to return true';
    expect(notF()).toBe(true);
  });

  it('returns false when a function returns true', () => {
    given: 'a function that returns true';
    const f = () => true;
    when: 'wrapping the function';
    const notF = not(f);
    expect: 'calling the function to return false';
    expect(notF()).toBe(false);
  });

  it('calls the wrapped function only once, forwarding all parameters', () => {
    given: 'a wrapped function';
    const f = jest.fn((_a: string, _b: number) => false);
    const notF = not(f);
    when: 'calling the function';
    notF('test', 42);
    expect: 'the wrapped function to have been called once with the parameters';
    expect(f).toHaveBeenCalledTimes(1);
    expect(f).toHaveBeenCalledWith('test', 42);
  });
});
