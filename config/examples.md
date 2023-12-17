<script setup>
import ExampleButton from './.vitepress/components/ExampleButton.vue'
import { vBalloon, vSanja, vRadomir, vMarko, vNikola, vIlinka, vJelena } from '../src/index'
import README from '../README.md';
</script>
<style>
  *, ::before, ::after {
    animation-duration: 1s !important;
  }
</style>

# Examples
Look at all the effects
## Effects

**Balloon**
<ExampleButton v-balloon />

**Sanja**
<ExampleButton v-sanja />

**Radomir**
<ExampleButton v-radomir />

**Marko**
<ExampleButton v-marko />

**Nikola**
<ExampleButton v-nikola />

**Nikola**
<ExampleButton v-ilinka />

**Jelena**
<ExampleButton v-jelena />


<README />