/*import { of } from 'rxjs';
import { mapTo } from 'rxjs/operators';
import { attrs, defineElement, events, props, state } from '.';

defineElement('test-item', {});

defineElement('test-list', {
  state: state<{}>(),
  attributes: attrs<{ someAttr: string }>(),
  properties: props<{}>(),
  events: events<{
    'somethingHappened': MouseEvent
  }>()
})`
  <h1>
    ${true}
  </h1>
  <aside>
    ${of(true)}
  <main>
    ${({ state$ }) => state$.pipe(mapTo('hello'))}
  </main>
`;


defineElement('test-application', {})``;*/