<template>
    <section class="relative py-32 bg-[#eff2f5] overflow-hidden">
      <SvgForms class="absolute left-0 top-0  pointer-events-none select-none z-0"/>
        <!-- Content -->
        <div class="absolute top-[10%] left-1/2 -translate-x-1/2 flex justify-center items-center w-16 h-16 rounded-full bg-[#61848D] mb-4 shadow-lg">
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
            <text x="50%" y="135%" text-anchor="middle" font-size="54" font-weight="bold" fill="#fff" font-family="Georgia, serif">“</text>
          </svg>
        </div>

        <div class="container mx-auto relative z-10 flex flex-col items-center text-center max-w-2xl px-4">
        <h2 class="text-xl md:text-2xl font-semibold text-[#61848d] mb-6">
            <span class="font-normal italic ">Ne me jugez pas sur mes succès, jugez moi sur le nombre de fois que je suis tombé et où je me suis relevé à nouveau</span>
        </h2>
        <h2 class="text-2xl md:text-3xl font-semibold text-[#61848d] mb-8">
            Nelson Mandela<br/>
        </h2>
        <NuxtLink
          to="/contact" 
          class="px-6 py-2 bg-[#61848d] text-white rounded-full font-medium shadow hover:bg-[#6e929c] transition"
          >
            Prendre contact
          </NuxtLink>
        </div>
    </section>
</template>