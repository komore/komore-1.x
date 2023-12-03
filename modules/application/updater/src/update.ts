/**
 * Update
 *
 * @template DataType
 */
export interface Update<DataType = undefined> {
  readonly hash: string;
  readonly data: DataType;
}
