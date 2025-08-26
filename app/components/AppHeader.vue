<template>
  <header class="bg-[#eef2f5] text-gray-900 align-center z-40 fixed w-full">
    <div class="">  
        <!-- Bande supérieure -->
        <!-- <div class="flex justify-between items-center px-6 py-3 text-lg border-b border-[#b19e93]">
        <span>Boisson Julie - Orthopédagogue certifiée</span>
        <a href="https://www.orthopedagogues.fr/" target="_blank" rel="noopener">
            <img src="/medias/logo-uof-300x187.png" alt="Logo" class="h-8" />
        </a>
        </div> -->

        <!-- Menu principal -->
        <div class="flex items-center justify-between px-6 py-3 z-40 w-full">
            
        <!-- Logo central -->
        <img src="/medias/logo.svg" alt="Logo" class="absolute top-8 left-16 h-42 z-40" />

        <!-- Partie gauche -->
        <nav class="flex items-center justify-end gap-12 text-lg w-full">
            <NuxtLink 
              to="/home"
              :class="route.path === '/home' ? 'font-semibold text-[#61848D]' : 'font-semibold'"
              class="hover:text-[#61848D] transition"
            >
              Accueil
            </NuxtLink>

            <NuxtLink
              to="/orthopedagogie"
              :class="route.path === '/orthopedagogie' ? 'font-semibold text-[#61848D]' : 'font-semibold'"
              class="hover:text-[#61848D]"
            >
              L'orthopédagogie
            </NuxtLink>

            <NuxtLink 
              to="/about"
              :class="route.path === '/about' ? 'font-semibold text-[#61848D]' : 'font-semibold'"
              class="hover:text-[#61848D]"
            >
              Votre orthopédagogue
            </NuxtLink>
            
            <NuxtLink 
              to="/services"
              :class="route.path === '/services' ? 'font-semibold text-[#61848D]' : 'font-semibold'" 
              class="hover:text-[#61848D]"
            >
              Mes services
            </NuxtLink>
            
            <NuxtLink to="/contact" class="bg-[#61848D] text-white px-4 py-2 rounded-full font-medium hover:opacity-90 transition"> Prendre contact</NuxtLink>
        </nav>

        <!-- Bouton contact -->
        
        </div>
    </div>
  </header>
</template>

<script setup>
const route = useRoute()
</script>
