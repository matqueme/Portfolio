<template>
  <div class="page-container">
    <HeroSection />
    <ActivitiesSectionVue />
    <WhoSection />
    <OffersSections />
    <LastProjectSection />
    <ToolsSection />
  </div>
</template>

<script setup lang="ts">
import HeroSection from '@/components/sections/HeroSection.vue';
import ActivitiesSectionVue from '@/components/sections/ActivitiesSection.vue.vue';
import OffersSections from '@/components/sections/OffersSections.vue';
import WhoSection from '~/components/sections/WhoSection.vue';
import LastProjectSection from '@/components/sections/LastProjectSection.vue';
import ToolsSection from '~/components/sections/ToolsSection.vue';
</script>
