<script setup>
import { gsap } from 'gsap'
import { onUnmounted, ref } from 'vue'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
let t
const x = ref(0)
// onMounted(() => {
//   t = gsap.to(x, {
//     value: 100,
//     onComplete() {
//       t.reverse()
//     },
//     onReverseComplete() {
//       t.play()
//     }
//   })
// })
onUnmounted(() => {
  ScrollTrigger.killAll()
  ScrollTrigger.getAll().forEach(t => t.kill());
})
</script>

<template>
  <div>
    <router-link :to="{name: 'A'}">A</router-link>
    {{ x }}
    <div :style="{transform: `translateX(${x}px)`, position: 'relative', width: '100px', height: '50px', backgroundColor: 'red'}"></div>
  </div>

</template>

<style scoped>

</style>
