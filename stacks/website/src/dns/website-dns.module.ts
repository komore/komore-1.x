import { defineModule } from '@komore/stack';

/**
 * Web - DNS module
 */
export const webDnsModule = defineModule('dns', scope$ => scope$.pipe());
