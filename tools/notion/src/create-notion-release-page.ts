import { createNotionDatabase } from '@komore/notion';
import { empty } from '@komore/reactive';

import { type NotionReleasePageOptions } from './notion-release-page-options';

export function createNotionReleasePage(options: NotionReleasePageOptions): Observable<void> {
  const { apiClient } = options;
  createNotionDatabase(apiClient);
  return empty;
}
