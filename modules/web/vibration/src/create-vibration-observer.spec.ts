import type { Observer } from '@komore/reactive';
import { expectTypeOf } from 'expect-type';
import { createVibrationObserver } from './create-vibration-observer';
import { VibrationObserver } from './vibration-observer';
import type { VibrationObserverOptions } from './vibration-observer-options';

describe('Create vibration observer', () => {
  // TODO: avoid accessing private properties and simply verify the behavior matches the passed options

  it('creates a vibration observer with default options', () => {
    when: 'creating a vibration observer without options';
    const vibrationObserver = createVibrationObserver();
    expect: 'a vibration observer to be created with default options';
    const defaultOptions: VibrationObserverOptions = { stopOnComplete: false, stopOnError: true };
    expect(vibrationObserver).toBeInstanceOf(VibrationObserver);
    expect(((vibrationObserver as unknown) as { options: VibrationObserverOptions }).options).toEqual(defaultOptions);
    and: 'the type is a generic observer';
    expectTypeOf(vibrationObserver).toEqualTypeOf<Observer<number | ReadonlyArray<number>>>();
  });

  it('creates a vibration observer with the passed options', () => {
    when: 'creating a vibration observer with options';
    const vibrationObserverOptions: VibrationObserverOptions = { stopOnComplete: true, stopOnError: false };
    const vibrationObserver = createVibrationObserver(vibrationObserverOptions);
    expect: 'a vibration observer to be created with the passed options';
    expect(vibrationObserver).toBeInstanceOf(VibrationObserver);
    expect(((vibrationObserver as unknown) as { options: VibrationObserverOptions }).options).toEqual(
      vibrationObserverOptions
    );
  });
});
