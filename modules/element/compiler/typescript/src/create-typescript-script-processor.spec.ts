import { lastValueFrom, of } from '@komore/reactive';
import { type ScriptProcessorInput } from '../script-processor-input';
import { createTypeScriptProcessor } from './create-typescript-processor';

describe('Create a TypeScript processor', () => {
  it.skip('todo', async () => {
    given: 'a TypeScript processor input';
    const scriptProcessorInput: ScriptProcessorInput = {
      sourceFileName: 'test.ts',
      sourceContent: `
        import { combineLatest } from '@komore/reactive';

        export const testProperty = new BehaviorSubject<string>('test');
        export const testReadonlyProperty = testProperty.asObservable();

        const testEvent = createEvent('test-event', props<boolean>());

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
    and: 'a TypeScript processor';
    const typeScriptProcessor = createTypeScriptProcessor({
      processEvents: true,
      processMethods: true,
      processProperties: true
    });
    when: 'processing the source';
    const processedSource$ = typeScriptProcessor(scriptProcessorInput$);
    const processedSource = await lastValueFrom(processedSource$);
    expect: 'the source to be correctly generated';
    const { methodDefinitions, propertyDefinitions, sourceFile } = processedSource;
    expect(sourceFile).toBeSource(`
      wee
    `);
    and: 'element properties to have been detected';
    expect(propertyDefinitions.length).toBe(2);
    and: 'element methods to have been detected';
    expect(methodDefinitions.length).toBe(1);
  });
});
