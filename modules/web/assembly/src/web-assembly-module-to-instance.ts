import { deferPromise, map, type Observable } from '@komore/reactive';
import { type ReadonlyRecord } from '@komore/typescript';

/**
 * Creates a function that instantiates a WebAssembly source from a buffer or from a module
 * @param moduleImports Module imports
 * @returns Function that instantiates a WebAssembly source from a buffer or from a module
 */
export function webAssemblyModuleToInstance(
  moduleImports?: ReadonlyRecord<string, WebAssembly.ModuleImports>
): (bytesOrModule: BufferSource | WebAssembly.Module) => Observable<WebAssembly.Instance> {
  return bytesOrModule => {
    if (bytesOrModule instanceof WebAssembly.Module) {
      const module = bytesOrModule;
      return deferPromise(() => WebAssembly.instantiate(module, moduleImports));
    } else {
      const bytes = bytesOrModule;
      return deferPromise(() => WebAssembly.instantiate(bytes, moduleImports)).pipe(map(source => source.instance));
    }
  };
}
