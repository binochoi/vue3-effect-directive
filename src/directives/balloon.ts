import { createEffectDirective } from '../composables/createEffectDirective';
import '../assets/animations/jelena.css';

/** jelena + sanja */
export const vBalloon = createEffectDirective({
  key: 'sanja',
  duration: 1000,
  styles: `
    border: 2px solid var(--effect-color);
    background: var(--effect-color);
  `,
});
