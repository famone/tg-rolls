<template>
<div
  class="scroll-container"
  ref="container"
>
  <div class="scroll-track" ref="track">
    <div v-for="n in 20" :key="n" class="item">00:{{ n }}</div>
  </div>
  <div
    ref="box"
    @mousemove="onMove"
    @mouseleave="onLeave"
    class="w-1/2 h-full absolute top-0 right-0 bg-red-500/10 select-none"
  >
  </div>
</div>
</template>

<script setup>
import { ref } from "vue"

const box = ref(null)
const track = ref(null)
const percent = ref(0)

function getCursorPercentX(event, element) {
  const rect = box.value.getBoundingClientRect()
  const trackWidth = track.value.getBoundingClientRect().width
  const trackScrollWidth = track.value.scrollWidth
  const diff = trackScrollWidth - trackWidth
  const x = event.clientX - rect.left
  const percent = (x / rect.width) * 100
  track.value.style.transform = `translateX(-${diff/100 * percent + 34}px)`
}

function onMove(e) {
  if (!box.value) return
  getCursorPercentX(e, box.value)
}

function onLeave(){
  track.value.style.transform = `translateX(0px)`
}
</script>

<style scoped>
.scroll-container {
  width: 500px;
  overflow: hidden;
  border: 1px solid #ccc;
  position: relative;
}

.scroll-track {
  padding: 20px 0;
  display: flex;
  transition: all .3s ease-out;
}

.item {
  color: #fff;
  padding-right: 8px;
}
.box {
  pointer-events: none;
}

.box::before {
  content: "";
  position: absolute;
  inset: 0;
  pointer-events: auto; /* только эта псевдо-область ловит */
}
</style>
