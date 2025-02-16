<template>
  <div class="w-full max-w-md rounded-2xl bg-white p-6 text-gray-800 shadow-lg">
    <h2 class="text-xl font-bold text-red-600">{{ title }}</h2>
    <p class="mt-2 text-gray-600">{{ description }}</p>
    <ul class="mt-4 space-y-2">
      <li
        v-for="(feature, index) in features"
        :key="index"
        class="flex items-center"
      >
        <span class="mr-2 text-green-500">✔</span>{{ feature }}
      </li>
    </ul>
    <p class="mt-6 text-lg font-semibold">{{ price }}</p>
    <button
      ref="contactButton"
      class="overflow-hidden rounded-full bg-[#DF463E] px-6 py-3 font-[TitilliumWeb-SemiBold] text-xl text-white hover:cursor-pointer"
      @mouseenter="animateTextSlideIn"
      @mouseleave="animateTextSlideOut"
    >
      <span ref="textButtonElement" class="flex"> Contactez-nous </span>
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useTextSlideAnimations } from '@/composables/animations';

const textButtonElement = ref<HTMLElement | null>(null);

const { animateTextSlideIn, animateTextSlideOut } =
  useTextSlideAnimations(textButtonElement);

interface PlanProps {
  title: string;
  description: string;
  features: string[];
  price: string;
}

defineProps<PlanProps>();
</script>
