import { type Observable, Subject } from '@komore/reactive';
import { visitEachChild, type Node, type SourceFile, type TransformerFactory, type Visitor } from 'typescript';
import { type ObservableTransformerFactory } from './observable-transformer-factory';

/**
 * Creates an observable transformer factory
 */
export function createObservableTransformerFactory<T, NodeType extends Node>(
  condition: (node: Node) => node is NodeType,
  project: (observable: Observable<NodeType>) => Observable<T>
): ObservableTransformerFactory<T> {
  const factory: TransformerFactory<SourceFile> = transformationContext => {
    const subject = new Subject<NodeType>();
    const observable = project(subject.asObservable());
    const visitor: Visitor = {};

    return node => visitEachChild(node, visitor, transformationContext);
  };
}
