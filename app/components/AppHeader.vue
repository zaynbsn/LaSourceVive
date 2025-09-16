<template>
  <header class="text-gray-900 align-center z-40 fixed w-full top-0" :style="{ backgroundColor: headerBg }">
    <div>
      <div class="flex items-center justify-between px-6 py-3 z-60 w-full relative">
        <!-- Logo (unchanged) -->
        <NuxtLink to="/" @click="closeMenu">
          <img
            src="/medias/logo.svg"
            alt="Logo"
            class="z-40 transition-all duration-300 absolute"
            :class="isScrolled
              ? 'lg:top-2 lg:left-5 h-16 top-2 left-6 w-auto'
              : 'lg:left-12 lg:top-8 lg:h-56 h-16 top-2 left-6 w-auto'
            "
            style="object-fit: contain;"
          />
        </NuxtLink>

        <!-- Desktop NAV (hidden on mobile) -->
        <nav class="hidden lg:flex items-center justify-end gap-12 text-lg w-full">
          <NuxtLink to="/" :class="route.path === '/' ? 'font-semibold text-[#61848D]' : 'font-semibold'" class="hover:text-[#61848D] transition">Accueil</NuxtLink>
          <NuxtLink to="/orthopedagogie" :class="route.path === '/orthopedagogie' ? 'font-semibold text-[#61848D]' : 'font-semibold'" class="hover:text-[#61848D]">L'orthopédagogie</NuxtLink>
          <NuxtLink to="/about" :class="route.path === '/about' ? 'font-semibold text-[#61848D]' : 'font-semibold'" class="hover:text-[#61848D]">Votre orthopédagogue</NuxtLink>
          <NuxtLink to="/services" :class="route.path === '/services' ? 'font-semibold text-[#61848D]' : 'font-semibold'" class="hover:text-[#61848D]">Mes services</NuxtLink>
          <NuxtLink to="/contact" class="bg-[#61848D] text-white px-4 py-2 rounded-full font-medium hover:opacity-90 transition">Prendre contact</NuxtLink>
        </nav>

        <!-- Burger Button (shown on mobile only) -->
        <button
          @click="toggleMenu"
          class="lg:hidden flex flex-col justify-center items-center space-y-1.5 w-10 h-10 z-60 relative"
          aria-label="Ouvrir le menu"
        >
          <span :class="['block h-1 w-8 rounded transition-all duration-300', menuOpen ? 'bg-[#61848D] rotate-45 translate-y-[10px]' : 'bg-[#232629]']" />
          <span :class="['block h-1 w-8 rounded transition-all duration-300', menuOpen ? 'opacity-0' : 'bg-[#232629]']" />
          <span :class="['block h-1 w-8 rounded transition-all duration-300', menuOpen ? 'bg-[#61848D] -rotate-45 -translate-y-[10px]' : 'bg-[#232629]']" />
        </button>
      </div>

      <!-- MOBILE MENU DEPLOY -->
      <transition name="fade">
        <nav
          v-if="menuOpen"
          class="fixed top-0 left-0 w-full h-full bg-[#fff] bg-opacity-95 z-50 flex flex-col items-center pt-36 space-y-8 text-lg font-semibold"
        >
          <NuxtLink to="/" @click="closeMenu" :class="route.path === '/' ? 'text-[#61848D]' : ''">Accueil</NuxtLink>
          <NuxtLink to="/orthopedagogie" @click="closeMenu" :class="route.path === '/orthopedagogie' ? 'text-[#61848D]' : ''">L'orthopédagogie</NuxtLink>
          <NuxtLink to="/about" @click="closeMenu" :class="route.path === '/about' ? 'text-[#61848D]' : ''">Votre orthopédagogue</NuxtLink>
          <NuxtLink to="/services" @click="closeMenu" :class="route.path === '/services' ? 'text-[#61848D]' : ''">Mes services</NuxtLink>
          <NuxtLink to="/contact" @click="closeMenu" class="bg-[#61848D] text-white px-4 py-2 rounded-full font-medium hover:opacity-90 transition">Prendre contact</NuxtLink>
          <!-- Optionally add a close btn below ... -->
        </nav>
      </transition>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'
const route = useRoute()

const headerBg = computed(() => route.path === '/' ? '#eef2f5' : '#dbbaa9')
const isScrolled = ref(false)

const onScroll = () => { isScrolled.value = window.scrollY > 10 }
onMounted(() => window.addEventListener('scroll', onScroll))
onUnmounted(() => window.removeEventListener('scroll', onScroll))

// Burger Menu State
const menuOpen = ref(false)
const toggleMenu = () => { menuOpen.value = !menuOpen.value }
const closeMenu = () => { menuOpen.value = false }
</script>

<style scoped>
.fade-enter-active, .fade-leave-active { transition: opacity .3s; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
.fade-enter-to, .fade-leave-from { opacity: 1; }
</style>