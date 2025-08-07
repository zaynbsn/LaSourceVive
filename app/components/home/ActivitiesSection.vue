<script setup lang="ts">
import SvgForms2 from '../svg/forms2.vue';

</script>

<template>
  <section class="relative bg-[#eff2f5] overflow-hidden">
    <SvgForms2 class="absolute left-0 top-0 w-full h-full pointer-events-none select-none z-0" />

    <div class="container mx-auto flex flex-col md:flex-row items-center justify-center gap-10 relative z-10 px-4">
      <!-- Image container with custom clipping -->
      <div class="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
        <div class="w-[95%] max-w-xl">
          <img
            src="/medias/geo_round_square_2.svg"
            alt="blob"
            class=""
          />
        </div>
      </div>

      <!-- Text content -->
      <div class="w-full md:w-1/2 flex flex-col justify-center items-start">
        <h2 class="text-2xl md:text-3xl font-semibold mb-3 text-gray-800">Activités</h2>
        <p class="text-base md:text-lg text-gray-700 mb-2 max-w-lg">
          Notre équipe est composée de professionnels qualifiés en orthopédagogie.
        </p>
        <p class="text-base md:text-lg text-gray-700 mb-6 max-w-lg">
          Nous proposons des activités éducatives, ludiques et adaptées aux besoins spécifiques de chaque enfant.
        </p>
        <NuxtLink
          to="/services" 
          class="px-6 py-2 bg-[#728075] text-white rounded-full font-medium shadow hover:bg-[#5c665f] transition"
        >En savoir plus.</NuxtLink>
      </div>
    </div>
  </section>
</template>

