import { OperatorFunction } from 'rxjs';
import { Message } from './message';
import { PipeableFunction } from './pipeable-function';

/**
 * Pipeable function implementation
 * @typeparam M Message type
 * @typeparam R Result type
 */
export class PipeableFunctionImpl<M extends Message<any, any>, R> implements PipeableFunction<M, R> {

  pipe(...operations: Array<OperatorFunction<any, any>>): Function<M, R> {
    return undefined;
  }

}
