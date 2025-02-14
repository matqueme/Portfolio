<template>
  <div
    ref="container"
    class="bg-dots flex h-screen items-center justify-center bg-[#F0EBE3]"
  >
    <div class="flex max-w-screen-2xl">
      <div class="w-1/2">
        <h1 ref="title" class="font-[gebuk] text-6xl">
          Bienvenue dans
          <div
            @mouseenter="animateNotreIn"
            @mouseleave="animateNotreOut"
            class="inline-block"
          >
            <span ref="notre" class="inline-block text-[#DF463E]">notre</span>
          </div>

          univers
        </h1>
        <h2 ref="subtitle" class="font-[TitilliumWeb-Regular] text-xl">
          Nous concevons des expériences web où l'élégance intemporelle
          rencontre la précision du digital. Chaque projet est une fusion d’art
          et de technologie, pensée pour marquer les esprits.
        </h2>
        <div class="mt-8 flex flex-row">
          <button
            ref="contactButton"
            class="overflow-hidden rounded-full bg-[#DF463E] px-6 py-3 font-[TitilliumWeb-SemiBold] text-xl text-white hover:cursor-pointer"
            @mouseenter="animateBtn1In"
            @mouseleave="animateBtn1Out"
          >
            <span ref="textBtn" class="flex"> Contactez-nous </span>
          </button>
          <button
            ref="projectsButton"
            class="relative ml-4 flex items-center justify-center overflow-hidden rounded-full border-2 border-[#DF463E] px-6 py-3 font-[TitilliumWeb-SemiBold] text-xl text-[#DF463E] hover:cursor-pointer"
            @mouseenter="animateBtnIn"
            @mouseleave="animateBtnOut"
            @mousemove="moveCircle"
          >
            <span class="z-40 inline-block"> Découvrez nos projets </span>
            <PhosphorIconArrowCircleRight
              size="24"
              class="z-40 ml-2 inline-block"
            />
            <svg class="absolute inset-0 z-0 h-full w-full">
              <circle
                ref="circle"
                cx="50%"
                cy="50%"
                r="0"
                fill="rgba(223, 70, 62)"
              />
            </svg>
          </button>
        </div>
      </div>
      <div class="w-1/2">
        <NuxtImg
          src="path/to/your/image.jpg"
          alt="Description de l'image"
          class="h-full w-full object-cover"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { gsap } from 'gsap';
import { ref, onMounted } from 'vue';

const notre = ref<HTMLElement | null>(null);
const projectsButton = ref<HTMLElement | null>(null);
const textBtn = ref<HTMLElement | null>(null);
const circle = ref<SVGCircleElement | null>(null);

const animateNotreIn = () => {
  if (notre.value) {
    gsap.to(notre.value, {
      rotateX: 360, // Roule sur lui-même
      duration: 1.5,
      ease: 'power2.out',
    });
  }
};
const animateNotreOut = () => {
  if (notre.value) {
    gsap.to(notre.value, {
      rotateX: 0, // Revient à sa position initiale
      duration: 1.5,
      ease: 'power2.out',
    });
  }
};

const animateBtnIn = () => {
  if (projectsButton.value && circle.value) {
    gsap.to(projectsButton.value, {
      color: 'white',
      duration: 0.5,
    });

    gsap.to(circle.value, {
      attr: { r: '125%' },
      duration: 0.5,
      ease: 'power2.out',
    });
  }
};

const animateBtnOut = () => {
  if (projectsButton.value && circle.value) {
    gsap.to(projectsButton.value, {
      backgroundColor: 'transparent',
      color: '#DF463E',
    });
    gsap.to(circle.value, {
      attr: { r: '0' },
      duration: 0.5,
      ease: 'power2.out',
    });
  }
};

const moveCircle = (event: MouseEvent) => {
  if (circle.value) {
    const rect = projectsButton.value?.getBoundingClientRect();
    if (rect) {
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      circle.value.setAttribute('cx', x.toString());
      circle.value.setAttribute('cy', y.toString());
    }
  }
};

const animateBtn1In = () => {
  if (textBtn.value) {
    const tl = gsap.timeline({ paused: true });

    tl.to(textBtn.value, {
      duration: 0.2,
      yPercent: -150,
      ease: 'power2.in',
    });
    tl.set(textBtn.value, { yPercent: 150 });
    tl.to(textBtn.value, {
      duration: 0.2,
      yPercent: 0,
      ease: 'power2.out',
    });

    tl.play();
  }
};

const animateBtn1Out = () => {
  if (textBtn.value) {
    const tl = gsap.timeline({ paused: true });

    tl.to(textBtn.value, {
      duration: 0.2,
      yPercent: 150,
      ease: 'power2.in',
    });
    tl.set(textBtn.value, { yPercent: -150 });
    tl.to(textBtn.value, {
      duration: 0.2,
      yPercent: 0,
      ease: 'power2.out',
    });

    tl.play();
  }
};

onMounted(() => {
  if (notre.value) {
    gsap.from(notre.value, { y: -50, duration: 1 });
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
