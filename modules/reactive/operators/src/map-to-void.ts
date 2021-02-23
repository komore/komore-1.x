import { map } from './map';

/**
 * Ignores any 
 */
export function mapToVoid() {
  return map(() => {
    // void function
  });
}
