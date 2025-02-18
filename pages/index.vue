<template>
  <div class="page-container">
    <HeroSection />
    <ActivitiesSectionVue />
    <WhoSection />
    <OffersSections />
    <ToolsSection />
  </div>
</template>

<script setup lang="ts">
import HeroSection from '@/components/sections/HeroSection.vue';
import ActivitiesSectionVue from '@/components/sections/ActivitiesSection.vue.vue';
import OffersSections from '@/components/sections/OffersSections.vue';
import WhoSection from '~/components/sections/WhoSection.vue';
import ToolsSection from '~/components/sections/ToolsSection.vue';
</script>
