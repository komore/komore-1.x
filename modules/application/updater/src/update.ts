/**
 * Update
 * @template DataType
 */
export type Update<DataType = undefined> = Readonly<{
  hash: string;
  data: DataType;
}>;
