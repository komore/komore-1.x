import { lastValueFrom, of } from 'rxjs';
import type { ScriptProcessorInput } from '../script-processor-input';
import { createTypeScriptProcessor } from './create-typescript-processor';

describe('Create a TypeScript processor', () => {
  it('works', async () => {
    given: 'a TypeScript processor input'
    const scriptProcessorInput: ScriptProcessorInput = {
      sourceContent: `
        import { combineLatest } from 'rxjs';

        export const testProperty = new BehaviorSubject<string>('test');
        export const testReadonlyProperty = testProperty.asObservable();

        const testEvent = createEvent<boolean>('test-event');

        export function testMethod(param: string): boolean {
          return param.length > 0;
        }

        $: combineLatest({
          testProperty,
          testAttribute: attribute<string>('test-attribute')
        }).pipe(
          map(({ testProperty, testAttribute }) => {
          })
        $: of(42).subscribe();
      `
    };
    const scriptProcessorInput$ = of(scriptProcessorInput);
    and: 'a TypeScript processor'
    const typeScriptProcessor = createTypeScriptProcessor(undefined);
    when: 'processing the source'
    const processedSource$ = typeScriptProcessor(scriptProcessorInput$);
    const processedSource = await lastValueFrom(processedSource$);
    expect: 'the source to be correctly generated'
    const { methodDefinitions, propertyDefinitions, sourceFile } = processedSource;
    expect(x).toHaveBeenCalledWith
    expect(sourceFile).toBeSource(`
      wee
    `);
    and: 'element properties to have been detected'

    expect(propertyDefinitions.length).toBe(2);
    and: 'element methods to have been detected'
    expect(methodDefinitions.length).toBe(1);
  });
});
