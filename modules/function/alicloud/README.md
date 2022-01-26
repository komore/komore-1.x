# komore Function - Alibaba Cloud Function

Support for the [Alicloud Function] execution environment.

[Official documentation]

## Install

```shell
npm install @komore/function-alicloud
```

or

```shell
yarn add @komore/function-alicloud
```

## Usage

The provider is passed via the function configuration:

```typescript
import { alicloudFunctionProvider } from '@komore/function-alicloud';

export const exampleFunction = createFunction({
  providers: [alicloudFunctionProvider()]
});
```

[alicloud function]: https://azure.microsoft.com/en-us/services/functions/
[official documentation]: https://www.alibabacloud.com/product/function-compute
