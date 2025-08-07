<template>
  <header class="bg-[#cbb2a7] text-gray-900 flex justify-center align-center">
    <div class="container">  
        <!-- Bande supérieure -->
        <div class="flex justify-between items-center px-6 py-3 text-lg border-b border-[#b19e93]">
        <span>Boisson Julie - Orthopédagogue certifiée</span>
        <a href="https://www.orthopedagogues.fr/" target="_blank" rel="noopener">
            <img src="/assets/medias/logo-uof-300x187.png" alt="Logo" class="h-8" />
        </a>
        </div>

        <!-- Menu principal -->
        <div class="flex items-center justify-between px-6 py-3">
        <!-- Partie gauche -->
        <nav class="flex items-center gap-6 text-lg">
            <NuxtLink to="/home" class="font-semibold">Accueil</NuxtLink>
            <NuxtLink to="/parcours">Mon parcours</NuxtLink>
            <NuxtLink to="/ressources">Ressources</NuxtLink>
            <NuxtLink to="/orthopedagogie">L'orthopédagogie</NuxtLink>
            <NuxtLink to="/services">Mes services</NuxtLink>
        </nav>

        <!-- Logo central -->
        <img src="/medias/logo-placeholder.png" alt="Logo" class="h-16" />

        <!-- Bouton contact -->
        <NuxtLink
            to="/contact"
            class="bg-black text-white px-4 py-2 rounded-full font-medium hover:opacity-90 transition"
        >
            Contactez moi
        </NuxtLink>
        </div>
    </div>
  </header>
</template>

<script setup>
// rien ici pour l’instant
</script>
