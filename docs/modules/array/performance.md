# Array Performance

The `@komore/array` module offers functions that are optimized for readability and safety.

There mmay be a performance cost: due to their immutability, seemingly simple array operations may have unexpected CPU
and/or memory requirements.

## Summary

| Function          | komore | Optimized | Difference |
| :---------------- | :----- | :-------- | :--------- |
| [`arrayToString`] | TODO   | TODO      | TODO       |
| [`fromRange`]     | TODO   | TODO      | TODO       |
| [`fromRepeated`]  | TODO   | TODO      | TODO       |
| [`toSlice`]       | TODO   | TODO      | TODO       |
| [`toSlices`]      | TODO   | TODO      | TODO       |

## Details

### `arrayToString`

```ts
import { arrayToString, fromRange } from '@komore/array';

// komore
const array = fromRange(0, S);
for (let i = 0; i !== N; ++i) {
  arrayToString(array, ',');
}

// Optimized
```

|   `S` |       `N` | komore | optimized | difference |
| ----: | --------: | :----- | :-------- | :--------- |
|    10 |         1 | TODO   | TODO      | TODO       |
|    10 |        10 | TODO   | TODO      | TODO       |
|    10 |       100 | TODO   | TODO      | TODO       |
|    10 |     1 000 | TODO   | TODO      | TODO       |
|    10 | 1 000 000 | TODO   | TODO      | TODO       |
| 1 000 |         1 | TODO   | TODO      | TODO       |
| 1 000 |        10 | TODO   | TODO      | TODO       |
| 1 000 |       100 | TODO   | TODO      | TODO       |
| 1 000 |     1 000 | TODO   | TODO      | TODO       |
| 1 000 | 1 000 000 | TODO   | TODO      | TODO       |

### `fromRange`

```ts
import { fromRange } from '@komore/array';
```

|     Calls | komore | Optimized | Difference |
| --------: | :----- | :-------- | :--------- |
|        10 | TODO   | TODO      | TODO       |
|       100 | TODO   | TODO      | TODO       |
|     1 000 | TODO   | TODO      | TODO       |
| 1 000 000 | TODO   | TODO      | TODO       |

### `fromRepeated`

### `toSlice`

### `toSlices`

[`arraytostring`]: #arraytostring
[`fromrange`]: #fromrange
[`fromrepeated`]: #fromrepeated
[`toslice`]: #toslice
[`toslices`]: #toslices
