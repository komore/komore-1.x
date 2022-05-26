import { map, mapTo, mergeMap, tap } from 'rxjs';
import { createGenerator } from '../create-generator';
import { libraryProjectConfigurationTo } from './library-project-configuration-to';
import { type LibrarySchema } from './library-schema';
import { toLibraryOptions } from './to-library-options';

/**
 * Library generator
 */
export default createGenerator<LibrarySchema>(
  tree => librarySchema$ =>
    librarySchema$.pipe(
      map(toLibraryOptions(tree)),
      tap(libraryProjectConfigurationTo(tree)),
      //mergeMap(),
      mapTo(void 0)
    )
);

/*

  addLibraryFiles(tree, options);
*/
