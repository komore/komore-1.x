import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule, SecurityContext } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { MarkdownModule, MarkedOptions } from 'ngx-markdown';
import { DocumentationTocComponent } from './documentation-toc.component';
import { DocumentationComponent } from './documentation.component';
import { DocumentationEffects } from './documentation.effects';
import { documentationReducer } from './documentation.reducer';
import { documentationRoutes } from './documentation.routes';

/**
 * Documentation module
 */
@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    MarkdownModule.forRoot({
      markedOptions: {
        provide: MarkedOptions,
        useValue: {}
      },
      sanitize: SecurityContext.NONE
    }),
    RouterModule.forChild(documentationRoutes),
    StoreModule.forFeature('documentation', documentationReducer),
    EffectsModule.forFeature([DocumentationEffects])
  ],
  declarations: [DocumentationComponent, DocumentationTocComponent]
})
export class DocumentationModule {}
