<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="fade-up")
      .titulo-principal__numero
        span 1
      h1 La responsabilidad del preparador
    
    p(data-aos="fade-up") El profesional encargado de la elaboración de las preparaciones magistrales es responsable de asegurar que estas tengan la calidad necesaria. Dentro de los factores más importantes se incluyen al menos los siguientes aspectos generales (ver figura 1):

    .col-lg-6.mt-5.m-auto
      .titulo-sexto.color-acento-botones
        h5.d-block Figura 1
        span #[em Responsabilidades del preparador]
      figure.mt-5
        img(src="@/assets/curso/tema1/1.svg" data-aos="zoom-in-up")

    
 

      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>
<style lang="sass"></style>
