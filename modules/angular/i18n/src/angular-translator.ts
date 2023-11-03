import { Inject, Injectable } from '@angular/core';
import { type Translator } from '@komore/i18n';

import { angularTranslatorToken } from './angular-translator-token';

/**
 * Angular translator service
 */
@Injectable({
  providedIn: 'root',
})
export class AngularTranslator {
  /**
   * Class constructor
   *
   * @param translator Translator
   */
  constructor(
    @Inject(angularTranslatorToken)
    translator: Translator
  ) {
    return translator;
  }
}

/**
 * Translator function signature
 */
export interface AngularTranslator extends Translator {}
