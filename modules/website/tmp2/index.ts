import { lastValueFrom, mapTo, mergeMap, of, tap } from 'rxjs';
import { parseMarkdown } from './parse-markdown';
import { toFileContent } from './to-file-content';

const parsed = await parseMarkdown(fileContent);

function main(fileName: string): Promise<void> {
  const $ = of(fileName).pipe(
    tap(fileName => console.log(`reading ${fileName}`)),
    mergeMap(toFileContent), // TODO: komore file read
    mergeMap(parseMarkdown),
    mapTo(void 0)
  );

  return lastValueFrom($);
}

await main('../komore/docs/modules/observability-logging-recipes.md');
