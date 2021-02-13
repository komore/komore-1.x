import { lastValueFrom } from 'rxjs';
import { processScriptElement } from './process-script-element';

describe('Process script element', () => {
  it.skip('todo', async () => {
    given: 'a script source'
    const source = `
    `;
    and: 'an HTML script element'
    const scriptElement = document.createElement('script');
    scriptElement.textContent = source;
    when: 'processing the script element'
    const scriptProcessorOutput$ = processScriptElement(scriptElement);
    expect: 'TODO'
    const scriptProcessorOutput = await lastValueFrom(scriptProcessorOutput$);
    expect(scriptProcessorOutput.sourceContent).toBe(`
      xyz
    `);
  });
});
