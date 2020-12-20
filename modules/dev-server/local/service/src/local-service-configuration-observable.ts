import { Observable } from 'rxjs';

/**
 * Local service configuration observable
 * @template LocalServiceConfigurationType Local service configuration type
 */
export class LocalServiceConfigurationObservable<LocalServiceConfigurationType> extends Observable<
  LocalServiceConfigurationType | undefined
> {
  /**
   * Class constructor
   */
  constructor() {
    super(observer => {
        
    });
  }
}
