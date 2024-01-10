import { createEffectDirective } from '../composables/createEffectDirective';
import '../assets/animations/jelena.css';

export const vJelena = createEffectDirective({
  key: 'jelena',
  duration: 300,
  styles: 'border: var(--border-width) solid var(--effect-color);',
});
