# komore AWS Integration

TODO: "getAll" type of operator to expand/reduce/map paginated results with a cursor/token

## Features

| Name                | Type       | Description                                 |
|:--------------------|:-----------|:--------------------------------------------|
| `createRequest`     | `function` | Creates an HTTP request from an AWS command |
| `createRequestWith` | `operator` | Creates an HTTP request from an AWS command |
| `sendCommand`       | `function` | Sends an AWS command                        |
| `sendCommandWith`   | `operator` | Sends an AWS command                        |

## Usage

### Create a Request

Create an observable that maps a command to an HTTP request.

```typescript
import { GetObjectCommand, S3Client } from '@aws-sdk/client-s3';
import { createRequest } from '@komore/integration/aws';

const s3Client = new S3Client({});
const command = new GetObjectCommand({ /* parameters */ });
const request$ = createRequest(command, s3Client);
```

### Create a Request With

Merge map emitted commands to HTTP requests.

```typescript
import { GetObjectCommand, S3Client } from '@aws-sdk/client-s3';
import { createRequestWith } from '@komore/integration/aws';

const s3Client = new S3Client({});
const command = new GetObjectCommand({ /* parameters */ });
const request$ = of(command).pipe(
  createRequestWith(s3Client)
);
```

### Send a Command

Create an observable that sends a command.

```typescript
import { GetObjectCommand, S3Client } from '@aws-sdk/client-s3';
import { sendCommand } from '@komore/integration/aws';

const s3Client = new S3Client({});
const command = new GetObjectCommand({ /* parameters */ });
const result$ = sendCommand(command, s3Client);
```

### Send a Command With

Merge map emitted commands to their result.

```typescript
import { GetObjectCommand, S3Client } from '@aws-sdk/client-s3';
import { sendCommand } from '@komore/integration/aws';

const s3Client = new S3Client({});
const command = new GetObjectCommand({ /* parameters */ });
const result$ = of(command).pipe(
  sendCommandWith(s3Client)
);
```
