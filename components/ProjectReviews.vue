<template>
  <div
    v-if="reviews && reviews.length > 0"
    class="mt-2 border-t border-white/30 pt-2"
  >
    <!-- Average rating display -->
    <div class="flex items-center">
      <div class="flex">
        <template v-for="i in 5" :key="`star-${i}`">
          <PhosphorIconStar
            v-if="i <= Math.floor(rating)"
            weight="fill"
            class="text-yellow-400"
          />
          <PhosphorIconStarHalf
            v-else-if="i - rating <= 0.5 && i - rating > 0"
            weight="fill"
            class="text-yellow-400"
          />
          <PhosphorIconStar v-else weight="light" class="text-gray-400" />
        </template>
      </div>
      <span class="ml-2 text-xs">{{ rating.toFixed(1) }}/5</span>
    </div>

    <!-- Show review button -->
    <button
      v-if="reviews.length > 0"
      @click="toggleReviews"
      class="mt-1 flex items-center text-xs text-white/80 hover:cursor-pointer hover:text-white hover:underline"
    >
      {{
        showReviews
          ? 'Masquer les avis'
          : reviews.length === 1
            ? "Voir l'avis (1)"
            : `Voir les avis (${reviews.length})`
      }}
      <PhosphorIconCaretUp v-if="showReviews" class="ml-1 h-3 w-3" />
      <PhosphorIconCaretDown v-else class="ml-1 h-3 w-3 transition-transform" />
    </button>

    <!-- Reviews list (expandable) -->
    <div
      v-if="showReviews"
      :class="[
        'styled-scrollbar mt-2 max-h-32 space-y-2',
        needsScrollbar ? 'overflow-y-auto' : '',
      ]"
    >
      <div v-for="(review, idx) in reviews" :key="idx" class="text-xs">
        <div class="flex items-center">
          <span class="font-semibold">{{ review.name }}</span>
          <div class="ml-2 flex">
            <template v-for="i in 5" :key="`r-${idx}-${i}`">
              <PhosphorIconStar
                v-if="i <= Math.floor(review.rating)"
                weight="fill"
                class="text-xs text-yellow-400"
              />
              <PhosphorIconStarHalf
                v-else-if="i - review.rating <= 0.5 && i - review.rating > 0"
                weight="fill"
                class="text-xs text-yellow-400"
              />
              <PhosphorIconStar
                v-else
                weight="light"
                class="text-xs text-gray-400"
              />
            </template>
          </div>
        </div>
        <p class="text-xs text-white/80 italic">« {{ review.comment }} »</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, onMounted, nextTick, watch } from 'vue';

interface Review {
  name: string;
  rating: number;
  comment: string;
}

const props = defineProps<{
  reviews: Review[];
}>();

const showReviews = ref(false);

const rating = computed(() => {
  if (!props.reviews || props.reviews.length === 0) return 0;
  const sum = props.reviews.reduce((total, review) => total + review.rating, 0);
  return sum / props.reviews.length;
});

const reviewsContainer = ref<HTMLElement | null>(null);
const needsScrollbar = ref(false);

const checkScrollbarNeeded = async () => {
  await nextTick();
  if (reviewsContainer.value) {
    needsScrollbar.value =
      reviewsContainer.value.scrollHeight > reviewsContainer.value.clientHeight;
  }
};

watch(showReviews, async (newVal) => {
  if (newVal) {
    await checkScrollbarNeeded();
  }
});

onMounted(async () => {
  if (showReviews.value) {
    await checkScrollbarNeeded();
  }
});

const toggleReviews = () => {
  showReviews.value = !showReviews.value;
};
</script>

<style scoped>
.styled-scrollbar {
  scrollbar-width: thin;
  scrollbar-color: rgba(255, 255, 255, 0.3) transparent;
}

.styled-scrollbar::-webkit-scrollbar {
  width: 4px;
}

.styled-scrollbar::-webkit-scrollbar-track {
  background: transparent;
}

.styled-scrollbar::-webkit-scrollbar-thumb {
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 6px;
}
</style>
