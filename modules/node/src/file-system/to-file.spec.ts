import { type FileHandle } from 'fs/promises';
import { toFile } from './to-file';

describe('To file operator', () => {
  it.skip('todo', () => {
    given: 'todo';
    toFile((undefined as unknown) as FileHandle);
  });
});

describe('lala', () => {
  it.each([
    [false, false],
    [false, true],
    [true, false],
    [true, true]
  ])('lets see then', (sidebar, widerContainer) => {
    const cond1 = !sidebar && widerContainer;
    const cond2 = sidebar || widerContainer;
    expect(cond1).toBe(cond2);
  });
});
