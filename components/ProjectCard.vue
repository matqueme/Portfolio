<template>
  <div
    class="relative aspect-[3/2] w-full overflow-hidden rounded-2xl shadow-lg"
  >
    <div ref="imageWrapper">
      <NuxtImg
        @mouseenter="onMouseEnter"
        @mouseleave="onMouseLeave"
        :src="image"
        alt="Project image"
        class="h-full w-full object-cover"
      />
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
        class="absolute top-0 right-0 m-4 cursor-pointer rounded-full bg-black/50 px-2 py-1 text-white hover:bg-black"
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

const onMouseEnter = () => {
  if (imageWrapper.value) {
    gsap.to(imageWrapper.value, { duration: 0.3, filter: 'blur(4px)' });
  }
};

const onMouseLeave = () => {
  if (imageWrapper.value) {
    gsap.to(imageWrapper.value, { duration: 0.3, filter: 'blur(0px)' });
  }
};
</script>
