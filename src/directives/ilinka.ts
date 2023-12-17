import { createEffectDirective } from '../composables/createEffectDirective';
import '../assets/animations/fade.css';

export const vIlinka = createEffectDirective({
  key: 'fade',
  duration: 500,
  styles: 'background: var(--effect-color);',
});
