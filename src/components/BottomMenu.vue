<template>
  <div class="bg-black fixed bottom-0 left-0 py-3 pb-4 flex justify-center items-center gap-10 w-full">
    <div class="text-white text-center">
      <Gamepad2 class="size-6 mx-auto" />
      <p class="text-sm">PvP</p>
    </div>
    <div class="text-neutral-500 text-center">
      <Gift class="size-6 mx-auto" />
      <p class="text-sm">Gifts</p>
    </div>
    <div class="text-neutral-500  text-center">
      <User class="size-6 mx-auto" />
      <p class="text-sm">Profile</p>
    </div>
    <div class="text-neutral-500  text-center">
      <Store class="size-6 mx-auto" />
      <p class="text-sm">Shop</p>
    </div>
    <div class="text-neutral-500  text-center">
      <Sparkles class="size-6 mx-auto" />
      <p class="text-sm">Tasks</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Gamepad2, Gift, Sparkles, Store, User } from 'lucide-vue-next';


</script>

<style scoped>

</style>