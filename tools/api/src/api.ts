import { createHttpServer } from '@komore/http/server';
import {}
import { lastValueFrom } from '@komore/reactive';

async function main() {
  const httpServer$ = createHttpServer({ handler: request$ => request$.pipe() });
  await lastValueFrom(httpServer$);
}

main();
