<template>
<section class="relative pb-20 bg-white">
    <!-- SVG colored area + title as a wrapper -->
    <div class="relative">
      <!-- The Wave SVG (background) -->
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 240" class="block w-full" :style="{ backgroundColor: bgColor }">
        <path fill="#fefffe" fill-opacity="1" d="M0,224L120,192C240,160,480,96,720,96C960,96,1200,160,1320,192L1440,224L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path>
      </svg>
      <!-- Title floating above the wave -->
      <h2 class="absolute w-full text-center text-3xl md:text-4xl mb-12 font-bold text-[#61848D] top-4 top-8 md:top-12 lg:top-20 xl:top-28 2xl:top-42 pt-10 pb-6 z-10 pointer-events-none select-none"
        style=" /* fine tune: move higher or lower with pt-10 or top-0/1/2 etc. */"
      >
        Mes services
      </h2>
    </div>


    
    <!-- <div class="mb-32 container max-w-5xl mx-auto px-6">
      <h2 class="text-xl md:text-2xl font-semibold mb-12">Ce que je propose en tant qu'orthopédagogue</h2>
      <div class="flex container max-w-5xl mx-auto flex-wrap mb-4 items-start justify-center">
        <div class="w-1/3 flex justify-center align-center p-3 text-center">J'offre un environnement ou la confiance et l'écoute sans jugement sont une priorité</div>
        <div class="w-1/3 flex justify-center align-center p-3 text-center">J'observe l'apprenant dans sa globalité pour découvir et comprendre ses mécanismes émotionnels et cognitifs et ses comportements</div>
        <div class="w-1/3 flex justify-center align-center p-3 text-center">J'identifie son style d'apprentissage pour prendre appui sur ses forces</div>
        <div class="w-1/3 flex justify-center align-center p-3 text-center">Je propose un accompagnement personnalisé basé sur ses talents pour faire cheminer l'apprennant vers l'autonomie</div>
        <div class="w-1/3 flex justify-center align-center p-3 text-center">Je soutiens les parents démunis pendant le temps des devoirs. Je les rassures ou les oriente vers d'autres professionnels</div>
        <div class="w-1/3 flex justify-center align-center p-3 text-center">Je fais le lien et je travaille ne collaboration avec les enseignants, les orthophonistes et tous les intervenants impliquésdans la vie de l'apprenant, pour tendre vers le but commun de son mieux être</div>
      </div>
    </div> -->

    <section class="max-w-6xl mx-auto mt-16 md:mt-0 pb-16 px-4">
      <h2 class="text-2xl md:text-3xl font-bold text-[#61848D] mb-12 text-center">
        Ce que je propose en tant qu’orthopédagogue
      </h2>
    
      <img src="/medias/servicesBlobs.png" draggable="false" class="hidden sm:block" />
    </section>



    <div class="container max-w-5xl mx-auto px-6 -mt-12 sm:-mt-0">
      <div class="flex flex-col gap-10">
        <!-- Row 1 -->
        <div class="flex flex-col md:flex-row items-center md:items-start">
          <div class="w-full md:w-1/4 flex justify-center md:justify-start mb-4 md:mb-0">
            <div class="w-48 h-fit">
              <SvgBlob2 />
            </div>
          </div>
          <div class="w-full md:w-3/4 flex flex-col items-center md:items-start text-left">
            <h3 class="text-xl font-semibold mb-2 text-gray-800">Pour commencer</h3>
            <div class="flex justify-center md:justify-start mb-3">
              <span class="w-16 border-b-5 border-dotted border-[#61848D]"></span>
            </div>
            <h4 class="text-base font-medium mb-2 text-gray-800">L’Entretien téléphonique <span class="ml-2 italic">- offert -</span></h4>
            <p class="text-[#61848d] text-base">
              Il vous permet d’exposer les raisons qui vous amènent à me consulter. <br />
              A votre écoute, je prends note de vos préoccupations et vous fait préciser le contexte de votre demande.<br />
              A la fin de cet échange, nous convenons d’un premier entretien orthopédagogique.<br />
              Vous recevez un mail de confirmation accompagné d’un questionnaire orthopédagogie à rapporter complété lors de ce premier RV. 
            </p>
            <h4 class="text-base font-medium mb-2 mt-4 text-gray-800">Le premier entretien orthopédagogique  - 1h30 à 2h - 82€</h4>
            <p class="text-[#61848d] text-base">
              Sur RV, il se déroule au cabinet en présence de la famille.
              <br />C’est un moment d'échange privilégié où chacun pourra librement exprimer ses difficultés et ses ressentis.
              <br />Je vous présenterai l’orthopédagogie et ma façon d’accompagner. 
              <br />Ensemble, en nous appuyant sur le questionnaire orthopédagogique, sur les éventuels bilans effectués et sur mon expertise, nous pourrons cibler les besoins et les priorités et convenir de la mise en œuvre d’un suivi orthopédagogique. 
            </p>
          </div>
        </div>
        <!-- Row 2 (reverse order) -->
        <div class="flex flex-col md:flex-row-reverse items-center md:items-start">
          <div class="w-full md:w-1/4 flex justify-center md:justify-end mb-4 md:mb-0">
            <div class="w-48 h-fit">
              <SvgBlob1 />
            </div>
          </div>
          <div class="w-full md:w-3/4 flex flex-col items-center md:items-start text-left md:pr-6">
            <h3 class="text-xl font-semibold mb-2 text-gray-800">L'accompagnement</h3>
            <div class="flex justify-center md:justify-start mb-3">
              <span class="w-16 border-b-5 border-dotted border-[#61848D]"></span>
            </div>
            <h4 class="text-base font-medium mb-2 text-gray-800">En séances individuelles au cabinet</h4>
            <p class="text-[#61848d] text-base">
              élèves du primaire  50mn + 10mn de débriefing avec le parent   - 47€ -
              <br/>élèves du secondaires, étudiants, adultes	 - 1h  62€ - 
                  - 1h30  84€ -
            </p>
            <h4 class="text-base font-medium mb-2 mt-4 text-gray-800">En séances collectives au cabinet</h4>
            <p class="text-[#61848d] text-base">
              Ces séances peuvent être proposées en cas de demandes présentant des similarités 
              <br/> De 2 à 4 participants  - tarif sur mesure - 
              <br/> Sont compris dans les prestations: le temps de restitution des observations à la famille, la prise de contact avec les enseignants et autres spécialistes qui interviennent auprès de l'apprenant.
              <br/> Le nombre et la fréquence des séances s’ajustent pour répondre aux besoins de chacun.
            </p>
            
            <h4 class="text-base font-medium mb-2 mt-4 text-gray-800">Participation aux ESS  - 35€ -</h4>
            <p class="text-[#61848d] text-base">
              Sur demande, je peux participer aux réunions des Equipes de Suivi de Scolarisation.
            </p>
            
            <h4 class="text-base font-medium mb-2 mt-4 text-gray-800">Temps d’observation en classe   - sur devis - </h4>
            <p class="text-[#61848d] text-base">
              Selon le cas, et avec l’accord de l’équipe enseignante, je peux effectuer des séances d'observation de l'apprenant en classe. 
            </p>
          </div>
        </div>
        <!-- Row 3 (normal order again) -->
        <div class="flex flex-col md:flex-row items-center md:items-start">
          <div class="w-full md:w-1/4 flex justify-center md:justify-start mb-4 md:mb-0">
            <div class="w-48 h-fit">
              <SvgBlob3 />
            </div>
          </div>
          <div class="w-full md:w-3/4 flex flex-col items-center md:items-start text-left">
            <h3 class="text-xl font-semibold mb-2 text-gray-800">Séniors   - tarif sur mesure -</h3>
            <div class="flex justify-center md:justify-start mb-3">
              <span class="w-16 border-b-5 border-dotted border-[#61848D]"></span>
            </div>
            <p class="text-[#61848d] text-base">
              Basées sur l'intelligence collective, ces séances participatives se déroulent au cabinet en petit groupe de 2 à 6 personnes.
              Elles ont pour objectif d’offrir un contexte stimulant.
              Les activités visuelles et auditives permettent de :
            </p>

            <ul class="text-[#61848d] text-base ml-0 md:ml-6">
              <li>  • favoriser le maintien social</li>
              <li>  • favoriser l’effort intellectuel</li>
              <li>  • entretenir et dynamiser la mémorisation</li>
              <li>  • entretenir et dynamiser l’attention et la concentration.</li>
            </ul>
            <p class="text-[#61848d] text-base mt-2">
              Elles s’adressent aux séniors sans pathologie neurologique avérée.
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