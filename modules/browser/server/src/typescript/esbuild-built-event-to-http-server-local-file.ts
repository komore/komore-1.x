import { type esbuildEvent } from '@komore/esbuild';
import { type EventFromType } from '@komore/event';
import { type HttpServerLocalFile } from '@komore/http/server';

export function esbuildBuiltEventToHttpServerLocalFile(): (
  event: EventFromType<typeof esbuildEvent, 'built'>
) => HttpServerLocalFile {
  const mediaType = 'text/javascript';
  return ({ properties: result }) => {
    const { errors, outputFiles = [] } = result;
    if (errors.length > 0) {
      console.log('errors during esbuild', errors);
    }
    const fileContent = outputFiles[0]?.text ?? 'no content :(';

    return {
      fileContent,
      mediaType,
    };
  };
}
