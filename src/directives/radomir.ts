import { createEffectDirective } from '../composables/createEffectDirective';
import '../assets/animations/radomir.css';

export const vRadomir = createEffectDirective({
  key: 'radomir',
  duration: 1000,
  styles: 'box-shadow: inset 0 0 0 35px var(--effect-color);',
});
