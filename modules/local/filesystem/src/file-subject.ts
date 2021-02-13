import type { Mode, PathLike } from 'fs';
import type { FileHandle } from 'fs/promises';
import { write } from 'fs/promises';
import { Observable, Observer, Subject } from 'rxjs';
import { openFile } from './open-file';

/**
 * File subject
 */
export class FileSubject<BufferType extends Uint8Array | string> implements Observer<string> {
  private readonly fileHandle: Observable<FileHandle>;
  private readonly buffer = new Subject<BufferType>();

  constructor(path: PathLike, flags: string | number, mode: Mode) {
    this.fileHandle = openFile(path, flags, mode);
    open(path, openMode, mode, )
  }

  next() {
    write()
  }

  error() {

  }

  complete() {

  }

}
