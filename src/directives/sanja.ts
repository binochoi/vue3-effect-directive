import { createEffectDirective } from '../composables/createEffectDirective';
import '../assets/animations/sanja.css';

export const vSanja = createEffectDirective({
  key: 'sanja',
  duration: 1000,
  styles: 'background: var(--effect-color);',
});
