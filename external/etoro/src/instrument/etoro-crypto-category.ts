import { EToroCryptoCategoryId } from './etoro-crypto-category-id';

/**
 * eToro crypto category
 */
export interface EToroCryptoCategory {
  /**
   * Crypto description
   */
  readonly CryptoCategoryDescription: string;
  /**
   * Category identifier
   */
  readonly CryptoCategoryID: EToroCryptoCategoryId;
  /**
   * Category name
   */
  readonly CryptoCategoryName: string;
}
