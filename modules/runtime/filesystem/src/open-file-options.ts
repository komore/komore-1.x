/**
 * Open file options
 */
export interface OpenFileOptions {
  /**
   * Flags used when opening the file; defaults to `'r'` (read)
   * @see {@link https://nodejs.org/api/fs.html#fs_file_system_flags File system flags}
   */
  readonly flags: string;
  /**
   * Mode used when creating the file; defaults to `0666` (readable and writable)
   */
  readonly mode: number;
}
