import { createDirective } from '@komore/element/directive';
import { fromEvent } from '@komore/reactive';
import { map, switchMap, switchMapTo, tapValue } from '@komore/reactive/operators';

// TODO: lib.dom.d.ts update @ https://github.com/microsoft/TypeScript/blob/master/lib/lib.dom.d.ts
declare global {
  interface CSSStyleDeclaration {
    insetBlockStart: string;
    insetInlineStart: string;
  }
}

/**
 * Copy to clipboard directive
 */
export const copyToClipboard = createDirective<Element, string>(({ element, parameters }) =>
  element.pipe(
    tapValue(() => console.log('arite??')),
    switchMap(element => fromEvent<MouseEvent>(element, 'click')),
    tapValue(() => console.log('arite2??')),
    switchMapTo(parameters),
    tapValue(() => console.log('arite3??')),
    map(prepareCopy),
    tapValue(() => console.log('arite4??')),
    tapValue(executeCopy),
    tapValue(() => console.log('arite5??')),
    map(cleanupCopy)
  )
);

/**
 * Stream value
 */
interface StreamValue {
  textArea: HTMLTextAreaElement;
  activeElement?: HTMLOrSVGElement;
}

/**
 * Prepares a copy, creating a hidden textarea element and saving the currently active element, if any
 * @param text Text to copy
 * @returns Stream value
 */
function prepareCopy(text: string): StreamValue {
  const activeElement = (document.activeElement ?? undefined) as HTMLOrSVGElement | undefined;
  const textArea = document.createElement('textarea');
  const style = textArea.style;

  style.position = 'fixed';
  style.insetBlockStart = '0';
  style.insetInlineStart = '-999em';
  style.opacity = '0';

  textArea.setAttribute('aria-hidden', 'true');
  textArea.value = text;

  document.body.appendChild(textArea);

  return {
    textArea,
    activeElement
  };
}

/**
 * Executes a copy
 * @param textArea Text area element
 */
function executeCopy({ textArea }: StreamValue): void {
  textArea.select();
  textArea.setSelectionRange(0, textArea.value.length);
  const result = document.execCommand('copy');
  console.log('copy command result', result);
}

/**
 * Performs cleanup on the
 * @param param0
 */
function cleanupCopy({ textArea, activeElement }: StreamValue): void {
  if (activeElement !== undefined) {
    activeElement.focus();
  }

  textArea.remove();
}
