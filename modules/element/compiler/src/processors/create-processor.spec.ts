import { createProcessor } from './create-processor';
import { ProcessorFactory } from './processor-factory';

describe('Create processor', () => {
  it('throws an error when no matching factory is found', () => {
    // given: a processor factory
    const processorFactory: ProcessorFactory<undefined, void> = {
      regExp: /abcd/,
      createProcessor() {}
    };
    // and: a type not supported by the processor factory
    const type = 'test';
    // expect: creating a processor with no factory matching the type to throw an error
    expect(() => createProcessor([processorFactory], type, undefined)).toThrowError(
      `no processor found for type "${type}" (available: /abcd/)`
    );
  });
});
