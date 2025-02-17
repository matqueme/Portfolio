<template>
  <div class="section-color relative bg-(--color-custom-beige)">
    <div class="section flex flex-col md:flex-row">
      <div class="mb-10 w-full text-left md:mb-0 md:w-2/3">
        <h2 class="mb-10">
          Qui nous <span class="text-(--color-custom-red)">sommes</span> ?
        </h2>
        <p>
          Nous sommes Mathis et Quentin, une équipe passionnée par la création
          de sites web et l'univers digital. Complémentaires dans nos
          compétences, nous mettons tout en œuvre pour transformer vos idées en
          réalité. <br /><br />
          Ensemble, nous formons un duo dynamique qui allie créativité,
          technicité et écoute. Nous croyons en une collaboration transparente
          et proche de nos clients, pour des résultats qui dépassent les
          attentes.
        </p>
      </div>
      <div
        class="bg-dots relative flex w-full items-center justify-center md:w-1/3"
      >
        <div class="relative z-10 flex h-52 w-52 md:h-64 md:w-64">
          <div class="absolute top-4 left-0 flex flex-col items-center">
            <div
              class="h-24 w-24 rounded-full bg-gray-300 md:h-28 md:w-28"
            ></div>
            <p class="font-decorative absolute bottom-2 -translate-x-full">
              Mathis
            </p>
          </div>

          <div
            class="absolute right-0 bottom-0 mb-4 flex flex-col items-center"
          >
            <div class="relative">
              <div
                class="h-24 w-24 rounded-full bg-gray-300 md:h-28 md:w-28"
              ></div>
              <p class="font-decorative absolute bottom-2 -translate-x-1/4">
                Quentin
              </p>
            </div>
          </div>
        </div>
        <div class="absolute bottom-6 left-6 z-0 h-10 w-18 opacity-25">
          <div class="relative">
            <Star class="absolute right-0 bottom-0 h-14 w-14" />
            <Star class="absolute -top-4 left-0 h-8 w-8" />
          </div>
        </div>
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
}
</style>
