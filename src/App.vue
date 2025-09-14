<template>
 <div class="h-screen py-4">
  <div class="sm:w-md mx-auto">
    <div class="text-white flex justify-center items-center gap-2">
      <span class="size-2 bg-emerald-400 rounded-full block"></span>
      48 онлайн
    </div>
    <div class="flex gap-4 items-center">
      <div class="size-12 rounded-full overflow-hidden">
        <img :src="user.photo_url" alt="">
      </div>
      <div>
        <p class="font-medium text-white">@{{ user.username }}</p>
        <p class="text-white/50 text-sm">{{ user.first_name }} ({{ user.language_code }})</p>
      </div>
    </div>
  </div>
  <BottomMenu />
 </div>
</template>

<script setup lang="ts">
import BottomMenu from './components/BottomMenu.vue';
import { useTelegram } from './services/telegram';

const { tg, user } = useTelegram()

console.log(tg)
</script>

<style scoped>

</style>
