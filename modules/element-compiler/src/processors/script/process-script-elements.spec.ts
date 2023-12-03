import { lastValueFrom } from '@komore/reactive';
import { processScriptElements } from './process-script-elements';

describe('Process script elements', () => {
  it('returns an empty list of processed script elements when there are no script elements to process', async () => {
    given: 'an empty list of script elements';
    const scriptElements: ReadonlyArray<HTMLScriptElement> = [];
    when: 'processing the script elements';
    const processedScriptElements$ = processScriptElements(scriptElements);
    expect: 'an empty list to be returned';
    const processedScriptElements = await lastValueFrom(processedScriptElements$);
    expect(processedScriptElements.length).toBe(0);
  });
});
