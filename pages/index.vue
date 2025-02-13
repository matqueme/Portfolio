<template>
  <div ref="container" class="bg-dots flex h-screen bg-[#F0EBE3]">
    <div class="w-1/2 p-4">
      <h1 ref="title" class="font-[gebuk] text-6xl">
        Bienvenue dans
        <span ref="notre" class="text-[#DF463E]">notre</span> univers
      </h1>
      <h2 ref="subtitle" class="font-[TitilliumWeb-Regular] text-xl">
        Nous concevons des expériences web où l'élégance intemporelle rencontre
        la précision du digital. Chaque projet est une fusion d’art et de
        technologie, pensée pour marquer les esprits.
      </h2>
      <button
        ref="contactButton"
        class="rounded-full bg-[#DF463E] px-6 py-3 font-[TitilliumWeb-SemiBold] text-xl text-white transition-colors duration-300 hover:cursor-pointer hover:bg-[#C63D35]"
      >
        Contactez-nous
      </button>
      <button
        ref="projectsButton"
        class="ml-4 rounded-full border-2 border-[#DF463E] px-6 py-3 font-[TitilliumWeb-SemiBold] text-xl text-[#DF463E] transition-colors duration-300 hover:cursor-pointer hover:bg-[#DF463E] hover:text-white"
      >
        Découvrez nos projets
        <PhosphorIconArrowCircleRight size="24" class="ml-2 inline-block" />
      </button>
    </div>
    <div class="w-1/2 p-4">
      <NuxtImg
        src="path/to/your/image.jpg"
        alt="Description de l'image"
        class="h-full w-full object-cover"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { gsap } from 'gsap';
import { ref, onMounted } from 'vue';

const notre = ref<HTMLElement | null>(null);

onMounted(() => {
  if (notre.value) {
    // Animation à l'entrée de la page
    gsap.from(notre.value, { opacity: 0, y: -20, duration: 2 });

    // Animation au survol
    notre.value.addEventListener('mouseenter', () => {
      gsap.to(notre.value, { scale: 1.8, duration: 0.3 });
    });

    notre.value.addEventListener('mouseleave', () => {
      gsap.to(notre.value, { scale: 1, duration: 0.3 });
    });
  }
});
</script>

<style scoped>
.bg-dots {
  background-image: radial-gradient(
    rgba(223, 70, 62, 0.15) 3px,
    transparent 1px
  );
  background-size: 20px 20px;
}
</style>
