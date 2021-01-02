// TODO: remove once type definitions are up-to-date

declare global {
  interface CSSStyleSheet {
    replace(text: string): Promise<void>;
  }
}

export {};
