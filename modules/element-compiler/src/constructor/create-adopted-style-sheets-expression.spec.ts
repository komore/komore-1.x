import { factory } from 'typescript';
import { createAdoptedStyleSheetsExpression } from './create-adopted-style-sheets-expression';

describe('Create adopted style sheets expression', () => {
  it('creates an adopted style sheet expression', () => {
    given: 'an object and a style sheets identifier';
    const object = 'testObject';
    const objectIdentifier = factory.createIdentifier(object);
    const styleSheets = 'testStyleSheets';
    const styleSheetsIdentifier = factory.createIdentifier(styleSheets);
    when: 'creating an adopted style sheets expression';
    const expression = createAdoptedStyleSheetsExpression(factory, objectIdentifier, styleSheetsIdentifier);
    expect: 'the expression to assign the style sheets to the adoptedStyleSheets property';
    expect(expression).toBeInlineSource(`${object}.adoptedStyleSheets = ${styleSheets};`);
  });
});
