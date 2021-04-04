// TODO: remove once TypeScript update brings those definitions

export type NumberFormatOptionsNotation = 'standard' | 'scientific' | 'engineering' | 'standard';

export type NumberFormatOptionsNumberingSystem =
  | 'arab'
  | 'arabext'
  | 'bali'
  | 'beng'
  | 'deva'
  | 'fullwide'
  | 'gujr'
  | 'guru'
  | 'hanidec'
  | 'khmr'
  | 'knda'
  | 'laoo'
  | 'latn'
  | 'limb'
  | 'mlym'
  | 'mong'
  | 'mymr'
  | 'orya'
  | 'tamldec'
  | 'telu'
  | 'thai'
  | 'tibt';

export type NumberFormatOptionsSignDisplay = 'auto' | 'never' | 'always' | 'exceptZero';

export type NumberFormatOptionsUnitComponent =
  | 'acre'
  | 'bit'
  | 'byte'
  | 'celsius'
  | 'centimeter'
  | 'day'
  | 'degree'
  | 'fahrenheit'
  | 'fluid-ounce'
  | 'foot'
  | 'gallon'
  | 'gigabit'
  | 'gigabyte'
  | 'gram'
  | 'hectare'
  | 'hour'
  | 'inch'
  | 'kilobit'
  | 'kilobyte'
  | 'kilogram'
  | 'kilometer'
  | 'liter'
  | 'megabit'
  | 'megabyte'
  | 'meter'
  | 'mile'
  | 'mile-scandinavian'
  | 'milliliter'
  | 'millimeter'
  | 'millisecond'
  | 'minute'
  | 'month'
  | 'ounce'
  | 'percent'
  | 'petabyte'
  | 'pound'
  | 'second'
  | 'stone'
  | 'terabit'
  | 'terabyte'
  | 'week'
  | 'yard'
  | 'year';

export type NumberFormatOptionsUnit =
  | NumberFormatOptionsUnitComponent
  | `${NumberFormatOptionsUnitComponent}-per-${NumberFormatOptionsUnitComponent}`;

export type NumberFormatOptionsUnitDisplay = 'long' | 'short' | 'narrow';

export type DateTimeFormatOptionsDateStyle = 'full' | 'long' | 'medium' | 'short';

export type DateTimeFormatOptionsTimeStyle = 'full' | 'long' | 'medium' | 'short';

declare global {
  declare namespace Intl {
    interface DateTimeFormatOptions {
      dateStyle?: DateTimeFormatOptionsDateStyle;
      timeStyle?: DateTimeFormatOptionsTimeStyle;
    }

    interface NumberFormatOptions {
      notation?: NumberFormatOptionsNotation;
      numberingSystem?: NumberFormatOptionsNumberingSystem;
      signDisplay?: NumberFormatOptionsSignDisplay;
      unit?: NumberFormatOptionsUnit;
      unitDisplay?: NumberFormatOptionsUnitDisplay;
    }
  }
}
