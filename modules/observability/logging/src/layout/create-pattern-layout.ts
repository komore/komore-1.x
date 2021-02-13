import type { Layout } from './layout';
import type { PatternLayoutOptions } from './pattern-layout-options';

/**
 * Creates a pattern layout
 * @param pattern Pattern
 * @param options Pattern layout options
 * @returns Layout
 */
export function createPatternLayout(pattern: string, options?: PatternLayoutOptions): Layout {
  pattern.match(/g/);
  //pattern.match(/%{})
  return logEventRecord => logEventRecord.message;
}

function getTokenLayout(name: string, parameters: string | undefined, options?: PatternLayoutOptions): Layout {
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
    case 'context':
    case 'property':
      if (parameters === undefined) {
        throw new Error(`pattern layout %${name}{name} cannot be used without the name parameter`);
      }

      return name === 'context' ? contextToken(parameters) : propertyToken(parameters);
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
  const dateTimeFormat = new Intl.DateTimeFormat(dateOptions?.locales, dateOptions?.options);
  return ({ timestamp }) => dateTimeFormat.format(timestamp);
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
