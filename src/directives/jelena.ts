import { createEffectDirective } from '../composables/createEffectDirective';
import '../assets/animations/jelena.css';

export const vJelena = createEffectDirective({
  key: 'jelena',
  duration: 300,
  styles: 'border: 2px solid var(--effect-color);',
});
