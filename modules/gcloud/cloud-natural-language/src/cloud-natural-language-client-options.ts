import { type LanguageServiceClient } from '@google-cloud/language';

/**
 * Cloud Natural Language client options
 */
export type CloudNaturalLanguageClientOptions = NonNullable<ConstructorParameters<typeof LanguageServiceClient>[0]>;
