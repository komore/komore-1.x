import type { Observable } from '@komore/reactive';
import { readBlobAsDataUrl } from './read-blob-as-data-url';

export function readBlobAsDataUrlWith(fileReader: FileReader): (blob: Blob) => Observable<string> {
  return blob => readBlobAsDataUrl(blob, fileReader);
}
