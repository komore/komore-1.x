import { type MediaType } from '../../media/media-type';

/**
 * Media type with an optional weight
 */
export interface WeightedMediaType {
  /**
   * Media type
   */
  readonly mediaType: MediaType;
  /**
   * Weighted quality
   */
  readonly weight?: number;
}
