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
      <PhosphorIconCaretUp
        v-if="showReviews"
        class="ml-1 h-3 w-3 transition-transform"
      />
      <PhosphorIconCaretDown v-else class="ml-1 h-3 w-3 transition-transform" />
    </button>

    <!-- Reviews list (expandable) -->
    <div
      ref="reviewsContainer"
      class="styled-scrollbar mt-2 overflow-hidden"
      :style="{ height: reviewsHeight }"
    >
      <div class="space-y-2" :class="[needsScrollbar ? 'overflow-y-auto' : '']">
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
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, onMounted, nextTick, watch } from 'vue';
import gsap from 'gsap';

interface Review {
  name: string;
  rating: number;
  comment: string;
}

const props = defineProps<{
  reviews: Review[];
}>();

const showReviews = ref(false);
const reviewsHeight = ref('0px');
const contentHeight = ref(0);

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
    contentHeight.value = reviewsContainer.value.scrollHeight;
    needsScrollbar.value =
      contentHeight.value > Math.min(contentHeight.value, 128); // 128px = 32rem (max-h-32)
  }
};

const animateReviews = (isOpen: boolean) => {
  const height = isOpen ? Math.min(contentHeight.value, 128) + 'px' : '0px';

  gsap.to(reviewsContainer.value, {
    height: height,
    duration: 0.5,
    ease: 'power4.inOut',
    onStart: () => {
      if (isOpen) {
        reviewsHeight.value = '0px'; // Assure que ça commence de zéro à l'ouverture
      }
    },
    onComplete: () => {
      if (isOpen) {
        reviewsHeight.value = height;
      } else {
        reviewsHeight.value = '0px';
      }
    },
  });
};

watch(showReviews, async (newVal) => {
  animateReviews(newVal);
  await checkScrollbarNeeded();
});

onMounted(async () => {
  await checkScrollbarNeeded();
  if (showReviews.value) {
    reviewsHeight.value = Math.min(contentHeight.value, 128) + 'px';
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
