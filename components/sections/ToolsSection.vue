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
        class="bg-dots relative flex min-h-82 w-full items-center justify-center md:w-1/2"
      >
        <div class="relative h-full w-full">
          <SvgoToolsLogoPhotoshop class="absolute top-10 left-20 h-16 w-16" />
          <SvgoToolsLogoNuxt class="absolute top-1/3 right-12 h-16 w-16" />
          <SvgoToolsLogoTailwind class="absolute bottom-5 left-15 h-16 w-16" />
          <SvgoToolsLogoFirebase
            class="absolute right-25 bottom-10 h-16 w-16"
          />
          <SvgoToolsLogoFigma
            class="absolute top-1/2 left-1/2 hidden h-16 w-16 sm:block"
          />
          <SvgoToolsLogoVercel
            class="absolute bottom-15 left-55 hidden h-16 w-16 sm:block md:hidden lg:block"
          />
          <SvgoToolsLogoNode
            class="absolute top-15 right-45 hidden h-16 w-16 sm:block md:hidden lg:block"
          />
        </div>
        <div class="absolute top-0 -left-5 z-0 h-14 w-14 opacity-25">
          <SvgoStar class="h-14 w-14" />
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
