

<template>
  <SvgTopWave />
  <section class="container mx-auto px-4 -mt-12 md:-mt-24 pb-0">
    <h1 class="w-full text-center text-3xl md:text-5xl font-bold text-[#61848D] lg:top-34 pt-10 mb-8 md:mb-16 z-10 pointer-events-none select-none"
        style=" /* fine tune: move higher or lower with pt-10 or top-0/1/2 etc. */
    ">
        Contact
    </h1>
    <div class="flex flex-col justify-center md:flex-row gap-12 md:gap-20">
      <!-- Contact Form -->
      <form v-if="!isEmailSent" class="flex-1 bg-white rounded-xl border border-[#C6B2A8] px-6 py-7 max-w-2xl" @submit.prevent="sendMail">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label class="block text-[#61848D] mb-1">Nom*</label>
            <input type="text" v-model="template_param.NOM" name="NOM" required class="w-full border border-[#dbbaa9] px-3 py-2 rounded focus:outline-none focus:border-[#61848D] transition" placeholder="Votre nom" />
          </div>
          <div>
            <label class="block text-[#61848D] mb-1">Numéro de téléphone</label>
            <input type="tel" v-model="template_param.PHONE" name="PHONE" class="w-full border border-[#dbbaa9] px-3 py-2 rounded focus:outline-none focus:border-[#61848D] transition" placeholder="+33" />
          </div>
        </div>
        <div class="mt-5">
          <label class="block text-[#61848D] mb-1">E-mail*</label>
          <input type="email" v-model="template_param.EMAIL" name="EMAIL" required class="w-full border border-[#dbbaa9] px-3 py-2 rounded focus:outline-none focus:border-[#61848D] transition" placeholder="email@example.com" />
        </div>
        <div class="mt-5">
          <label class="block text-[#61848D] mb-1">Sujet*</label>
          <input type="text" v-model="template_param.SUJET" name="SUJET" required class="w-full border border-[#dbbaa9] px-3 py-2 rounded focus:outline-none focus:border-[#61848D] transition" placeholder="Sujet" />
        </div>
        <div class="mt-5">
          <label class="block text-[#61848D] mb-1">Demande*</label>
          <textarea required v-model="template_param.DEMANDE" name="DEMANDE" class="w-full border border-[#dbbaa9] px-3 py-2 min-h-[90px] rounded focus:outline-none focus:border-[#61848D] transition" placeholder="Votre demande"></textarea>
        </div>
        <div class="mt-7 flex justify-end">
          <button
          type="submit"
          class="px-6 py-2 bg-[#dbbaa9] text-[#61848D] rounded-full font-medium shadow hover:bg-[##e6c6b5] transition"
          >
            Envoyer
        </button>
        </div>
      </form>

      <div class="text-[#61848D]" v-else>
        <p>Message envoyé avec succès !</p>
        <p>Je vous contacterai dès que possible.</p>
      </div>

      <!-- Contact Info -->
      <aside class="w-full mx-2 md:w-82 flex flex-col gap-5 ">
        <div class="font-semibold text-lg text-[#61848D] mb-2">Julie BOISSON <br />Orthopédagogue certifiée</div>
        <div class="space-y-4 text-base ">
        <div class="flex items-start gap-2 text-[#61848D] ">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
            </svg>
            <a 
              href="https://www.google.com/maps/place/5+Av.+de+la+Mandallaz,+74000+Annecy/@45.8988595,6.1133409,1579m/data=!3m2!1e3!4b1!4m6!3m5!1s0x478b8556954aa3d1:0xc9c9d6546881c5f2!8m2!3d45.8988558!4d6.1159158!16s%2Fg%2F11nntq73ls?entry=ttu&g_ep=EgoyMDI1MDkxNS4wIKXMDSoASAFQAw%3D%3D" 
              target="_blank"
              class="hover:underline"
            >
              avenue de la madallaz <br />74000 Annecy
            </a>
        </div>
        <div class="flex items-start gap-2 text-[#61848D]">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
            </svg>
            +33 6 65 41 74 32
        </div>
        <div class="flex items-start gap-2 text-[#61848D]">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
            </svg>
            <a href="mailto:info@yourcompany.example.com" class="hover:underline break-all">julieboisson@gmail.com</a>
        </div>
        </div>
      </aside>
    </div>
  </section>
</template>
<script setup>
  import { SvgTopWave } from '#components';
  import emailjs from '@emailjs/browser';

  const config = useRuntimeConfig();
  const inputFieldReset = ref(null);
  let isEmailSent = ref(false)

  let template_param = ref({
    NOM: '',
    EMAIL: '',
    PHONE: '',
    SUJET: '',
    DEMANDE: '',
  })
  const sendMail = () => {
    // emailjs.sendForm('SERVICE_ID', 'TEMPLATE_ID', form.value, 'USER_ID')
    emailjs.send(config.public.emailServiceId, config.public.emailTemplateId, template_param.value, config.public.emailApiKey)
    .then(() => {
      inputFieldReset.value = " ";
      isEmailSent.value = true
    }, (error) => {
      alert('Message not sent: ' + (error.text ?? JSON.stringify(error)))
      console.log("error")
    }); 
  }
</script>