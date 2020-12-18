import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, pluck, switchMap } from 'rxjs/operators';
import { contentLoaded, contentLoadingFailed, contentRequested } from './documentation.actions';
import { DocumentationService } from './documentation.service';

/**
 * Documentation store side-effects
 */
@Injectable({
  providedIn: 'root'
})
export class DocumentationEffects {
  /**
   * Class constructor
   * @param actions$ Actions observable
   * @param documentationService Documentation service
   */
  constructor(private readonly actions$: Actions, private readonly documentationService: DocumentationService) {}

  /**
   * Content requested side-effect
   */
  readonly contentRequested$ = createEffect(() =>
    this.actions$.pipe(
      ofType(contentRequested),
      pluck('contentPath'),
      switchMap(contentPath =>
        this.documentationService.loadContent(contentPath).pipe(
          map(content => contentLoaded({ contentPath, content })),
          catchError(contentError => of(contentLoadingFailed({ contentPath, contentError })))
        )
      )
    )
  );
}
