import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CdkTreeModule } from '@angular/cdk/tree';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { NavigationComponent } from './navigation.component';
import { NavigationToggleDirective } from './navigation-toggle.directive';

/**
 * Navigation module
 */
@NgModule({
  imports: [CommonModule, CdkTreeModule, MatButtonModule, MatIconModule, MatRippleModule, RouterModule],
  declarations: [NavigationComponent, NavigationToggleDirective],
  exports: [NavigationComponent, NavigationToggleDirective]
})
export class NavigationModule {}
