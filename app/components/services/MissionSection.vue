<template>
<section class="relative pb-20 bg-white">
    <!-- SVG colored area + title as a wrapper -->
    <div class="relative">
      <!-- The Wave SVG (background) -->
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 240" class="block w-full" :style="{ backgroundColor: bgColor }">
        <path fill="#fefffe" fill-opacity="1" d="M0,224L120,192C240,160,480,96,720,96C960,96,1200,160,1320,192L1440,224L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path>
      </svg>
      <!-- Title floating above the wave -->
      <h2 class="absolute w-full text-center text-3xl md:text-4xl mb-12 font-bold text-gray-800 top-4 lg:top-34 pt-10 pb-6 z-10 pointer-events-none select-none"
        style=" /* fine tune: move higher or lower with pt-10 or top-0/1/2 etc. */
">
        Mes services
      </h2>
    </div>

    
    <div class="mb-32 container max-w-5xl mx-auto px-6">
      <h2 class="text-xl md:text-2xl font-semibold mb-12">Ce que je propose en tant qu'orthopédagogue</h2>
      <div class="flex container max-w-5xl mx-auto flex-wrap mb-4 items-start justify-center">
        <div class="w-1/3 flex justify-center align-center p-3 text-center">J'offre un environnement ou la confiance et l'écoute sans jugement sont une priorité</div>
        <div class="w-1/3 flex justify-center align-center p-3 text-center">J'observe l'apprenant dans sa globalité pour découvir et comprendre ses mécanismes émotionnels et cognitifs et ses comportements</div>
        <div class="w-1/3 flex justify-center align-center p-3 text-center">J'identifie son style d'apprentissage pour prendre appui sur ses forces</div>
        <div class="w-1/3 flex justify-center align-center p-3 text-center">Je propose un accompagnement personnalisé basé sur ses talents pour faire cheminer l'apprennant vers l'autonomie</div>
        <div class="w-1/3 flex justify-center align-center p-3 text-center">Je soutiens les parents démunis pendant le temps des devoirs. Je les rassures ou les oriente vers d'autres professionnels</div>
        <div class="w-1/3 flex justify-center align-center p-3 text-center">Je fais le lien et je travaille ne collaboration avec les enseignants, les orthophonistes et tous les intervenants impliquésdans la vie de l'apprenant, pour tendre vers le but commun de son mieux être</div>
      </div>
    </div>

    <div class="container max-w-5xl mx-auto px-6">
      <div class="flex flex-col gap-10">
      <!-- Row 1 -->
      <div class="flex flex-col md:flex-row items-center md:items-start">
        <div class="w-full md:w-1/3 flex justify-center md:justify-start mb-4 md:mb-0">
          <div class="w-48 h-fit">
            <SvgBlob2 />
          </div>
        </div>
        <div class="w-full md:w-2/3 flex flex-col items-center md:items-start text-center md:text-left">
          <h3 class="text-xl font-semibold mb-2">Pour commencer</h3>
          <div class="flex justify-center md:justify-start mb-3">
            <span class="w-16 border-b-5 border-dotted border-[#61848D]"></span>
          </div>
          <p class="text-gray-700 text-base">
            Notre objectif est de rendre chaque étape de l'apprentissage aussi enrichissante et positive que possible.
          </p>
        </div>
      </div>
      <!-- Row 2 (reverse order) -->
      <div class="flex flex-col md:flex-row-reverse items-center md:items-start">
        <div class="w-full md:w-1/3 flex justify-center md:justify-end mb-4 md:mb-0">
          <div class="w-48 h-fit">
            <SvgBlob1 />
          </div>
        </div>
        <div class="w-full md:w-2/3 flex flex-col items-center md:items-start text-center md:text-left md:pr-6">
          <h3 class="text-xl font-semibold mb-2">L'accompagnement</h3>
          <div class="flex justify-center md:justify-start mb-3">
            <span class="w-16 border-b-5 border-dotted border-[#c6b2a8]"></span>
          </div>
          <p class="text-gray-700 text-base">
            Chaque activité est conçue pour répondre aux besoins uniques de chaque enfant, favorisant ainsi leur développement optimal.
          </p>
        </div>
      </div>
      <!-- Row 3 (normal order again) -->
      <div class="flex flex-col md:flex-row items-center md:items-start">
        <div class="w-full md:w-1/3 flex justify-center md:justify-start mb-4 md:mb-0">
          <div class="w-48 h-fit">
            <SvgBlob3 />
          </div>
        </div>
        <div class="w-full md:w-2/3 flex flex-col items-center md:items-start text-center md:text-left">
          <h3 class="text-xl font-semibold mb-2"><Label>L'offre Seniors</Label></h3>
          <div class="flex justify-center md:justify-start mb-3">
            <span class="w-16 border-b-5 border-dotted border-[#61848D]"></span>
          </div>
          <p class="text-gray-700 text-base">
            Nous vous invitons à découvrir notre centre d'orthopédagogie et à rencontrer notre équipe spécialisée afin de trouver ce qui vous convient le mieux.
          </p>
        </div>
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