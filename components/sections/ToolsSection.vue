<template>
  <div class="section-color relative bg-(--color-custom-beige)">
    <div class="section flex flex-col items-center gap-10 md:flex-row">
      <div class="mb-10 w-full text-left md:mb-0 md:w-1/2">
        <h2 class="mb-10">
          Nos
          <span class="inline-block text-(--color-custom-red)">différents</span>
          outils pour réaliser nos projets
        </h2>
        <p>
          Des technologies de pointe pour des sites web bâtis sur des bases
          solides.
        </p>
      </div>
      <div
        class="bg-dots relative flex w-full items-center justify-center md:w-1/2"
      >
        <div class="relative h-full w-full">
          <SvgoToolsLogoNode class="absolute top-10 left-20 h-12 w-12" />
          <SvgoToolsLogoNuxt class="absolute top-1/3 right-15 h-12 w-12" />
          <SvgoToolsLogoTailwind class="absolute bottom-20 left-10 h-12 w-12" />
          <SvgoToolsLogoFirebase
            class="absolute right-25 bottom-10 h-12 w-12"
          />
          <SvgoToolsLogoFigma
            class="absolute top-1/2 left-1/2 h-12 w-12 -translate-x-1/2 -translate-y-1/2 transform"
          />
          <SvgoToolsLogoVercel class="absolute right-40 bottom-40 h-12 w-12" />
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

<style scoped>
.bg-dots {
  background-image: radial-gradient(
    rgba(223, 70, 62, 0.15) 3px,
    transparent 1px
  );
  background-size: 20px 20px;
}
</style>
