<template>
  <header class="bg-[#cbb2a7] text-gray-900 flex justify-center align-center">
    <div class="container">  
        <!-- Bande supérieure -->
        <!-- <div class="flex justify-between items-center px-6 py-3 text-lg border-b border-[#b19e93]">
        <span>Boisson Julie - Orthopédagogue certifiée</span>
        <a href="https://www.orthopedagogues.fr/" target="_blank" rel="noopener">
            <img src="/medias/logo-uof-300x187.png" alt="Logo" class="h-8" />
        </a>
        </div> -->

        <!-- Menu principal -->
        <div class="flex items-center justify-between px-6 py-3">
            
        <!-- Logo central -->
        <img src="/medias/logo-placeholder.png" alt="Logo" class="h-16" />

        <!-- Partie gauche -->
        <nav class="flex items-center gap-6 text-lg">
            <NuxtLink to="/home" class="font-semibold">Accueil</NuxtLink>
            <NuxtLink to="/orthopedagogie">L'orthopédagogie</NuxtLink>
            <NuxtLink to="/about">Votre orthopédagogue</NuxtLink>
            <NuxtLink to="/services">Mes services</NuxtLink>
            <NuxtLink to="/contact" class="bg-[#61848D] text-white px-4 py-2 rounded-full font-medium hover:opacity-90 transition">Contactez moi</NuxtLink>
        </nav>

        <!-- Bouton contact -->
        
        </div>
    </div>
  </header>
</template>

<script setup>
// rien ici pour l’instant
</script>
