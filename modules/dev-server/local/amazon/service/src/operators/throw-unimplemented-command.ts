import { HttpError, HttpStatuses } from '@komore/api/http';
import { throwError } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

export const throwUnimplementedCommand = (commandName: string) =>
  mergeMap(() =>
    throwError(() => new HttpError(HttpStatuses.NotImplemented, `command ${commandName} not implemented`))
  );
