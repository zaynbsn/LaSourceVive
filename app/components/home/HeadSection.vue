<script setup lang="ts">
import { NuxtLink, SvgTopWave } from '#components';

</script>

<template>
  <section class="relative overflow-hidden bg-cover bg-center" style="background-image: url('/medias/background-image-home-edited8.jpg'); background-color: #61848D;">
    <SvgTopWave color="#eef2f5"/>
    <!-- <div style="background-image: url('/medias/background-image-home.jpeg'); background-color: #61848D; filter: blur(6px);">
    </div> -->
    <!-- <div class="absolute inset-0 bg-black/40 z-0"></div> -->

    <!-- Content -->
    <div class="relative z-10 text-white text-center md:text-start max-w-6xl mx-auto">
      <h1 class="text-4xl md:text-6xl font-semibold font-open">Julie Boisson<br> Orthopédagogue certifiée</h1>
      <p class="mt-6 text-xl md:text-3xl">L'orthopédagogie au service des apprentissages</p>
      <p class="mt-4 text-xl md:text-3xl">Mieux se connaître pour mieux apprendre.</p>
    </div>

    <!-- Bottom Wave -->
    <!-- <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#eff2f5" fill-opacity="1" d="M0,256L34.3,261.3C68.6,267,137,277,206,272C274.3,267,343,245,411,202.7C480,160,549,96,617,90.7C685.7,85,754,139,823,144C891.4,149,960,107,1029,106.7C1097.1,107,1166,149,1234,154.7C1302.9,160,1371,128,1406,112L1440,96L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path>
    </svg> -->

    <SvgBottomWave />

  </section>
</template>
