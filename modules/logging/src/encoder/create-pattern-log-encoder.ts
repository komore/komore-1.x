import { assert } from '@komore/runtime';
import { temporalToJavaScriptDate } from '@komore/temporal/compatibility';

import { type LogEncoder } from './log-encoder';
import { type PatternLogEncoderOptions } from './pattern-log-encoder-options';

/**
 * Creates a pattern log encoder
 *
 * @param pattern Pattern
 * @param options Pattern encoder options
 * @returns Pattern log encoder
 */
export function createPatternLogEncoder(pattern: string, options?: PatternLogEncoderOptions): LogEncoder {
  const patternTokens = tokenizePatternEncoder(pattern, options);
  // TODO: use replace
  return logEventRecord => patternTokens.map(patternToken => patternToken(logEventRecord)).join('');
}

function tokenizePatternEncoder(pattern: string, options?: PatternLogEncoderOptions): ReadonlyArray<LogEncoder> {
  const matches = pattern.match(/([^%]+)|(%[\w{}]+)/g);
  assert(matches, 'the pattern encoder string can be parsed');
  return matches.map(token =>
    token.charAt(0) === '%' ? encoderFromToken(token.substr(1), options) : constantToken(token)
  );
}

function encoderFromToken(name: string, options?: PatternLogEncoderOptions): LogEncoder {
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
      return encoderFromParameterizedToken(name);
  }
}

function encoderFromParameterizedToken(parameterizedToken: string): LogEncoder {
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

function constantToken(constant: string): LogEncoder {
  return () => constant;
}

function contextToken(contextName: string): LogEncoder {
  return ({ logContext }) => `${logContext[contextName]}`;
}

function dateToken(dateOptions?: PatternLogEncoderOptions['date']): LogEncoder {
  const dateTimeFormat =
    dateOptions !== undefined ? new Intl.DateTimeFormat(dateOptions?.locales, dateOptions?.options) : undefined;
  // TODO: remove temporal mapping when no longer necessary
  return ({ timestamp }) => dateTimeFormat?.format(temporalToJavaScriptDate(timestamp)) ?? timestamp.toString();
}

function groupToken(): LogEncoder {
  return ({ logEvent }) => logEvent.group.name;
}

function idToken(): LogEncoder {
  return ({ logEvent }) => `${logEvent.id}`;
}

function messageToken(): LogEncoder {
  return ({ message }) => message;
}

function propertyToken(propertyName: string): LogEncoder {
  return ({ logEvent }) => `${logEvent.properties[propertyName]}`;
}

function severityToken(): LogEncoder {
  return ({ logEvent }) => `${logEvent.severity}`;
}
