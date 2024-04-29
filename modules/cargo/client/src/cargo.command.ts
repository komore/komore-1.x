import { cargoDomain } from '@komore/cargo';
import { commandProperties, createCommandType } from '@komore/command';
import { type UrlString } from '@komore/url';

/**
 * Cargo command
 */
export const cargoCommand = createCommandType(cargoDomain, {
  /**
   * Builds and installs a Rust binary
   *
   * @see {@link https://doc.rust-lang.org/cargo/commands/cargo-install.html cargo-install(1)}
   */
  install: commandProperties<
    | {
        crate: string; // TODO: branded type
      }
    | {
        path: string;
        crate: string; // TODO: branded type
      }
    | {
        git: UrlString;
      }
  >(),
});
