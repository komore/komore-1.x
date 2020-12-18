import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ConfigurationService } from '../configuration';
import { NavigationItemModel } from '../navigation';

/**
 * Portal component
 */
@Component({
  selector: 'komore-portal',
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PortalComponent {
  readonly navigationItems$: Observable<ReadonlyArray<NavigationItemModel>>;

  /**
   * Class constructor
   * @param configurationService Configuration service
   */
  constructor(configurationService: ConfigurationService) {
    this.navigationItems$ = configurationService.configuration$.pipe(
      map(configuration => configuration.navigation.content)
    );
  }
}
