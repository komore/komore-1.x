/**
 * Creates a document fragment
 * @param sourceHtml Source HTML
 * @param sourceDocument Source document
 * @returns Document fragment
 */
export function createDocumentFragment(sourceHtml: string, sourceDocument: Document = document): DocumentFragment {
  const templateElement = sourceDocument.createElement('template');
  templateElement.innerHTML = sourceHtml;
  return templateElement.content;
}
