import { createEffectDirective } from '../composables/createEffectDirective';
import '../assets/animations/jelena.css';

/** jelena + sanja */
export const vBalloon = createEffectDirective({
  key: 'sanja',
  duration: 1000,
  styles: `
    border: var(--border-width) solid var(--effect-color);
    background: var(--effect-color);
  `,
});
