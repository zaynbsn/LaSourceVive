<script setup lang="ts">
import { SvgTopWave } from '#components';

</script>

<template>
  <SvgTopWave />
  <section class="container mx-auto px-4 -mt-12 md:-mt-24 pb-16">
    <h2 class="w-full text-center text-3xl md:text-5xl font-bold text-gray-800 lg:top-34 pt-10 mb-8 md:mb-16 z-10 pointer-events-none select-none"
        style=" /* fine tune: move higher or lower with pt-10 or top-0/1/2 etc. */
    ">
        Contact
    </h2>
    <div class="flex flex-col justify-center md:flex-row gap-12 md:gap-20">
      <!-- Contact Form -->
      <form class="flex-1 bg-white rounded-xl border border-[#C6B2A8] px-6 py-7 max-w-2xl" @submit.prevent>
        <p class="mb-5 text-gray-700">
          Contactez-nous pour tout ce qui concerne notre entreprise ou nos services.<br />
          Nous ferons de notre mieux pour vous répondre dans les plus brefs délais.
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label class="block text-gray-700 mb-1">Nom*</label>
            <input type="text" required class="w-full border border-[#c7b2a9] px-3 py-2 rounded focus:outline-none focus:border-[#61848D] transition" placeholder="Votre nom" />
          </div>
          <div>
            <label class="block text-gray-700 mb-1">Numéro de téléphone</label>
            <input type="tel" class="w-full border border-[#c7b2a9] px-3 py-2 rounded focus:outline-none focus:border-[#61848D] transition" placeholder="+33" />
          </div>
        </div>
        <div class="mt-5">
          <label class="block text-gray-700 mb-1">E-mail*</label>
          <input type="email" required class="w-full border border-[#c7b2a9] px-3 py-2 rounded focus:outline-none focus:border-[#61848D] transition" placeholder="email@example.com" />
        </div>
        <div class="mt-5">
          <label class="block text-gray-700 mb-1">Sujet*</label>
          <input type="text" required class="w-full border border-[#c7b2a9] px-3 py-2 rounded focus:outline-none focus:border-[#61848D] transition" placeholder="Sujet" />
        </div>
        <div class="mt-5">
          <label class="block text-gray-700 mb-1">Question*</label>
          <textarea required class="w-full border border-[#c7b2a9] px-3 py-2 min-h-[90px] rounded focus:outline-none focus:border-[#61848D] transition" placeholder="Votre question"></textarea>
        </div>
        <div class="mt-7 flex justify-end">
          <button type="submit" class="bg-[#c7b2a9] text-[#232629] font-medium px-8 py-2 rounded transition hover:bg-[#a9938a] shadow">
            Soumettre
          </button>
        </div>
      </form>
      <!-- Contact Info -->
      <aside class="w-full mx-2 md:w-82 flex flex-col gap-5 ">
        <div class="font-semibold text-lg text-[#232629] mb-2">Mes informations</div>
        <div class="space-y-4 text-base ">
        <div class="flex items-start gap-2 ">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
            </svg>
            5 avenue de la madallaz, 74000 Annecy
        </div>
        <div class="flex items-start gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
            </svg>
            +33 6 65 41 74 32
        </div>
        <div class="flex items-start gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
            </svg>
            <a href="mailto:info@yourcompany.example.com" class="hover:underline break-all">julie.orthopedagogie74@gmail.com</a>
        </div>
        </div>
      </aside>
    </div>
  </section>
</template>