import { Store } from './element-store';


export type ElementSelector<State, Result> = (state: State) => Result;


export interface MemoizedElementSelector<State, Result, ProjectorFunction> extends ElementSelector<State, Result> {
    readonly projector: ProjectorFunction;

    release(): void;
    setResult(result?: Result): void;
    clearResult(): void;
}

export function createSelector<T extends any[]>(input: T) {

}
