import { type Observable } from '@komore/reactive';

export function matchAwsCommand(client: unknown): (command: unknown) => Observable<unknown> {}
