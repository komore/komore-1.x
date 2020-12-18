import { Directive, HostListener } from '@angular/core';

/**
 * Navigation toggle directive
 */
@Directive({
  selector: '[komoreNavigationToggle]'
})
export class NavigationToggleDirective {
  @HostListener('click', ['$event'])
  onClick($event: MouseEvent): void {
    $event.stopPropagation();
    $event.preventDefault();
    console.log('todo toggle');
  }
}
