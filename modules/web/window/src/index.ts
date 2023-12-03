export { currentScreen } from './screen/current-screen';
export { screenDetails } from './screen/screen-details';
export { screenDetailsToCurrentScreen } from './screen/screen-details-to-current-screen';
export { screenDetailsToScreens } from './screen/screen-details-to-screens';
export { screens } from './screen/screens';

// TODO: remove once available in DOM types
declare global {
  interface Screen {
    readonly isExtended: boolean;
  }

  interface Window {
    getScreenDetails(): Promise<ScreenDetails>;
  }

  interface ScreenDetailed extends Screen {
    readonly devicePixelRatio: number;
    readonly isInternal: boolean;
    readonly isPrimary: boolean;
    readonly label: string;
    readonly left: number;
    readonly top: number;
  }

  interface ScreenDetails {
    readonly currentScreen: ScreenDetailed;
    oncurrentscreenchange?: ((event: unknown) => void) | undefined;
    onscreenschange?: ((event: unknown) => void) | undefined;
    readonly screens: ReadonlyArray<ScreenDetailed>;
  }
}
