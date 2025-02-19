<template>
  <div
    class="flex flex-col rounded-2xl bg-white/80 p-6 text-left text-black shadow-lg backdrop-blur-sm"
  >
    <h3 class="text-(--color-custom-red)">
      {{ title }}
    </h3>
    <h6 class="">
      {{ description }}
    </h6>
    <ul class="mt-6 space-y-2">
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
      class="mt-12 flex items-baseline justify-center text-center text-sm whitespace-break-spaces"
      v-html="price"
    />
    <div class="flex justify-center">
      <button
        ref="contactButton"
        class="mt-2 overflow-hidden rounded-full bg-(--color-custom-red) px-8 py-2 text-lg font-bold text-white hover:cursor-pointer"
        @mouseenter="animateTextSlideIn"
        @mouseleave="animateTextSlideOut"
        @click="scrollToSection('formComponent')"
      >
        <span ref="textButtonElement" class="flex"> Contactez-nous </span>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useTextSlideAnimations } from '@/composables/animations';

const textButtonElement = ref<HTMLElement | null>(null);

const { animateTextSlideIn, animateTextSlideOut } =
  useTextSlideAnimations(textButtonElement);

const scrollToSection = (sectionId: string) => {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
};

interface PlanProps {
  title: string;
  description: string;
  features: string[];
  price: string;
}

defineProps<PlanProps>();
</script>
