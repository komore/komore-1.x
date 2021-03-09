import { combineLatest } from '@komore/reactive';
import { takeUntil } from '@komore/reactive/operators';
import type { PathLike } from 'fs';
import type { FileHandle } from 'fs/promises';
import { write } from 'fs/promises';
import { NextObserver, CompletionObserver, Observable, Observer, Subject } from 'rxjs';
import { mergeMap } from 'rxjs/dist/types/operators';
import { openFile } from './open-file';

/**
 * File subject
 */
export class FileSubject<BufferType extends Uint8Array | string> implements NextObserver<string>, CompletionObserver<string> {
  private readonly buffer$ = new Subject<BufferType>();
  private readonly completed$ = new Subject<void>();
  private readonly fileStream$ = combineLatest({
    fileHandle: openFile(this.path, this.flags, this.mode),
    buffer: this.buffer.asObservable()
  }).pipe(
    takeUntil(this.completed$)
  );

  constructor(private readonly path: PathLike, private readonly flags: string, private readonly mode?: number) {
    this.fileHandle = combineLatest({
      fileHandle: openFile(path, flags, mode),
      buffer: this.buffer.asObservable().pipe(
      mergeMap(fileHandle => this.buffer.asObservable().pipe(
        fileHandle.
      ))
    ).pipe();
  }

  next() {
    
  }

  complete(): void {
    this.completed$.next();
  }

}
