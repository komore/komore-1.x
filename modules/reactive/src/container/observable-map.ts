import { type Observable } from '../observable';

/**
 * Observable map
 *
 * @template K Key type
 * @template V Value type
 */
export class ObservableMap<K, V> extends Map<K, Observable<V>> {
  private readonly resolver: (key: K) => Observable<V>;

  /**
   * Class constructor
   *
   * @param resolver Resolver
   * @param entries Entries
   */
  constructor(resolver: (key: K) => Observable<V>, entries?: readonly (readonly [key: K, value: Observable<V>])[]) {
    super(entries);
    this.resolver = resolver;
  }

  get(key: K): Observable<V> {
    const value = super.get(key);
    if (value !== undefined) {
      return value;
    }

    const obs = this.resolver(key);
    this.set(key, obs);
    return obs;
  }
}
