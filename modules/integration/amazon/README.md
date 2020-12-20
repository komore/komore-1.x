# komore Integration - AWS

TODO: "getAll" type of operator to expand/reduce/map paginated results with a cursor/token

## Features

| Name                | Type       | Description                                 |
|:--------------------|:-----------|:--------------------------------------------|
| `createRequest`     | `function` | Creates an HTTP request from an AWS command |
| `sendBulkCommand`   | `function` | Sends a bulk AWS command                    |
| `sendCommand`       | `function` | Sends an AWS command                        |

## Usage

### Create a Request

Create an observable that maps a command to an HTTP request.

```typescript
import { GetObjectCommand, S3Client } from '@aws-sdk/client-s3';
import { createRequest } from '@komore/integration-aws';

const s3Client = new S3Client({});
const command = new GetObjectCommand({ /* parameters */ });
const request$ = createRequest(command, s3Client);
```

### Send a Command

Create an observable that sends a command.

```typescript
import { GetObjectCommand, S3Client } from '@aws-sdk/client-s3';
import { sendCommand } from '@komore/integration-aws';

const s3Client = new S3Client({});
const command = new GetObjectCommand({ /* parameters */ });
const result$ = sendCommand(s3Client, command);
```
