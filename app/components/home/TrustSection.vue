<template>
    <section class="relative py-32 bg-[#eff2f5] overflow-hidden">
      <SvgForms class="absolute left-0 top-0  pointer-events-none select-none z-0"/>
        <!-- Content -->
        <div class="container mx-auto relative z-10 flex flex-col items-center text-center max-w-2xl px-4">
        <h2 class="text-3xl md:text-4xl font-semibold text-gray-800 mb-2">
            2.000 familles<br/>
            <span class="font-normal">ont fait confiance à notre centre d'orthopédagogie.</span>
        </h2>
        <p class="mt-1 mb-6 text-base md:text-lg text-gray-700">
            <span class="italic">Confiez-nous vos enfants</span> 
            et partez travailler en toute tranquillité d'esprit.
        </p>
        <NuxtLink
            to="/contact"
            class="inline-block bg-[#c7b2a9] text-gray-800 text-lg px-7 py-3 rounded-md border border-[#191615] hover:bg-[#a18c83] transition font-medium shadow"
        >
            Contactez-nous
        </NuxtLink>
        </div>
    </section>
</template>