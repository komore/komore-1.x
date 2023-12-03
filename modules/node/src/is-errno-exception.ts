export function isErrnoException(error: unknown): error is NodeJS.ErrnoException {
  return (
    (typeof error === 'object' &&
      error &&
      (('errno' in error && typeof error.errno === 'number') ||
        ('code' in error && typeof error.code === 'string') ||
        ('syscall' in error && typeof error.syscall === 'string'))) ||
    false
  );
}
