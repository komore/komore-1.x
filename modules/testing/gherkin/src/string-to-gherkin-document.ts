import { generateMessages } from '@cucumber/gherkin';
import { IdGenerator, SourceMediaType, type GherkinDocument } from '@cucumber/messages';
import { isDefined } from '@komore/functional';
import { InvalidGherkinDataError } from './invalid-gherkin-data-error';

/**
 * Creates a function that turns a string with Gherkin syntax into a Gherkin document
 *
 * @param uri URI
 * @returns Function that turns a string with Gherkin syntax into a Gherkin document
 */
export function stringToGherkinDocument(uri: string): (data: string) => GherkinDocument {
  return data => {
    try {
      const mediaType = SourceMediaType.TEXT_X_CUCUMBER_GHERKIN_PLAIN;
      const envelopes = generateMessages(data, uri, mediaType, {
        includeGherkinDocument: true,
        includePickles: true,
        newId: IdGenerator.incrementing(),
      });
      const documents = envelopes.map(envelope => envelope.gherkinDocument).filter(isDefined);
      if (documents.length === 0) {
        throw new InvalidGherkinDataError('No document could be generated from the source data', data);
      }

      return documents[0];
    } catch (e) {
      console.log('oopsie daisy', e);
      throw e;
    }
  };
}
