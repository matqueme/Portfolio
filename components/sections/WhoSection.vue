<template>
  <div class="section-color relative bg-(--color-custom-beige)">
    <div class="section flex flex-col items-center gap-10 md:flex-row">
      <div class="w-full text-left md:w-2/3">
        <h2 class="mb-10">
          Qui nous
          <div @mouseenter="animateText3DRotate" class="inline-block">
            <span
              ref="notreElement"
              class="inline-block text-(--color-custom-red)"
              >sommes</span
            >
          </div>
          ?
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
              @mouseenter="animateCircle(mathisCircle)"
              @mouseleave="resetCircle(mathisCircle)"
              class="inline-block"
            >
              <div
                ref="mathisCircle"
                class="h-24 w-24 rounded-full bg-gray-300 md:h-28 md:w-28"
              ></div>
            </div>

            <p class="font-decorative absolute bottom-2 -translate-x-full">
              Mathis
            </p>
          </div>

          <div
            class="absolute right-0 bottom-0 mb-4 flex flex-col items-center"
          >
            <div class="relative">
              <div
                @mouseenter="animateCircle(quentinCircle)"
                @mouseleave="resetCircle(quentinCircle)"
                class="inline-block"
              >
                <div
                  ref="quentinCircle"
                  class="h-24 w-24 rounded-full bg-gray-300 md:h-28 md:w-28"
                ></div>
              </div>
              <p class="font-decorative absolute bottom-2 -translate-x-1/4">
                Quentin
              </p>
            </div>
          </div>
        </div>
        <div class="absolute bottom-6 left-6 z-0 h-10 w-18 opacity-25">
          <div class="relative">
            <SvgoStar class="absolute right-0 bottom-0 h-14 w-14" />
            <SvgoStar class="absolute -top-4 left-0 h-8 w-8" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import gsap from 'gsap';

const notreElement = ref<HTMLElement | null>(null);
const mathisCircle = ref<HTMLElement | null>(null);
const quentinCircle = ref<HTMLElement | null>(null);

const animateText3DRotate = () => {
  if (notreElement.value) {
    gsap.set(notreElement.value, {
      rotateX: 0,
      rotateY: 0,
      rotateZ: 0,
    });

    gsap.to(notreElement.value, {
      rotateX: 360,
      rotateY: 360,
      rotateZ: 360,
      duration: 2,
      ease: 'power2.inOut',
    });
  }
};

const animateCircle = (circle: HTMLElement | null) => {
  if (circle) {
    gsap.to(circle, {
      scale: 1.15,
      duration: 0.3,
      ease: 'power2.inOut',
    });
  }
};

const resetCircle = (circle: HTMLElement | null) => {
  if (circle) {
    gsap.to(circle, {
      scale: 1,
      duration: 0.3,
      ease: 'power2.inOut',
    });
  }
};
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
