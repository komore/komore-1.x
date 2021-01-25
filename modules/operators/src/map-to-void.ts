import { map } from 'rxjs/operators';

export function mapToVoid() {
  return map(() => {});
}
