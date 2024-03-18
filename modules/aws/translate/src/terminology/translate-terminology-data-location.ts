import { type UrlString } from '@komore/url';

/**
 * Translate terminology data location
 *
 * @see {@link https://docs.aws.amazon.com/translate/latest/APIReference/API_TerminologyDataLocation.html TerminlogyDataLocation}
 */
export interface TranslateTerminologyDataLocation {
  /**
   * Location of the most recent custom terminlogy input file
   */
  readonly Location: UrlString; // TODO: typed? (PreSignedUrlString)
  /**
   * Repository type
   */
  readonly RepositoryType: string;
}
