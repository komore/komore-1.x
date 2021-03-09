import type { Observable } from '@komore/reactive';
import { BehaviorSubject } from '@komore/reactive';
import { shareReplay } from '@komore/reactive/operators';
import type { LocalServiceConfigurationProcessor } from './local-service-configuration-processor';

/**
 * Local service configuration processors
 */
const localServiceConfigurationProcessors = new Map<string, unknown>();

/**
 * Local service configurations
 */
interface LocalServiceConfigurationSubject<T> {
  readonly subject: BehaviorSubject<T | undefined>;
  readonly observable: Observable<T | undefined>;
}

const localServiceConfigurationSubjects = new Map<string, LocalServiceConfigurationSubject<unknown>>();

/**
 * Gets a local service configuration
 * @param serviceName Service name
 * @returns Service configuration
 * @template ConfigurationType Service configuration type
 */
export function watchLocalServiceConfiguration<ConfigurationType>(serviceName: string): Observable<ConfigurationType | undefined> {
  let localServiceConfigurationSubject = localServiceConfigurationSubjects.get(serviceName) as LocalServiceConfigurationSubject<ConfigurationType> | undefined;
  if (localServiceConfigurationSubject !== undefined) {
    return localServiceConfigurationSubject.observable;
  }

  const serviceConfiguration = localServiceConfigurationProcessors.get(serviceName) as ConfigurationType | undefined;
  const subject = new BehaviorSubject<ConfigurationType | undefined>();
  const observable = subject.asObservable().pipe(
    shareReplay({ bufferSize: 1, refCount: false })
  );
}

/**
 * Registers a local service configuration
 * @param serviceName Service name
 * @param configuration Service configuration
 */
export function setLocalServiceConfigurationProcessor<ConfigurationType>(
  serviceName: string,
  localServiceConfigurationProcessor: LocalServiceConfigurationProcessor<ConfigurationType>
): void {
  localServiceConfigurationProcessors.set(serviceName, configuration);
}

export function setLocalServiceConfigurationOverride(configurationKey: string, value: unknown): void {
  
}
