import { assert } from '@komore/runtime';
import type { Layout } from './layout';
import type { PatternLayoutOptions } from './pattern-layout-options';

/**
 * Creates a pattern layout
 * @param pattern Pattern
 * @param options Pattern layout options
 * @returns Layout
 */
export function createPatternLayout(pattern: string, options?: PatternLayoutOptions): Layout {
  const patternTokens = tokenizePatternLayout(pattern, options);
  return logEventRecord => patternTokens.map(patternToken => patternToken(logEventRecord)).join('');
}

function tokenizePatternLayout(pattern: string, options?: PatternLayoutOptions): ReadonlyArray<Layout> {
  const matches = pattern.match(/([^%]+)|(%[\w{}]+)/g);
  assert(matches, 'the pattern layout string can be parsed');
  return matches.map(token =>
    token.charAt(0) === '%' ? layoutFromToken(token.substr(1), options) : constantToken(token)
  );
}

function layoutFromToken(name: string, options?: PatternLayoutOptions): Layout {
  switch (name) {
    case 'date':
      return dateToken(options?.date);
    case 'group':
      return groupToken();
    case 'id':
      return idToken();
    case 'message':
      return messageToken();
    case 'severity':
      return severityToken();
    default:
      return layoutFromParameterizedToken(name);
  }
}

function layoutFromParameterizedToken(parameterizedToken: string): Layout {
  const matches = parameterizedToken.match(/([^{]+){([^}]+)}/);
  assert(matches, `invalid pattern layout token %${parameterizedToken}`);
  const name = matches[1];
  const parameters = matches[2];
  switch (name) {
    case 'property':
      return propertyToken(parameters);
    case 'context':
      return contextToken(parameters);
    default:
      throw new Error(`unknown pattern layout token %${name}`);
  }
}

function constantToken(constant: string): Layout {
  return () => constant;
}

function contextToken(contextName: string): Layout {
  return ({ logContext }) => `${logContext[contextName]}`;
}

function dateToken(dateOptions?: PatternLayoutOptions['date']): Layout {
  const dateTimeFormat =
    dateOptions !== undefined ? new Intl.DateTimeFormat(dateOptions?.locales, dateOptions?.options) : undefined;
  return ({ timestamp }) => dateTimeFormat?.format(timestamp) ?? timestamp.toISOString();
}

function groupToken(): Layout {
  return ({ logEvent }) => logEvent.group.name;
}

function idToken(): Layout {
  return ({ logEvent }) => `${logEvent.id}`;
}

function messageToken(): Layout {
  return ({ message }) => message;
}

function propertyToken(propertyName: string): Layout {
  return ({ logEvent }) => `${logEvent.properties[propertyName]}`;
}

function severityToken(): Layout {
  return ({ logEvent }) => `${logEvent.severity}`;
}
