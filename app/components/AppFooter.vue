<template>
  <footer class="bg-[#61848d] text-white py-10">
    <div class="container mx-auto px-4 flex flex-col items-center">
      <!-- Socials -->
      <div class="flex gap-4 mb-5">
        <a href="#" aria-label="Facebook" class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white text-[#1A1716] hover:bg-gray-200 transition">
          <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
            <path d="M22 12.065C22 6.509 17.523 2 12 2S2 6.509 2 12.065c0 5.016 3.657 9.155 8.438 9.877v-6.991h-2.54v-2.886h2.54V9.845c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.49h-1.261c-1.242 0-1.629.775-1.629 1.564v1.88h2.773l-.443 2.887h-2.33v6.991C18.343 21.22 22 17.08 22 12.065"/>
          </svg>
        </a>
        <a href="https://www.instagram.com/orthopedagogie_julieboisson/" target="_blank" aria-label="Twitter" class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white text-[#1A1716] hover:bg-gray-200 transition">
          <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
            <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2ZM4.5 7.75v8.5A3.25 3.25 0 0 0 7.75 19.5h8.5A3.25 3.25 0 0 0 19.5 16.25v-8.5A3.25 3.25 0 0 0 16.25 4.5h-8.5A3.25 3.25 0 0 0 4.5 7.75ZM12 7.25A4.75 4.75 0 1 1 7.25 12 4.76 4.76 0 0 1 12 7.25Zm0 1.5A3.25 3.25 0 1 0 15.25 12 3.25 3.25 0 0 0 12 8.75Zm5-1.38a1 1 0 1 1-1 1 1 1 0 0 1 1-1Z"/>
          </svg>
        </a>
      </div>

      <!-- Address & contact -->
      <div class="text-center flex flex-col gap-2 items-center text-lg">
        <div class="mb-1">
          <a href="#" class="hover:underline">
            5 avenue de la Mandallaz · 74000 Annecy · France
          </a>
        </div>

        <div>
          <a href="mailto:info@yourcompany.example.com" class="hover:underline">julie.orthopedagogie74@gmail.com</a>
        </div>
        
        <div>
            <a href="tel:+15555555555" class="hover:underline">+33 6 65 41 74 32</a>
        </div>
      </div>

      <!-- Logo (replace with your asset) -->
      <div class="mb-6">
        <img src="/medias/logo-placeholder.png" alt="Your Logo" class="h-14 object-contain mx-auto opacity-90" />
      </div>

      <!-- Copyright -->
      <div class="text-center w-full border-t border-[#333] pt-6 mt-2 text-base opacity-80 font-light">
        Copyright © La Source Vive
      </div>
    </div>
  </footer>
</template>