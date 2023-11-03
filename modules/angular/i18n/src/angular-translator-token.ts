import { InjectionToken } from '@angular/core';

import { type Translator } from '@komore/i18n';

/**
 * Angular translator injection token
 *
 * @private
 */
export const angularTranslatorToken = new InjectionToken<Translator>('@komore/i18n:translator');
