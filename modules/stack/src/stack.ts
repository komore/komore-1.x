import { ReplaySubject } from '@komore/reactive';
import { type App, TerraformStack } from 'cdktf';
import { type EmptyScope } from './scope/empty-scope';

/**
 * Stack
 */
export class Stack extends TerraformStack {
  private readonly scope = new ReplaySubject<EmptyScope>(1);

  readonly scope$ = this.scope.asObservable();
  readonly app: App;

  /**
   * Class constructor
   * @param app Terraform application
   * @param id Identifier
   */
  constructor(app: App, id: string) {
    super(app, id);
    this.app = app;
    this.scope.next({
      construct: this,
      dataSources: {},
      locals: {},
      modules: {},
      outputs: {},
      providers: {},
      resources: {},
      variables: {},
    });
  }
}
