import { ReplaySubject } from '@komore/reactive';
import { TerraformStack } from 'cdktf';
import { type Construct } from 'constructs';
import { type GenericScope } from './scope/generic-scope';

/**
 * Stack
 */
export class Stack extends TerraformStack {
  private readonly scope = new ReplaySubject<GenericScope>(1);

  readonly scope$ = this.scope.asObservable();

  /**
   * Class constructor
   * @param construct Construct
   * @param id Identifier
   */
  constructor(construct: Construct, id: string) {
    super(construct, id);
    this.scope.next({
      construct: this,
      dataSources: {},
      locals: {},
      modules: {},
      outputs: {},
      providers: {},
      resources: {},
      variables: {}
    });
  }
}
