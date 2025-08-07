<script setup lang="ts">
import SvgForms2 from '../svg/forms2.vue';

</script>

<template>
  <section class="relative bg-[#eff2f5] overflow-hidden py-8">

    <div class="container mx-auto flex flex-col md:flex-row items-center justify-center gap-10 relative z-10 px-4">
      <!-- Image container with custom clipping -->
      <div class="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
        <div class="w-[95%] max-w-xl">
          <img
            src="/medias/uof_blob.svg"
            alt="blob"
            class=""
          />
        </div>
      </div>

      <!-- Text content -->
      <div class="w-full md:w-1/2 flex flex-col justify-center items-start">
        <h2 class="text-2xl md:text-3xl font-semibold mb-3 text-gray-800">Union des Orthopédagogues de France</h2>
        <p class="text-base md:text-base text-gray-700 mb-6 max-w-lg">
          Favorise les liens et les échanges entre les professionnels (Enseignants, Chefs d’entreprise, Psychologues, Orthophonistes, Ergothérapeutes, Psychomotriciens, Éducateurs spécialisés…),
        </p>
        <p class="text-base md:text-base text-gray-700 mb-6 max-w-lg">
            Suit les avancées scientifiques et leurs implications dans le domaine des neurosciences et de la pédagogie.
        </p>
        <p class="text-base md:text-base text-gray-700 mb-2 max-w-lg">
          Fédère les compétences et ressources relatives à l’Orthopédagogie,.
        </p>
        <a
          href="https://www.orthopedagogues.fr/"
          target="_blank" 
          class="px-6 py-2 bg-[#728075] text-white rounded-full font-medium shadow hover:bg-[#5c665f] transition"
        >
        En savoir plus.
        </a>
      </div>
    </div>
  </section>
</template>

