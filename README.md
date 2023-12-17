# vue3-effect-directive
A library inspired by [clickEffect](https://github.com/codrops/ClickEffects) and easily used as a vue directive

## Install
```bash
pnpm add vue3-effect-directive
```

## Prerequisites

### import style bundle
```js
import 'vue3-effect-directive/dist/assets/animations/index.css'
```
### import each style
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