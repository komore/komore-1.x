/**
 * Value with attributes
 */
export type ValueWithAttributes<AttributeNames extends string[]> = Readonly<{
  attributes: Readonly<{
    [K in AttributeNames[number]]: string;
  }>;
}>;
