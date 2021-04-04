# Element Localization

Localization, shortened `l10n`, is the process of adapting elements to a locale and culture.

[Internationalization] focuses on a language translation: spelling and grammar.

Localization is meant to adapt numbers, currencies, date and time, phone numbers and other similar - sometimes
non-textual - aspects.

## Locale

The locale impacts how the aforementioned aspects get transformed to a string.

Locales are made up of [languages, script, region and variant subtags].

[Locale negotiation] is used to pick a locale, using one of two possible algorithms: `lookup` or `best fit`.

The algorithm can be chosen via `localeMatcher` formatting options.

### Default locales

The default locales - in practice, the [browser languages] - are available as an observable:

```ts
import { DEFAULT_LOCALES } from '@komore/element/l10n';

DEFAULT_LOCALES.subscribe(locales => {
  console.log('Default locales', locales);
});
```

The [element operators] take an optional `locales` parameter argument. When that argument is not present, the default
locales are used.

[browser languages]: ./element-i18n.md#browser-languages
[element operators]: ./element-l10n-operators.md
[internationalization]: ./element-i18n.md
[languages, script, region and variant subtags]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument
[locale negotiation]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#locale_negotiation
