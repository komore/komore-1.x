import { ChangeDetectorRef, Directive, ElementRef, Input, TemplateRef, ViewContainerRef } from '@angular/core';

import { type LanguageCode } from '@komore/i18n';

/**
 * Angular translator directive
 */
@Directive({
  selector: '[translator]',
  standalone: true,
})
export class AngularTranslatorDirective {
  @Input('translatorRead')
  read?: string;
  @Input('translatorNamespace')
  namespace?: string;
  @Input('translatorLanguageCode')
  languageCode?: LanguageCode;

  /**
   * Class constructor
   *
   * @param templateRef Template reference
   * @param elementRef Element reference
   * @param changeDetectorRef Change detector reference
   * @param viewContainerRef View container reference
   */
  constructor(
    private readonly templateRef: TemplateRef<unknown>,
    private readonly elementRef: ElementRef<unknown>,
    private readonly changeDetectorRef: ChangeDetectorRef,
    private readonly viewContainerRef: ViewContainerRef
  ) {
    this.templateRef;
    this.elementRef;
    this.changeDetectorRef;
    this.viewContainerRef;
  }
}

/*
function templateHandler(loadingTemplate: TemplateRef<unknown>, viewContainerRef: ViewContainerRef) {

}*/
