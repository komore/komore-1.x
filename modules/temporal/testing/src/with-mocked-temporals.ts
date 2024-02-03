import { callIfDefined, isDefined } from '@komore/functional';
import { ScenarioBlockByName, type FeatureBlock } from '@komore/testing';

import { mockCurrentInstant } from './mock-current-instant';
import { mockCurrentPlainTime } from './mock-current-plain-time';
import { mockCurrentPlainDateTime } from './mock-current-plain-date-time';
import { mockCurrentPlainDate } from './mock-current-plain-date';
import { mockCurrentTimeZoneId } from './mock-current-time-zone-id';
import { mockCurrentZonedDateTime } from './mock-current-zoned-date-time';
import { type MockedTemporals } from './mocked-temporals';

export function withMockedTemporals(temporals: Partial<MockedTemporals>, project: () => FeatureBlock): FeatureBlock;

export function withMockedTemporals(
  temporals: Partial<MockedTemporals>,
  project: ScenarioBlockByName | (() => ScenarioBlockByName)
): ScenarioBlockByName;

export function withMockedTemporals<T extends FeatureBlock | ScenarioBlockByName>(
  temporals: Partial<MockedTemporals>,
  project: ScenarioBlockByName | (() => T)
): T {
  const {
    currentInstant,
    currentPlainDate,
    currentPlainDateTime,
    currentPlainTime,
    currentTimeZoneId,
    currentZonedDateTime,
  } = temporals;
  const mockTemporals = [
    callIfDefined(mockCurrentInstant)(currentInstant),
    callIfDefined(mockCurrentPlainDate)(currentPlainDate),
    callIfDefined(mockCurrentPlainDateTime)(currentPlainDateTime),
    callIfDefined(mockCurrentPlainTime)(currentPlainTime),
    callIfDefined(mockCurrentTimeZoneId)(currentTimeZoneId),
    callIfDefined(mockCurrentZonedDateTime)(currentZonedDateTime),
  ].filter(isDefined);

  const result = project(); // TODO: handle case where project is scenario blocks

  for (const mockTemporal of mockTemporals) {
    mockTemporal.clearMock();
  }

  return result;
}
