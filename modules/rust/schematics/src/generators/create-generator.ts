import { firstValueFrom, of, take } from 'rxjs';

/**
 * Creates a generator
 * @param generatorFactory Generator factory function
 * @returns Generator
 */
export function createGenerator<SchemaType>(
  generatorFactory: (tree: Tree) => (schema$: Observable<SchemaType>) => Observable<void | GeneratorCallback>
): Generator<SchemaType> {
  return async (tree: Tree, schema: SchemaType) => {
    const schema$ = of(schema);
    const generator = generatorFactory(tree);
    const generator$ = generator(schema$).pipe(take(1));
    await firstValueFrom(generator$);
  };
}
