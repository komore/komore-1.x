/**
 * Resource types
 */
export const resourceTypes = [
  'application',
  'component',
  'domain',
  'event',
  'function',
  'log-group',
  'process',
  'stack'
] as const;

/**
 * Resource type
 */
export type ResourceType = typeof resourceTypes[number];
