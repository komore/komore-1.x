/**
 * Trusted type policy for komore element templates
 */
const trustedTypePolicy = window.trustedTypes?.createPolicy('komore-element-template', {
  createHTML: content => content
});

/**
 * Builds a template element
 * @param templateContent Content string
 * @returns Template element
 */
function buildTemplateElement(templateContent: string): HTMLTemplateElement {
  const templateElement = document.createElement('template');

  if (trustedTypePolicy) {
    const trustedTemplateContent = trustedTypePolicy.createHTML(templateContent);
    // TODO: remove casts once innerHTML type is updated
    templateElement.innerHTML = trustedTemplateContent as any as string;
  } else {
    templateElement.innerHTML = templateContent;
  }

  return templateElement;
}
