[//]: #title 'Wake Lock'
[//]: #description 'komore web wake lock module'
[//]: #keyword 'web'
[//]: #keyword 'screen'
[//]: #keyword 'wake'
[//]: #keyword 'lock'
[//]: #keyword '@komore/web'
[//]: #keyword '@komore/web/wake-lock'
[//]: #path 'modules/web/wake-lock'
[//]: #see-also '../README.md'

# @komore/web/wake-lock

The [Screen Wake Lock API] can prevent a device from dimming or locking the screen.

While such features are useful to save on battery life, they may hinder some use cases such as QR code readers,
navigation, games or augmented reality concepts.

## Key concepts

- When a screen wake lock is held, the device will not dim or lock the screen
- The lock can be released programmatically, or
- The lock can be released due to the user/device activity, e.g. switching to another task

## Usage

### Lock

A screen wake lock is created using the [`createWakeLock()`] function, passing `'screen'` as the wake lock type.

The lock is returned as a cold observable that never emits.

Subscribing to the observable requests a lock.

Unsubscribing releases the lock.

The lock being released for [other reasons](#page-visibility) makes the observable error.

```ts
import { timer } from '@komore/reactive';
import { takeUntil } from '@komore/reactive/operators';
import { createWakeLock } from '@komore/web/wake-lock';

const timeElapsed = timer(5000);

createWakeLock('screen')
  .pipe(takeUntil(timeElapsed))
  .subscribe({
    complete: () => console.log('lock released after 5 seconds'),
    error: () => console.log('lock released by user/device')
  });
```

### Page visibility

A document must be visible to acquire a lock, and losing visibility releases locks.

The [`retryWhen()`] operator can be used with [`observePageVisibility()`] to reacquire the lock when the document
becomes visible again.

```ts
import { fromEvent } from '@komore/reactive';
import { filter, retryWhen, skipFirst, takeUntil } from '@komore/reactive/operators';
import { isPageVisible, observePageVisiblity } from '@komore/web';
import { createWwakeLock } from '@komore/web/wake-lock';

const documentClicked = fromEvent(document, 'click');
const pageVisibleAgain = observePageVisibility().pipe(
  skipFirst(),
  filter(isPageVisible)
);

createWakeLock('screen').pipe(
  retryWhen(error => error.pipe(
    tapValue(() => console.log('lock released by user/device')),
    delayWhen(pageVisibleAgain)
  )),
  takeUntil(documentClicked)
).subscribe(
  complete: () => console.log('lock released after clicking')
);
```

### Support

When this document was last updated, support for the API was still [relatively limited]:

- Chromium-based browsers support it
- Firefox does not support it
- Safari does not support it

The [`isWakeLockSupported()`] function returns `true` when the API is available.

NOTE: While less relevant on desktop platforms, the API is available and document visibility loss behaves as expected.

[relatively limited]: https://caniuse.com/wake-lock
[screen wake lock api]: https://developer.mozilla.org/en-US/docs/Web/API/Screen_Wake_Lock_API
[`createwakelock()`]: ../../../../modules/web/wake-lock/src/create-wake-lock.ts
[`iswakelocksupported()`]: ../../../../modules/web/wake-lock/src/is-wake-lock-supported.ts
[`observepagevisibility()`]: ../../../../modules/web/src/observe-page-visibility.ts
[`retrywhen()`]: ../../../../modules/reactive/operators/src/retry-when.ts
