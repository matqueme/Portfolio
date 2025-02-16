<template>
  <div
    class="flex w-130 flex-col rounded-2xl bg-white p-6 text-gray-800 shadow-lg"
  >
    <h2 class="font-[gebuk-regular] text-xl font-bold text-red-600">
      {{ title }}
    </h2>
    <p class="mt-2 font-[TitilliumWeb-Bold] text-gray-600">
      {{ description }}
    </p>
    <ul class="mt-4 space-y-2">
      <li
        v-for="(feature, index) in features"
        :key="index"
        class="flex items-center"
      >
        <div>
          <PhosphorIconCheckCircle class="mr-3 text-xl" />
        </div>
        {{ feature }}
      </li>
    </ul>
    <div class="flex flex-1" />
    <p
      class="mt-10 text-center font-[TitilliumWeb-Regular] text-lg font-semibold"
    >
      {{ price }}
    </p>
    <button
      ref="contactButton"
      class="mx-auto mt-5 block overflow-hidden rounded-full bg-[#DF463E] px-6 py-1 font-[TitilliumWeb-SemiBold] text-lg text-white hover:cursor-pointer"
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
