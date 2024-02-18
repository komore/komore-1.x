import { type Domain } from '@komore/domain';
import { objectToEntries } from '@komore/functional';
import { type ReadonlyRecord } from '@komore/typescript';

import { type LogEventPropertiesFromEventDefinitions } from '../properties/log-event-properties-from-event-definitions';
import { type LogEventPropertiesSchema } from '../properties/log-event-properties-schema';
import { type LogEventType } from './log-event-type';
import { logEventPropertiesSchemaEntryToLogEventCreatorEntry } from './log-event-properties-schema-entry-to-log-event-creator-entry';
import { logEventCreatorEntryToPropertyDescriptorMap } from './log-event-creator-entry-to-property-descriptor-map';

/**
 * Creates a log event type
 *
 * @param domain Domain
 * @param definitions Log event definitions
 * @returns Event group
 * @template DomainType Domain type
 * @template LogEventDefinitions Log event definitions
 */
export function createLogEventType<
  DomainType extends Domain,
  LogEventDefinitions extends ReadonlyRecord<string, LogEventPropertiesSchema<ReadonlyRecord<string, unknown> | void>>,
>(
  domain: DomainType,
  definitions: LogEventDefinitions
): LogEventType<DomainType, LogEventPropertiesFromEventDefinitions<LogEventDefinitions>> {
  const propertyDescriptors = objectToEntries(definitions)
    .map(logEventPropertiesSchemaEntryToLogEventCreatorEntry(domain))
    .reduce(logEventCreatorEntryToPropertyDescriptorMap, {} as PropertyDescriptorMap);
  return Object.defineProperties({}, propertyDescriptors) as LogEventType<
    DomainType,
    LogEventPropertiesFromEventDefinitions<LogEventDefinitions>
  >;
}
