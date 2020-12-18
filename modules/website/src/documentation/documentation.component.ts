import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getContent } from './documentation.selectors';
import { DocumentationState } from './documentation.state';

/**
 * Documentation component
 */
@Component({
  selector: 'komore-documentation',
  templateUrl: './documentation.component.html',
  styleUrls: ['./documentation.component.scss']
})
export class DocumentationComponent {
  readonly content$: Observable<string | undefined>;

  /**
   * Class constructor
   * @param documentationService Documentation service
   */
  constructor(store: Store<DocumentationState>) {
    this.content$ = store.select(getContent);
  }
}
