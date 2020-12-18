# komore Layer - Text

Text analysis layer for [komore].

## Compatibility

| Feature               | Description                                    | AWS | Azure | GCP |
| :-------------------- | :--------------------------------------------- | :-- | :---- | :-- |
| [Language detection]  | Analyze which language the text is written in. |     |       |     |
| [Sentiment detection] | Analyze which sentiment the text contains.     |     |       |     |

## Install

The `@komore/layer-text` module can be installed via Npm or Yarn:

```shell
npm install @komore/layer-text --save
```

```shell
yarn add @komore/layer-text
```

[komore]: https://komore.dev
[language detection]: ./src/detect-language.ts
[sentiment detection]: ./src/detect-sentiment.ts
