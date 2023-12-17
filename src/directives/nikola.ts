import { createEffectDirective } from '../composables/createEffectDirective';
import '../assets/animations/nikola.css';

export const vNikola = createEffectDirective({
  key: 'nikola',
  duration: 700,
  styles: 'background: var(--effect-color);',
});
