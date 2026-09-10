<script setup lang="ts">
import SvgForms2 from '../svg/forms2.vue';

</script>

<template>
  <section class="relative bg-[#eff2f5] overflow-hidden py-8">

    <div class="container max-w-5xl text mx-auto flex flex-col md:flex-row items-center justify-center gap-10 relative z-10 px-4">
      <!-- Image container with custom clipping -->
      

      <!-- Text content -->
      <div class="w-full flex flex-col justify-center items-start text-[#61848d]">
        <h2 class="text-xl md:text-2xl font-semibold mb-4">En savoir plus</h2>
        <p class="text-base md:text-base text-[#61848d] mb-6 max-w-lg">
          L'Union des Orthopédagogues de France référence les professionnels certifiés qui s'engagent à respecter la charte déontologique UOF et à en respecter les valeurs.
        </p>
        <a
          href="https://www.orthopedagogues.fr/"
          target="_blank" 
          class="px-6 py-2 bg-[#61848D] text-white rounded-full font-medium shadow hover:bg-[#5c665f] transition"
        >
        Site de l'UOF
        </a>
      </div>
      <div class="w-full flex justify-center align-center">
        <img
          src="/medias/logo-uof-300x187.png"
          alt="blob"
          class="w-[40%]"
        />
      </div>
    </div>
  </section>
</template>

