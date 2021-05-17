import type { Observer } from '@komore/reactive';
import { expectTypeOf } from 'expect-type';
import { createVibrationObserver } from './create-vibration-observer';
import type { VibrationObserverOptions } from './vibration-observer-options';

describe('Create vibration observer', () => {
  type VibrateFunctionType = typeof navigator.vibrate;
  let mockVibrate: jest.Mock<ReturnType<VibrateFunctionType>, Parameters<VibrateFunctionType>>;

  beforeEach(() => {
    mockVibrate = jest.fn();
    globalThis.navigator.vibrate = mockVibrate;
  });

  it('calls vibrate with pattern on next', () => {
    given: 'a vibration observer';
    const vibrationObserver = new VibrationObserver({ stopOnComplete: false, stopOnError: true });
    and: 'a vibration pattern';
    const pattern = [1, 2, 3];
    when: 'calling next()';
    vibrationObserver.next(pattern);
    expect: 'navigator.vibrate() to have been called once with the pattern';
    expect(mockVibrate).toHaveBeenCalledTimes(1);
    expect(mockVibrate).toHaveBeenCalledWith(pattern);
  });

  describe('on error', () => {
    it('calls navigator.vibrate with 0 if stopOnError is true', () => {
      given: 'a vibration observer with the stopOnError option set to true';
      const vibrationObserver = new VibrationObserver({ stopOnComplete: false, stopOnError: true });
      when: 'calling error()';
      vibrationObserver.error();
      expect: 'navigator.vibrate() to have been called once with 0';
      expect(mockVibrate).toHaveBeenCalledTimes(1);
      expect(mockVibrate).toHaveBeenCalledWith(0);
    });

    it('does not call navigator.vibrate with 0 if stopOnError is false', () => {
      given: 'a vibration observer with the stopOnError option set to false';
      const vibrationObserver = new VibrationObserver({ stopOnComplete: false, stopOnError: false });
      when: 'calling error()';
      vibrationObserver.error();
      expect: 'navigator.vibrate() not to have been called';
      expect(mockVibrate).not.toHaveBeenCalled();
    });
  });

  describe('on complete', () => {
    it('calls navigator.vibrate with 0 if stopOnComplete is true', () => {
      given: 'a vibration observer with the stopOnComplete option set to true';
      const vibrationObserver = new VibrationObserver({ stopOnComplete: true, stopOnError: true });
      when: 'calling complete()';
      vibrationObserver.complete();
      expect: 'navigator.vibrate() to have been called once with 0';
      expect(mockVibrate).toHaveBeenCalledTimes(1);
      expect(mockVibrate).toHaveBeenCalledWith(0);
    });

    it('does not call navigator.vibrate with 0 if stopOnComplete is false', () => {
      given: 'a vibration observer with the stopOnComplete option set to false';
      const vibrationObserver = new VibrationObserver({ stopOnComplete: false, stopOnError: true });
      when: 'calling complete()';
      vibrationObserver.complete();
      expect: 'navigator.vibrate() not to have been called';
      expect(mockVibrate).not.toHaveBeenCalled();
    });
  });
});
