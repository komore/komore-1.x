import { combineLatest, type CompletionObserver, mergeMap, type NextObserver, Subject, takeUntil } from '@komore/reactive';
import { type PathLike } from 'fs';
import { type FileHandle, write } from 'fs/promises';
import { openFile } from './open-file';

/**
 * Creates a file subject
 * @param path PAth
 */
export function createFileSubject<BufferType extends Uint8Array | string>(path: PathLike): NextObserver<BufferType> & CompletionObserver<BufferType> {
  const buffer$ = new Subject<BufferType>();
  
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
