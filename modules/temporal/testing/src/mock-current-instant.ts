import { type MockTemporal } from './mock-temporal';

/**
 * Mocks the current instant and returns a mocke temporal
 *
 * @param instant Instant
 * @returns Mock temporal
 */
export function mockCurrentInstant(instant: Temporal.Instant): MockTemporal {
  const previousInstant = Temporal.Now.instant;
  Temporal.Now.instant = () => instant;
  return {
    clearMock: () => (Temporal.Now.instant = previousInstant),
  };
}
