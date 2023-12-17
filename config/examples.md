<script setup>
import ExampleButton from './.vitepress/components/ExampleButton.vue'
import { vBalloon, vSanja, vRadomir, vMarko, vNikola, vIlinka, vJelena } from '../src/index';
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


## Prerequisites

### install style bundle
```js
import 'vue3-effect-directive/dist/assets/animations/index.css'
```
### install each style
```js
import { vSanja } from 'vue3-effect-directive'
import 'vue3-effect-directive/dist/assets/animations/sanja.css'
```

## Easily usage
```vue
<script setup>
import { vSanja } from 'vue3-effect-directive'
</script>
<template>
  <button v-sanja>click!</button>
</template>
```

### with options
```vue
<script setup>
import { vSanja, Options } from 'vue3-effect-directive'
const options: Options = { ... }
</script>
<template>
  <button v-sanja="options">click!</button>
</template>
```

## Global option
```js
const app = createApp(App);
app.use(effectDirective, {
  color: 'red',
})
```