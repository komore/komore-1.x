import { expectTypeOf } from 'expect-type';
import { Observer } from 'rxjs';
import { createVibrationObserver } from './create-vibration-observer';
import { VibrationObserver } from './vibration-observer';
import { VibrationObserverOptions } from './vibration-observer-options';

describe('Create vibration observer', () => {
  it('creates a vibration observer with default options', () => {
    // when: creating a vibration observer without options
    const vibrationObserver = createVibrationObserver();
    // then: a vibration observer is created with default options
    const defaultOptions: VibrationObserverOptions = { stopOnComplete: false, stopOnError: true };
    expect(vibrationObserver).toBeInstanceOf(VibrationObserver);
    expect((vibrationObserver as any).options as VibrationObserverOptions).toEqual(defaultOptions);
    // and: the type is a generic observer
    expectTypeOf(vibrationObserver).toEqualTypeOf<Observer<number | ReadonlyArray<number>>>();
  });

  it('creates a vibration observer with the passed options', () => {
    // when: creating a vibration observer with options
    const vibrationObserverOptions: VibrationObserverOptions = { stopOnComplete: true, stopOnError: false };
    const vibrationObserver = createVibrationObserver(vibrationObserverOptions);
    // then: a vibration observer is created with the passed options
    expect(vibrationObserver).toBeInstanceOf(VibrationObserver);
    expect((vibrationObserver as any).options as VibrationObserverOptions).toEqual(vibrationObserverOptions);
  });
});
