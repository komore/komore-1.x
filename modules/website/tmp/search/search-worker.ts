import { map, startWith, switchMap } from 'rxjs';
import { toMessageEventData } from '../komore/web/to-message-data'; // from '@komore/web';
import { defineWorker } from '../komore/web/worker'; // from '@komore/web/worker';
import { executeSearch } from './execute-search';
import type { SearchWorkerInput } from './search-worker-input';
import type { SearchWorkerResult } from './search-worker-result';

const [observable, observer] = defineWorker<SearchWorkerInput, SearchWorkerResult>();

observable.pipe(
  map(toMessageEventData),
  switchMap(input => executeSearch(input).pipe(
    map(results => ({
      input,
      loading: false,
      results
    })),
    startWith({
      input,
      loading: true,
      results: []
    })
  ))
).subscribe(observer);
