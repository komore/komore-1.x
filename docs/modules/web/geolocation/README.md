# Geolocation

The [Geolocation API] allows access to the user's location.

## Watch the position

The `watchPosition` function creates a stream of gelocation positions and errors:

```ts
import { watchPosition } from '@komore/web/geolocation';

watchPosition().subscribe(positionOrError => console.log('position or error', positionOrError));
```

## Ignore position errors

The stream emits geolocation position errors, which occur when the location cannot be retrieved.

The `ignoreGeolocationPositionErrors` operator filters those errors:

```ts
import { ignoreGeolocationPositionErrors } from '@komore/web/geolocation';

watchPosition()
  .pipe(ignoreGeolocationPositionErrors())
  .subscribe(({ coords }) => console.log(`${coords.latitude},${coords.longitude} (within ${coords.accuracy} meters`));
```

## Throw position errors

The `throwOnGeolocationPositionError` operator can turn emitted geolocation position errors into actual errors:

```ts
import { throwOnGeolocationPositionError } from '@komore/web/geolocation';

watchPosition()
  .pipe(throwOnGeolocationPositionError())
  .subscribe({
    next: position => console.log('position', position),
    error: error => console.log('error', error)
  });
```

Passing an error factory to `throwOnGeolocationPositionError` provides greater control over the thrown error:

```ts
watchPosition()
  .pipe(throwOnGeolocationPositionError(geolocationPositionError => new CustomError(geolocationPositionError)))
  .subscribe({
    next: position => console.log('position', position),
    error: error => console.log('error', error)
  });
```

[geolocation api]: https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API
