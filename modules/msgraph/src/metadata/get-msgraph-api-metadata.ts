import { map, type Observable } from '@komore/reactive';

import { type MsGraphApiClient } from '../msgraph-api-client';
import { type MsGraphApiMetadata } from './msgraph-api-metadata';

/**
 * Creates a function that returns the Microsoft Graph API's metadata
 *
 * @param apiClient Microsoft Graph API client
 * @returns Function that returns the Microsoft Graph API's metadata
 */
export function getMsGraphApiMetadata(apiClient: MsGraphApiClient): () => Observable<MsGraphApiMetadata> {
  const resourcePath = '$metadata';
  return () =>
    apiClient<string>('GET', resourcePath).pipe(
      map(metadataXml => {
        // TODO: @komore/xml
        const domParser = new DOMParser();
        const document = domParser.parseFromString(metadataXml, 'text/xml');
        return { document };
      })
    );
}
