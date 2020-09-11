import { OperatorFunction } from 'rxjs';
import { Function } from './function';
import { Message } from './message';

/**
 * Pipeable function
 * @template M Message type
 * @template R Result type
 */
export interface PipeableFunction<UM, M extends Message<any, any>[], R> extends Function<M, R> {
  pipe(op1: OperatorFunction<M, R>): this;
  // TODO: avoid all the overloads with TypeScript 4.x's variadic tuples
  pipe<A>(op1: OperatorFunction<M, A>, op2: OperatorFunction<A, R>): this;
  pipe<A, B>(op1: OperatorFunction<M, A>, op2: OperatorFunction<A, B>, op3: OperatorFunction<B, R>): this;
  pipe<A, B, C>(
    op1: OperatorFunction<M, A>,
    op2: OperatorFunction<A, B>,
    op3: OperatorFunction<B, C>,
    op4: OperatorFunction<C, R>
  ): this;
  pipe<A, B, C, D>(
    op1: OperatorFunction<M, A>,
    op2: OperatorFunction<A, B>,
    op3: OperatorFunction<B, C>,
    op4: OperatorFunction<C, D>,
    op5: OperatorFunction<D, R>
  ): this;
  pipe<A, B, C, D, E>(
    op1: OperatorFunction<M, A>,
    op2: OperatorFunction<A, B>,
    op3: OperatorFunction<B, C>,
    op4: OperatorFunction<C, D>,
    op5: OperatorFunction<D, E>,
    op6: OperatorFunction<E, R>
  ): this;
  pipe<A, B, C, D, E, F>(
    op1: OperatorFunction<M, A>,
    op2: OperatorFunction<A, B>,
    op3: OperatorFunction<B, C>,
    op4: OperatorFunction<C, D>,
    op5: OperatorFunction<D, E>,
    op6: OperatorFunction<E, F>,
    op7: OperatorFunction<F, R>
  ): this;
  pipe<A, B, C, D, E, F, G>(
    op1: OperatorFunction<M, A>,
    op2: OperatorFunction<A, B>,
    op3: OperatorFunction<B, C>,
    op4: OperatorFunction<C, D>,
    op5: OperatorFunction<D, E>,
    op6: OperatorFunction<E, F>,
    op7: OperatorFunction<F, G>,
    op8: OperatorFunction<G, R>
  ): this;
  pipe<A, B, C, D, E, F, G, H>(
    op1: OperatorFunction<M, A>,
    op2: OperatorFunction<A, B>,
    op3: OperatorFunction<B, C>,
    op4: OperatorFunction<C, D>,
    op5: OperatorFunction<D, E>,
    op6: OperatorFunction<E, F>,
    op7: OperatorFunction<F, G>,
    op8: OperatorFunction<G, H>,
    op9: OperatorFunction<H, R>
  ): this;
  pipe<A, B, C, D, E, F, G, H, I>(
    op1: OperatorFunction<M, A>,
    op2: OperatorFunction<A, B>,
    op3: OperatorFunction<B, C>,
    op4: OperatorFunction<C, D>,
    op5: OperatorFunction<D, E>,
    op6: OperatorFunction<E, F>,
    op7: OperatorFunction<F, G>,
    op8: OperatorFunction<G, H>,
    op9: OperatorFunction<H, I>,
    ...operations: OperatorFunction<any, any>[]
  ): this;
}
