# Permission

The [Permission API] allows querying the permission status of web APIs.

## Query permission status

The `queryPermissionStatus` function emits a permission's status:

```ts
import { queryPermissionStatus } from '@komore/web/permission';

queryPermissionStatus({ name: 'notifications' }).subscribe(status => console.log('Notifications API:', status));
```

## TODO

Examples for each API

- accelerometer
- accessibility-events
- ambient-light-sensor
- background-sync
- camera
- clipboard-read
- clipboard-write
- geolocation
- gyroscope
- magnetometer
- microphone
- midi
- notifications
- payment-handler
- persistent-storage
- push

https://developer.mozilla.org/en-US/docs/Web/API/Permissions_API
