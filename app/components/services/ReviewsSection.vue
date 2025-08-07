<template>
  <section class="relative w-full min-h-[420px] flex items-center justify-center overflow-hidden" style="background: url('/medias/background-image-home-placeholder.jpg') no-repeat center center/cover;">
    <!-- Overlay for slight darkening (optional) -->
    <div class="absolute inset-0 bg-black/20" />
    <div class="relative z-10 w-full flex justify-center">
      <!-- Carousel Card, add group for arrow hover -->
      <div class="relative w-full max-w-xl shadow-lg bg-white/95 rounded-2xl px-5 py-10 flex flex-col items-center group">
        <!-- LEFT ARROW -->
        <button
          class="absolute left-3 top-1/2 -translate-y-1/2 flex items-center justify-center w-10 h-10 rounded-full bg-[#61848d] text-white shadow hover:bg-[#334953] transition z-30"
          @click="prev"
          :disabled="reviews.length === 1"
          aria-label="Avis précédent"
          type="button"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M13 15l-5-5 5-5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>

        <!-- RIGHT ARROW -->
        <button
          class="absolute right-3 top-1/2 -translate-y-1/2 flex items-center justify-center w-10 h-10 rounded-full bg-[#61848d] text-white shadow hover:bg-[#334953] transition z-30"
          @click="next"
          :disabled="reviews.length === 1"
          aria-label="Avis suivant"
          type="button"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M7 5l5 5-5 5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>

        <!-- Quotation mark icon -->
        <div class="absolute top-[-15%] left-1/2 -translate-x-1/2 flex justify-center items-center w-16 h-16 rounded-full bg-[#61848D] mb-4 shadow-lg">
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
            <text x="50%" y="135%" text-anchor="middle" font-size="54" font-weight="bold" fill="#fff" font-family="Georgia, serif">“</text>
          </svg>
        </div>

        <!-- Review -->
        <blockquote class="italic text-lg text-center px-2 mb-6"> 
          "{{ reviews[current].text }}"
        </blockquote>
        <div class="flex items-center gap-3">
          <!-- Reviewer avatar -->
          <img :src="reviews[current].avatar" class="w-10 h-10 rounded-full object-cover border-2 border-white -ml-1" :alt="reviews[current].author" />
          <div class="text-left">
            <div class="font-semibold text-gray-900 text-base">{{ reviews[current].author }}</div>
            <div class="text-xs text-gray-500">{{ reviews[current].subtitle }}</div>
          </div>
        </div>
        <!-- Carousel dots -->
        <div class="flex gap-2 justify-center mt-6">
          <button
            v-for="(r, i) in reviews"
            :key="i"
            class="h-2 w-2 rounded-full"
            :class="i === current ? 'bg-[#61848D]' : 'bg-gray-300'"
            @click="goTo(i)"
            aria-label="Changer d’avis"
          ></button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const reviews = [
  {
    text: 'Grâce à votre soutien, mon enfant a fait des progrès incroyables. Merci pour votre dévouement !',
    author: 'Jane DOE',
    subtitle: 'CEO de Orthopédagogie',
    avatar: '/medias/jane-avatar.jpg'
  },
  {
    text: 'Une équipe à l’écoute et très professionnelle. Je recommande vivement ce centre !',
    author: 'Paul MARTIN',
    subtitle: 'Parent satisfait',
    avatar: '/medias/paul-avatar.jpg'
  },
  {
    text: 'Mon fils reprend confiance en lui grâce à vos ateliers. Merci !',
    author: 'Sophie DUPUIS',
    subtitle: "Maman d'élève",
    avatar: '/medias/sophie-avatar.jpg'
  }
]

const current = ref(0)
let interval
const autoAdvance = () => {
  current.value = (current.value + 1) % reviews.length
}
onMounted(() => {
  interval = setInterval(autoAdvance, 8000)
})
onUnmounted(() => clearInterval(interval))

function goTo(i) {
  current.value = i
}
function prev() {
  current.value = (current.value - 1 + reviews.length) % reviews.length
}
function next() {
  current.value = (current.value + 1) % reviews.length
}
</script>