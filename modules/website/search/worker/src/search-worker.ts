import { map, startWith, switchMap } from '@komore/reactive';
import { messageEventToData } from '@komore/web';
import { defineWorker } from '@komore/web/worker';

import { executeSearch } from './execute-search';
import { type SearchWorkerInput } from './search-worker-input';
import { type SearchWorkerOutput } from './search-worker-output';

const [observable, observer] = defineWorker<SearchWorkerInput, SearchWorkerOutput>();

export const subscription = observable
  .pipe(
    map(messageEventToData),
    switchMap(input =>
      executeSearch(input.query).pipe(
        map(results => ({
          input,
          loading: false,
          results,
        })),
        startWith({
          input,
          loading: true,
          results: [],
        })
      )
    )
  )
  .subscribe(observer);
