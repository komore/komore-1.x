import { assert } from '@komore/runtime';
import { type PickCallSignature } from '@komore/typescript';

import { type LogLayout } from '../log-layout';
import { type PatternLogLayoutOptions } from './pattern-log-layout-options';
import { createLogLayout } from '../create-log-layout';

/**
 * Creates a pattern log layout
 *
 * @param layoutOptions Pattern log layout options
 * @returns Pattern log encoder
 */
export function patternLogLayout(layoutOptions: PatternLogLayoutOptions): LogLayout {
  const patternTokens = tokenizePatternLayout(layoutOptions);
  return createLogLayout({ mediaType: 'text/plain' })(logEventRecord =>
    patternTokens.map(patternToken => patternToken(logEventRecord)).join('')
  );
}

function tokenizePatternLayout(layoutOptions: PatternLogLayoutOptions): ReadonlyArray<PickCallSignature<LogLayout>> {
  const { pattern } = layoutOptions;
  const matches = pattern.match(/([^%]+)|(%[\w{}]+)/g);
  assert(matches, 'the pattern encoder string can be parsed');
  return matches.map(token =>
    token.charAt(0) === '%' ? encoderFromToken(token.substring(1), layoutOptions) : constantToken(token)
  );
}

function encoderFromToken(name: string, layoutOptions: PatternLogLayoutOptions): PickCallSignature<LogLayout> {
  switch (name) {
    case 'date':
      return dateToken(layoutOptions.dateTimeFormat);
    case 'domain':
      return domainToken();
    case 'message':
      return messageToken();
    case 'name':
      return nameToken();
    case 'severity':
      return severityToken();
    default:
      return layoutFromParameterizedToken(name);
  }
}

function layoutFromParameterizedToken(parameterizedToken: string): PickCallSignature<LogLayout> {
  const matches = parameterizedToken.match(/([^{]+){([^}]+)}/);
  assert(matches, `invalid pattern encoder token %${parameterizedToken}`);
  const [, name, parameters] = matches as [string, string, string];
  switch (name) {
    case 'property':
      return propertyToken(parameters);
    case 'context':
      return contextToken(parameters);
    default:
      throw new Error(`unknown pattern encoder token %${name}`);
  }
}

function constantToken(constant: string): PickCallSignature<LogLayout> {
  return () => constant;
}

function contextToken(contextName: string): PickCallSignature<LogLayout> {
  return ({ context }) => `${context[contextName]}`;
}

function dateToken(dateTimeFormat?: Intl.DateTimeFormat): PickCallSignature<LogLayout> {
  // TODO: remove cast
  return ({ timestamp }) => dateTimeFormat?.format(timestamp as unknown as Date) ?? timestamp.toString();
}

function domainToken(): PickCallSignature<LogLayout> {
  return ({ event }) => event.domain.name;
}

function messageToken(): PickCallSignature<LogLayout> {
  return ({ message }) => message;
}

function nameToken(): PickCallSignature<LogLayout> {
  return ({ event }) => `${event.name}`;
}

function propertyToken(propertyName: string): PickCallSignature<LogLayout> {
  return ({ event }) => `${event.parameters[propertyName]}`;
}

function severityToken(): PickCallSignature<LogLayout> {
  return ({ event }) => `${event.severity}`;
}
