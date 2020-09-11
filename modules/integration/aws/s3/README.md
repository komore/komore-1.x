# komore AWS S3 Integration

## Features

| Name                   | Type       | Description                      |
|:-----------------------|:-----------|:---------------------------------|
| `getObject`            | `function` | Gets an object from an S3 bucket |
| `getObjectWith`        | `operator` | Gets an object from an S3 bucket |
| `listObjects`          | `function` | Lists objects in an S3 bucket    |
| `listObjectsWith`      | `operator` | Lists objects in an S3 bucket    |
| `preSignS3Request`     | `function` | Pre-signs an S3 HTTP request     |
| `preSignS3RequestWith` | `operator` | Pre-signs an S3 HTTP request     |
| `putObject`            | `function` | Puts an object to an S3 bucket   |
| `putObjectWith`        | `operator` | Puts an object to an S3 bucket   |

## Usage

### Create a Request

The following example creates an HTTP request from an S3 Get-Object command.

```typescript
import { S3Client, GetObjectCommand } from '@aws-sdk/client-s3';

const s3Client = new S3Client({});
const command = new GetObjectCommand({ /* parameters */ });
const request$ = createRequest(command, s3Client);
```

### Create a Request With

The following example merge maps S3 Get-Object commands to HTTP requests, using the provided client.

```typescript
import { S3Client, GetObjectCommand } from '@aws-sdk/client-s3';

const s3Client = new S3Client({});
const command = new GetObjectCommand({ /* parameters */ });

const request$ = of(command).pipe(
  createRequestWith(s3Client)
);
```
