import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';
import { ConfigurationModel } from './configuration.model';

/**
 * Configuration service
 */
@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {
  readonly configuration$: Observable<ConfigurationModel>;

  /**
   * Class constructor
   * @param httpClient HTTP client
   */
  constructor(httpClient: HttpClient) {
    this.configuration$ = httpClient.get<ConfigurationModel>('/config.json').pipe(
      shareReplay(1)
    );
  }
}
