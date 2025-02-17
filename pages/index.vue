<template>
  <div class="page-container">
    <HeroSection />
    <ActivitiesSectionVue />
    <OffersSections />
    <LastProjectSection />
  </div>
</template>

<script setup lang="ts">
import HeroSection from '@/components/sections/HeroSection.vue';
import ActivitiesSectionVue from '@/components/sections/ActivitiesSection.vue.vue';
import OffersSections from '@/components/sections/OffersSections.vue';
import LastProjectSection from '@/components/sections/LastProjectSection.vue';
</script>
