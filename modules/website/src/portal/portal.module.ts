import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ConfigurationModule } from '../configuration';
import { environment } from '../environments/environment';
import { NavigationModule } from '../navigation';
import { SearchModule } from '../search';
import { FooterComponent } from './footer.component';
import { HeaderComponent } from './header.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { PortalComponent } from './portal.component';
import { portalRoutes } from './portal.routes';

/**
 * Portal module
 */
@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(portalRoutes, { initialNavigation: 'enabled' }),
    StoreModule.forRoot({}),
    EffectsModule.forRoot(),
    StoreDevtoolsModule.instrument({
      logOnly: environment.production,
      maxAge: 256,
      name: 'komore Portal'
    }),
    ConfigurationModule,
    NavigationModule,
    SearchModule
  ],
  declarations: [FooterComponent, HeaderComponent, PageNotFoundComponent, PortalComponent],
  bootstrap: [PortalComponent]
})
export class PortalModule {}
