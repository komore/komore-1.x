import { expectTypeOf } from 'expect-type';
import type { AppSyncEvent } from './app-sync-event';
import type { AppSyncEventWithApiKeyIdentity } from './app-sync-event-with-api-key-identity';
import { hasApiKeyIdentity } from './has-api-key-identity';

describe('Has API key identity', () => {
  it('returns true when the identity is null', () => {
    given: 'an AppSync event with a null identity';
    const appSyncEvent = { identity: null } as AppSyncEvent<unknown>;
    when: 'testing whether the event has an API key identity';
    const result = hasApiKeyIdentity(appSyncEvent);
    expect: 'true to be returned';
    expect(result).toBe(true);
  });

  it('returns false when the identity is not null', () => {
    given: 'an AppSync event with a non-null identity';
    const appSyncEvent = { identity: {} } as AppSyncEvent<unknown>;
    when: 'testing whether the event has an API key identity';
    const result = hasApiKeyIdentity(appSyncEvent);
    expect: 'false to be returned';
    expect(result).toBe(false);
  });

  it('properly types the AppSync event when returning true', () => {
    given: 'an AppSync event with a null identity';
    const appSyncEvent = { identity: null } as AppSyncEvent<string>;
    expect: 'the AppSync event identity type to be asserted';
    if (hasApiKeyIdentity(appSyncEvent)) {
      expectTypeOf(appSyncEvent).toEqualTypeOf<AppSyncEventWithApiKeyIdentity<string>>();
    }
  });
});
