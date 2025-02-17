<template>
  <div
    class="relative aspect-[3/2] w-full overflow-hidden rounded-2xl shadow-lg"
  >
    <div
      class="relative h-full w-full"
      @mouseenter="onMouseEnter"
      @mouseleave="onMouseLeave"
    >
      <img
        ref="imageWrapper"
        alt="Project image"
        class="h-full w-full object-cover"
        :src="image"
      />
      <div
        v-if="isHovered"
        class="text-overlay absolute top-0 z-10 flex h-full w-full items-center justify-center bg-transparent bg-clip-text text-center text-4xl font-black sm:text-7xl md:text-6xl xl:text-7xl 2xl:text-8xl"
        :style="{ backgroundImage: `url(${image})` }"
      >
        {{ title }}
      </div>
    </div>

    <div
      class="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/50 to-transparent px-6 py-4 text-white"
    >
      <h3 class="text-lg font-semibold">{{ title }}</h3>
      <p class="text-sm">{{ description }}</p>
    </div>
    <a :href="link" target="_blank">
      <PhosphorIconArrowUpRight
        size="42"
        class="absolute top-0 right-0 z-20 m-4 cursor-pointer rounded-full bg-black/50 px-2 py-1 text-white hover:bg-black"
      />
    </a>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import gsap from 'gsap';

defineProps<{
  title: string;
  description: string;
  image: string;
  link: string;
}>();

const imageWrapper = ref<HTMLElement | null>(null);
const isHovered = ref(false);

const onMouseEnter = () => {
  isHovered.value = true;
  if (imageWrapper.value) {
    gsap.to(imageWrapper.value, { duration: 0.3, filter: 'blur(30px)' });
  }
};

const onMouseLeave = () => {
  isHovered.value = false;
  if (imageWrapper.value) {
    gsap.to(imageWrapper.value, { duration: 0.3, filter: 'blur(0px)' });
  }
};
</script>

<style scoped>
.text-overlay {
  background-size: cover;
  background-position: center;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
