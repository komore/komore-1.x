import { type FromChild } from '@komore/element';
import {
  distinctUntilChanged,
  fromEvent,
  map,
  merge,
  of,
  Subject,
  switchMap,
  takeUntil,
  tap,
  tapNext,
} from '@komore/reactive';
import { messageEventToData } from '@komore/web';
import { createWorker } from '@komore/web/worker';
import { type SearchWorkerInput, type SearchWorkerOutput } from '@komore/website/search/worker';

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
interface SearchInputElementInput {
  readonly fromChild: FromChild;
}

/**
 * Search input element
 */
function searchInputElement({ fromChild }: SearchInputElementInput): Observable<unknown> {
  const [observer, observable] = createWorker<SearchWorkerInput, SearchWorkerOutput>(
    // TODO: normal URL
    new URL('/__komore_browser_server__/modules/@komore/website/search/worker?bundle=true', location.origin),
    { type: 'module' }
  );

  const queryChanged = fromChild<HTMLInputElement>(':host > input').pipe(
    switchMap(inputElement => fromEvent(inputElement, 'input').pipe(map(() => inputElement.value))),
    distinctUntilChanged()
  );

  function toSearchWorkerInput(query: string): SearchWorkerInput {
    return {
      query: {
        query,
      },
    };
  }

  const dispatchSearch = queryChanged.pipe(
    map(toSearchWorkerInput),
    tapNext(searchQuery => console.log('[Search] query changed', searchQuery)),
    tap(observer)
  );

  const searchResults = observable.pipe(
    map(messageEventToData),
    tapNext(results => console.log('[Search] results changed', results))
  );

  return merge([dispatchSearch, searchResults]);
}

/**
 * Search input element
 */
export class SearchInputElement extends HTMLElement {
  private readonly created = new Subject<void>();
  private readonly destroyed = new Subject<void>();

  /**
   * Class constructor
   */
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: 'open' });
    const templateContent = templateElement.content.cloneNode(true);
    shadowRoot.append(templateContent);

    const fromChild = <ElementType extends Element>(selectors: string) =>
      of(shadowRoot.querySelector<ElementType>(selectors)!);

    const element$ = searchInputElement({ fromChild });

    this.created
      .asObservable()
      .pipe(switchMap(() => element$.pipe(takeUntil(this.destroyed))))
      .subscribe();
  }

  connectedCallback(): void {
    this.created.next();
  }

  disconnectedCallback(): void {
    // TODO: actually wrong, but no komore-element lifecycles yet
    this.destroyed.next();
  }
}

customElements.define('kw-search-input', SearchInputElement);
