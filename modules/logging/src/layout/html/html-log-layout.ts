import { createLogLayout } from '../create-log-layout';
import { type LogLayout } from '../log-layout';
import { type HtmlLogLayoutOptions } from './html-log-layout-options';

/**
 * Creates an HTML log layout
 *
 * The HTML log layout creates an HTML document that holds the
 *
 * @param layoutOptions HTML log layout options
 * @returns HTML log layout
 */
export function htmlLogLayout(layoutOptions: HtmlLogLayoutOptions): LogLayout {
  const { title } = layoutOptions;
  const newLine = '\r\n';
  return createLogLayout({
    buildLogHeader: () =>
      [
        '<!DOCTYPE html>',
        '<html>',
        '<head>',
        `<title>${title}</title>`,
        '</head>',
        '<body>',
        '<main>',
        `<h1>${title}</h1>`,
        '<table>',
        '<thead>',
        '<tr>',
        ...['<th>TODO</th>'],
        '</tr>',
        '</thead>',
        '<tbody>',
      ].join(newLine),
    buildLogFooter: () =>
      [
        '</tbody>',
        '</table>',
        '</main>',
        '<footer>',
        'TODO: total number of log messages? session end time?',
        '</footer>',
        '</body>',
        '</html>',
      ].join(newLine),
    mediaType: 'text/html',
  })(logEventRecord => {
    return `<tr><td>${JSON.stringify(logEventRecord, undefined, 2)}</td></tr>`;
  });
}
