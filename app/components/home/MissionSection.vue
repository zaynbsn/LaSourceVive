<template>
<section class="relative pb-20 bg-white text-[#61848d]">
    <!-- SVG colored area + title as a wrapper -->
    <div class="relative">
      <!-- The Wave SVG (background) -->
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 240" class="block w-full" :style="{ backgroundColor: bgColor }">
        <path fill="#fefffe" fill-opacity="1" d="M0,224L120,192C240,160,480,96,720,96C960,96,1200,160,1320,192L1440,224L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path>
      </svg>
      <!-- Title floating above the wave -->
      <h2 
        class="absolute w-full text-center text-3xl md:text-4xl mb-12 font-bold top-4 md:top-12 lg:top-26 xl:top-34 pt-10 pb-6 z-10 pointer-events-none select-none"
        style=" /* fine tune: move higher or lower with pt-10 or top-0/1/2 etc. */"
      >
        Mes services
      </h2>
    </div>
    <div class="container mx-auto mt-8 md:mt-0 lg:mt-0 px-6">
      <!-- Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
        <!-- Block 1 -->
        <div class="flex flex-col items-center text-center">
          <!-- SVG Clipped Image -->
          <div class="w-48 h-fit mb-6">
            <SvgBlob2 />
          </div>
          <h3 class="text-xl font-semibold mb-2">Pour commencer</h3>
          <div class="flex justify-center mb-3">
            <span class="w-16 border-b-5 border-dotted border-[#61848D]"></span>
          </div>
          <p class="text-base">
            Entretien téléphonique <br /> Premier entretien orthopédagogique en présence de la famille <br /> Mise en lumière des besoins
          </p>
          
        </div>
        <!-- Block 2 -->
        <div class="flex flex-col items-center text-center">
          <div class="w-48 h-fit mb-6">
            <SvgBlob1 />
          </div>
          <h3 class="text-xl font-semibold mb-2">L'accompagnement</h3>
          <div class="flex justify-center mb-3">
            <span class="w-16 border-b-5 border-dotted border-[#]"></span>
          </div>
          <p class="text-base mb-12">
            Séances personnalisées pour enfants, étudiants ou adultes <br />Individuelles ou en petits groupes <br />Connaissance de soi et de son fonctionnement cognitif et affectif
          </p>
          
          <NuxtLink
          to="/services" 
          class="px-6 py-2 bg-[#61848d] text-white rounded-full font-medium shadow hover:bg-[#6e929c] transition"
          >
            En savoir plus
          </NuxtLink>
        </div>
        <!-- Block 3 -->
        <div class="flex flex-col items-center text-center">
          <div class="w-48 h-fit mb-6">
            <SvgBlob3 />
          </div>
          <h3 class="text-xl font-semibold mb-2">L'offre Séniors</h3>
          <div class="flex justify-center mb-3">
            <span class="w-16 border-b-5 border-dotted border-[#61848D]"></span>
          </div>
          <p class="text-base">
            En couple ou en petits ateliers  <br /> Stimulation des capacités cognitives, de la mémorisation
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  bgColor: {
    type: String,
    default: '#eef3f5'
  }
})
</script>