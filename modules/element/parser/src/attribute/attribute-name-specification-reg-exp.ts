/**
 * Attribute name specification regular expression
 * - attribute-name
 * - optional ? symbol
 * - optional :-prefixed type
 */
export const attributeNameSpecificationRegExp = /^([^?:@^.#]+)(\??)(:.*)?$/;
