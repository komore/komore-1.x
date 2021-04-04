# Element Localization Operators

Operators for [element localization] are exported by the `@komore/element/l10n/operators` package.

## Date and time

### Localize a date

`localizeDate()` creates an operator function that localizes emitted `Date` values:

```ts
import { localizeDate } from '@komore/element/l10n/operators';

$.pipe(
  localizeDate(options, locales)
)
```

### Localize a time

### Localize a date & time

## Numbers

### Localize a currency

`localizeCurrency()` creates an operator function that turns emitted `number` values into localized currency strings.

```ts
import { localizeCurrency } from '@komore/element/l10n/operators';

$.pipe(
  localizeCurrency(options, currency, locales)
);
```

| Parameters       | Description                                                                                                |
| :--------------- | :--------------------------------------------------------------------------------------------------------- |
| `options.format` | Currency-specific formatting options from [`Intl.NumberFormatOptions`].<br>Defaults to the implementation. |
| `currency`       | Currency or observable currency.<br>Defaults to [`DEFAULT_CURRENCY`].                                      |
| `locales`        | List or observable list of locales.<br>Defaults to [`DEFAULT_LOCALES`].                                    |

### Localize a percentage

`localizePercentage()` creates an operator function that turns emitted `number` values into localized percentage
strings.

```ts
import { localizePercentage } from '@komore/element/l10n/operators';

$.pipe(
  localizePercentage(options, locales)
);
```

| Parameters       | Description                                                                                                  |
| :--------------- | :----------------------------------------------------------------------------------------------------------- |
| `options.format` | Percentage-specific formatting options from [`Intl.NumberFormatOptions`].<br>Defaults to the implementation. |
| `locales`        | List or observable list of locales.<br>Defaults to [`DEFAULT_LOCALES`].                                      |

### Localize a unit

`localizeUnit()` creates an operator function that turns emitted `number` values into localized unit strings:

```ts
import { localizeUnit } from '@komore/element/l10n/operators';

$.pipe(
  localizeUnit(options, locales)
);
```

| Parameters       | Description                                                                                            |
| :--------------- | :----------------------------------------------------------------------------------------------------- |
| `options.format` | Unit-specific formatting options from [`Intl.NumberFormatOptions`].<br>Defaults to the implementation. |
| `locales`        | List or observable list of locales.<br>Defaults to [`DEFAULT_LOCALES`].                                |

The `options.format.unit` property can be one of the [supported units] from the [Unicode locale data markup language].

The unit can also be compound unit composed of two units separated by `-per-`, e.g. `kilometer-per-hour`.

[`default_currency`]: ./element-l10n.md#default-currency
[`default_locales`]: ./element-l10n.md#default-locales
[supported units]: https://tc39.es/proposal-unified-intl-numberformat/section6/locales-currencies-tz_proposed_out.html#sec-issanctionedsimpleunitidentifier
[unicode locale data markup language]: http://unicode.org/reports/tr35/tr35-general.html#Unit_Elements
