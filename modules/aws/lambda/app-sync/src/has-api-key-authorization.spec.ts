import { expectTypeOf } from 'expect-type';
import { type AppSyncEvent } from './event/app-sync-event';
import { type AppSyncEventWithApiKeyAuthorization } from './event/app-sync-event-with-api-key-authorization';
import { hasApiKeyAuthorization } from './has-api-key-authorization';

describe('Has API key authorization', () => {
  it('returns true when the identity is null', () => {
    given: 'an AppSync event with a null identity';
    const appSyncEvent = { identity: null } as AppSyncEvent<unknown>;
    when: 'testing whether the event has an API key identity';
    const result = hasApiKeyAuthorization(appSyncEvent);
    expect: 'true to be returned';
    expect(result).toBe(true);
  });

  it('returns false when the identity is not null', () => {
    given: 'an AppSync event with a non-null identity';
    const appSyncEvent = { identity: {} } as AppSyncEvent<unknown>;
    when: 'testing whether the event has an API key identity';
    const result = hasApiKeyAuthorization(appSyncEvent);
    expect: 'false to be returned';
    expect(result).toBe(false);
  });

  it('properly types the AppSync event when returning true', () => {
    given: 'an AppSync event with a null identity';
    const appSyncEvent = { identity: null } as AppSyncEvent<string>;
    expect: 'the AppSync event identity type to be asserted';
    if (hasApiKeyAuthorization(appSyncEvent)) {
      expectTypeOf(appSyncEvent).toEqualTypeOf<AppSyncEventWithApiKeyAuthorization<string>>();
    }
  });
});
