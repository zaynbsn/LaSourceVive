<template>
  <section class="relative pb-20 bg-white">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 240" style="background-color: #eef3f5;">
      <path fill="#fefffe" fill-opacity="1" d="M0,224L120,192C240,160,480,96,720,96C960,96,1200,160,1320,192L1440,224L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path>
    </svg>
    <div class="container mx-auto px-6">
      <!-- Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
        <!-- Block 1 -->
        <div class="flex flex-col items-center text-center">
          <!-- SVG Clipped Image -->
          <div class="w-48 h-fit mb-6">
            <SvgBlob1 />
          </div>
          <h3 class="text-xl font-semibold mb-2">Notre mission</h3>
          <div class="flex justify-center mb-3">
            <span class="w-10 border-b-2 border-dotted border-[#728075]"></span>
          </div>
          <p class="text-gray-700 text-base">
            Notre objectif est de rendre chaque étape de l'apprentissage aussi enrichissante et positive que possible.
          </p>
        </div>
        
        <div class="flex flex-col items-center text-center">
          <!-- SVG Clipped Image -->
          <div class="w-48 h-fit mb-6">
            <SvgBlob2 />
          </div>
          <h3 class="text-xl font-semibold mb-2">Pour chaque enfant</h3>
          <div class="flex justify-center mb-3">
            <span class="w-10 border-b-2 border-dotted border-[#728075]"></span>
          </div>
          <p class="text-gray-700 text-base">
            Chaque activité est conçue pour répondre aux besoins uniques de chaque enfant, favorisant ainsi leur développement optimal.
          </p>
        </div>

        <div class="flex flex-col items-center text-center">
          <!-- SVG Clipped Image -->
          <div class="w-48 h-fit mb-6">
            <SvgBlob3 />
          </div>
          <h3 class="text-xl font-semibold mb-2">Politique de la porte ouverte</h3>
          <div class="flex justify-center mb-3">
            <span class="w-10 border-b-2 border-dotted border-[#728075]"></span>
          </div>
          <p class="text-gray-700 text-base">
            Nous vous invitons à découvrir notre centre d'orthopédagogie et à rencontrer notre équipe spécialisée afin de trouver ce qui vous convient le mieux.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>