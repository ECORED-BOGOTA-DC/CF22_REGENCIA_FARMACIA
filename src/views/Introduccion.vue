<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="fade-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .p-4(style="background-color:#EAF8FE;")
      .row
        .col-lg-5.mb-4.mb-lg-0(style="place-self:center;")
          figure
            img(src="@/assets/curso/intro1.svg" data-aos="fade-right")
        .col-lg-7(style="place-self:center;")
          p(data-aos="fade-left") Los productos farmacéuticos conocidos como preparaciones magistrales son una parte importante del sector farmacéutico y es fundamental para brindarles a los usuarios una correcta atención médica. Con este contenido relacionado con la producción y el control de calidad de las preparaciones magistrales tópicas no estériles, se busca ayudar a definir qué constituye las buenas prácticas de preparaciones magistrales y proporcionar información general al aprendiz para que obtenga conocimientos en dicha disciplina.
          p.mt-4.mb-0(data-aos="fade-left") Las preparaciones magistrales se diferencian de la fabricación de medicamentos, la cual se basa en las B.P.F. (Buenas Prácticas de Fabricación). Algunos de los aspectos que las diferencian son:
    
    .row.mt-5
      .col-lg-6.mb-4.mb-lg-0(style="place-self:center;")
        ul.fa-ul
          li.mb-3(data-aos="fade-right")
            i.fas.fa-atom.fa-li(style="color:#FF9D00;")
            | La existencia de una relación específica entre el profesional en medicina, el paciente y el farmacéutico encargado de la preparación.
          li.mb-3(data-aos="fade-right")
            i.fas.fa-atom.fa-li(style="color:#FF9D00;")
            | La cantidad de medicamento que se prepara anticipando una receta médica o una orden.
          li.mb-3(data-aos="fade-right")
            i.fas.fa-atom.fa-li(style="color:#FF9D00;")
            | Los aspectos relacionados con las ventas.
        p.mt-4(data-aos="fade-right") En los aspectos relacionados con la preparación magistral de los medicamentos, las responsabilidades del farmacéutico se limitan a realizar la preparación de este producto farmacéutico de acuerdo con las fórmulas médicas y finalmente la dispensación de las preparaciones cumpliendo con los requisitos establecidos por la normatividad farmacéutica. Es necesario que el profesional que prepare las formulaciones sea un conocedor de la normatividad relacionada con las preparaciones magistrales.
        p.mt-4(data-aos="fade-right") La responsabilidad del profesional que realice la preparación de las fórmulas magistrales es que los parámetros relacionados con el contenido, la calidad, porcentaje de pureza, correcto envasado y etiquetado, según lo dispuesto por las buenas prácticas de preparación magistral, se cumplan a cabalidad.
      .col-lg-6(style="place-self:center;")
        figure
          img(src="@/assets/curso/intro2.svg" data-aos="fade-left")



    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
