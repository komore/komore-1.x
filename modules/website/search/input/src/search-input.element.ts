import type { FromAttribute, FromChild } from '@komore/element';
import { fromEvent, merge, Observable, Subject } from '@komore/reactive';
import { distinctUntilChanged, map, switchMap, takeUntil, tap, tapValue } from '@komore/reactive/operators';
import { toMessageEventData } from '@komore/web';
import { createWorker } from '@komore/web/worker';
import { SearchQuery } from '@komore/website/search';
import type { SearchWorkerInput, SearchWorkerOutput } from '@komore/website/search/worker';
import { EMPTY } from 'rxjs';

const templateElement = document.createElement('template');

templateElement.innerHTML = `
<style>
  :host {
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    min-width: 320px;
  }

  :host > input {
    appearance: none;
    background-color: #ffffff;
    height: 32px;
    border-radius: 16px;
    border: none;
    outline: none;
    padding: 0px 16px;
    box-sizing: border-box;
    width: 240px;
    transition: width 0.25s linear;
  }

  :host > input:focus {
    width: 320px;
  }

  :host > ul {
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    left: 0px;
    right: 0px;
    top: 100%;
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
    min-height: 60px;
    max-height: 120px;
    background-color: #ffffff;
    box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.25);
    z-index: 1;
  }
</style>
<input type="text" placeholder="Search">
<ul></ul>
`;

/**
 * @komore/element/compiler TODO
 */
interface SearchInputElementAttributeMap {
  'x': string;
}

interface SearchInputElementInput {
  readonly fromAttribute: FromAttribute<SearchInputElementAttributeMap>;
  readonly fromChild: FromChild;
}
/**
 * 
 */

function searchInputElement({ fromChild }: SearchInputElementInput): Observable<unknown> {
  const [observer, observable] = createWorker<SearchWorkerInput, SearchWorkerOutput>(
    new URL(location.origin + '/search-worker.js')
  );

  const queryChanged = fromChild<HTMLInputElement>(':scope > input').pipe(
    switchMap(inputElement => fromEvent(inputElement, 'input').pipe(
      map(() => inputElement.value)
    )),
    distinctUntilChanged()
  );

  function toSearchWorkerInput(query: string): SearchWorkerInput {
    return {
      query: {
        query
      }
    };
  }

  queryChanged.pipe(
    map(query => ({
      query
    })),
    tapValue(searchQuery => console.log('[Search] query changed', searchQuery)),
    tap(observer)
  );

  return merge([queryChanged]);
}

/**
 * Search input element
 */
export class SearchInputElement extends HTMLElement {
  private readonly destroyed = new Subject<void>();

  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: 'open' });
    const templateContent = templateElement.content.cloneNode(true);
    shadowRoot.append(templateContent);
    const inputElement = shadowRoot.querySelector<HTMLInputElement>(':host > input')!;
    const query = fromEvent(inputElement, 'input').pipe(map(() => inputElement.value));
    const searchResults = observable.pipe(map(toMessageEventData));

    query
      .pipe(
        distinctUntilChanged(),
        map(query => ({
          query
        })),
        tap(searchQuery => console.log('[Search] query changed', searchQuery)),
        takeUntil(this.destroyed)
      )
      .subscribe(observer);

    searchResults.pipe(takeUntil(this.destroyed)).subscribe(results => {
      console.log('results', results);
    });
  }

  connectedCallback(): void {
    console.log('kw-search-input connected');
  }

  disconnectedCallback(): void {
    // TODO: actually wrong, but no komore-element lifecycles yet
    this.destroyed.next();
  }
}

customElements.define('kw-search-input', SearchInputElement);
