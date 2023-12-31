import { Options } from 'src/types';
import type { Directive } from 'vue';
import { useGlobalOption } from './useGlobalOption';

type EffectOptions = Options & { key: string };

const startEffect = (el: HTMLElement, options: EffectOptions) => {
  const {
    key,
    duration = 1000,
    borderWidth = 2,
    borderRadius = 0,
    styles = '',
    color = 'rgba(111,148,182,0.1)',
  } = options;
  // eslint-disable-next-line no-param-reassign
  el.style.position = 'relative';
  const width = `${options?.width || el.offsetWidth}px`;
  const height = `${options?.height || el.offsetHeight}px`;
  const effectElement = document.createElement('div');
  effectElement.style.cssText = `
    --effect-color: ${color};
    --border-width: ${borderWidth}px;
    border-radius: ${borderRadius}px;
    position: absolute;
    top: 0;
    left: 0;
    margin: 0;
    width: ${width};
    height: ${height};
    pointer-events: none;
    animation: ${key}-effect ${duration}ms ease-out forwards;
  ${styles}`;
  el.append(effectElement);
  setTimeout(() => effectElement.remove(), duration);
};
export const createEffectDirective = (localOptions?: EffectOptions): Directive => {
  const globalOptions = useGlobalOption();
  let event: () => void;
  let eventNames: (keyof GlobalEventHandlersEventMap)[];
  return {
    mounted: (el: HTMLElement, { value: options }: Record<'value', EffectOptions>) => {
      const allOptions = {
        ...globalOptions.get(),
        ...localOptions,
        ...options,
      } satisfies EffectOptions;
      event = () => startEffect(el, allOptions);
      eventNames = allOptions.events || ['touchstart', 'mousedown'];
      eventNames.forEach((eventName) => el.addEventListener(eventName, event));
    },
    unmounted: (el: HTMLElement) => {
      eventNames.forEach((eventName) => el.removeEventListener(eventName, event));
    },
  };
};
