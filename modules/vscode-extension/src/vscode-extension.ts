/**
 * komore Visual Studio Code extension
 */
export class KomoreExtension {
  async activate(): Promise<void> {
    /*let webviewPanel: WebviewPanel | undefined = window.createWebviewPanel(
      'komore-console',
      'komore Console Yay',
      ViewColumn.Active,
      {
        retainContextWhenHidden: true,
        enableScripts: true,
      }
    );
    webviewPanel.onDidDispose(() => {
      webviewPanel = undefined;
    });
    webviewPanel.iconPath = this.fileLocator.getIconUri('activitybar-icon.svg');
    webviewPanel.webview.html = `
      <html>
        <head>
          <title>Weeee</title>
        </head>
        <body>
          Hello world!!<br>
          It's alive!
        </body>
      </html>
    `;

    this.extensionContext.subscriptions.push(webviewPanel);

    window.createTreeView('komore-help-tree', {
      treeDataProvider: this.helpTreeProvider,
      showCollapseAll: true,
    });
    window.createTreeView('komore-stack-tree', {
      treeDataProvider: this.stackTreeProvider,
      showCollapseAll: true,
    });*/
  }
}
