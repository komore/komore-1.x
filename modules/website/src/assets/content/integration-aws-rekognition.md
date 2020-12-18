# Amazon Rekognition

TODO.

## Overview

```typescript
import { RekognitionClient } from '@aws-sdk/client-rekognition';
import { withRekognitionClient } from '@komore/integration-aws/rekognition/operators';

message$.pipe(
  withRekognitionClient(new RekognitionClient({})),

);
```

## Client

The Rekognition integration operators require messages with a configured Rekognition client.

```typescript
import { RekognitionClient } from '@aws-sdk/client-rekognition';
import { withRekognitionClient } from '@komore/integration-aws/rekognition/operators';

message$.pipe(
  withRekognitionClient(new RekognitionClient({})),
  withImage({ bucketName: 'bucket', objectKey: 'image.png' }, [
    detectFaces({ attributes: ['ALL'] }),
    detectLabels({ maxLabels: 4, minConfidence: 50 }),
    detectText()
  ])
);
```

## Low-level Commands

| Function       | API                                                                                     |
|:---------------|:----------------------------------------------------------------------------------------|
| `detectLabels` | [DetectLabels](https://docs.aws.amazon.com/rekognition/latest/dg/API_DetectLabels.html) |
| `detectText`   | [DetectText](https://docs.aws.amazon.com/rekognition/latest/dg/API_DetectText.html)     |
