import { withHttpEndpoint as on } from '@komore/api/http';

/**
 * Adds SNS endpoints to a pipeline
 */
export const withSnsEndpoints = on('/api-gateway'
);
