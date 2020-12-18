import { Injectable } from '@angular/core';
import { Actions } from '@ngrx/effects';

/**
 * komore side-effects
 */
@Injectable({
  providedIn: 'root'
})
export class KomoreEffects {
  /**
   * Class constructor
   * @param actions$ Actions observable
   */
  constructor(private readonly actions$: Actions) {}
}
