<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-5(data-aos="fade-right") Los medicamentos que son elaborados directamente en los servicios de farmacias, deben contemplar los requisitos exigidos por la norma, que permitan con esto garantizar la calidad de dichas preparaciones, para esto se debe tener muy en cuenta tanto las responsabilidades del personal como la documentación que se debe generar con el proceso. Por lo anterior este componente formativo contiene todos los temas necesarios para obtener las bases técnicas de los procesos de elaboración y control de calidad de preparaciones magistrales y lo puede visualizar a través del siguiente mapa conceptual.

    .row.justify-content-center
      .col-lg-10.mb-5(data-aos="fade-right")
        figure
          img(src="@/assets/curso/sintesis.svg", alt="Esquema gráfico que resume lo abordado en el componente formativo, indicando lo relacionado con los procesos de elaboración y control de calidad de magistrales no estériles, los cuales son: Responsabilidad del preparador Elemento técnicos de elaboración Estabilidad de las preparaciones magistrales no estériles Control de calidad de preparación magistrales no estériles")
      .col-auto(data-aos="fade-left")
        a.anexo.mb-5(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
