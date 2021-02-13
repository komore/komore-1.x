// TODO?: error => get stacktrace / formatted error
export {};

export function todo(error: unknown) {
  if (error instanceof Error) {
    error.stack;
  }
}
