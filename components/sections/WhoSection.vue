<template>
  <div class="section-color relative overflow-hidden bg-[#F0EBE3] text-black">
    <div class="section z-10 flex flex-col text-center md:flex-row">
      <div class="mr-5 mb-10 w-full text-left md:w-2/3">
        <h2 class="mb-15">
          Qui nous <span class="text-(--color-custom-red)">sommes</span> ?
        </h2>
        <h6>
          Nous sommes Mathis et Quentin, une équipe passionnée par la création
          de sites web et l'univers digital. Complémentaires dans nos
          compétences, nous mettons tout en œuvre pour transformer vos idées en
          réalité. <br /><br />Ensemble, nous formons un duo dynamique qui allie
          créativité, technicité et écoute. Nous croyons en une collaboration
          transparente et proche de nos clients, pour des résultats qui
          dépassent les attentes.
        </h6>
      </div>

      <div
        class="bg-dots relative flex w-full items-center justify-center md:w-1/3"
      >
        <div
          class="absolute top-20 left-10 h-24 w-24 rounded-full bg-gray-300 md:top-16 md:left-20"
        ></div>
        <p class="absolute top-37 left-4 text-black md:top-32 md:left-14">
          Mathis
        </p>

        <div
          class="absolute right-10 bottom-20 h-24 w-24 rounded-full bg-gray-300 md:right-16 md:bottom-15"
        ></div>
        <p
          class="absolute right-26 bottom-22 text-black md:right-32 md:bottom-16"
        >
          Quentin
        </p>
        <Star
          class="absolute top-4 left-4 h-15 w-15 opacity-25 md:top-12 md:right-10"
        />
        <Star
          class="absolute right-6 bottom-6 h-10 w-10 opacity-25 md:bottom-12 md:left-10"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Star from '@/assets/icons/Star.svg';
</script>

<style scoped>
.bg-dots {
  background-image: radial-gradient(
    rgba(223, 70, 62, 0.15) 3px,
    transparent 1px
  );
  background-size: 20px 20px;
  min-height: 200px; /* Empêche le rétrécissement */
}

@media (max-width: 768px) {
  .bg-dots {
    min-height: 200px;
  }
}
</style>
