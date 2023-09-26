<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Elementos técnicos de elaboración según forma farmacéutica

    .cont_2_1.pt-5
      .row.justify-content-center.align-items-center
        .col-lg-8.order-lg-1.order-2(data-aos="fade-right")
          p El término preparaciones magistrales está relacionado con todas las formas terminadas elaboradas por un profesional farmacéutico competente o que sea supervisor de alguien más (Tecnólogo en Regencia de Farmacia). En estas preparaciones se incluyen diferentes formas farmacéuticas.
          .cajon.color-secundario.mt-5.p-4(style="background-color:#E4DDFA;")
            p.mb-0 #[strong Si para la elaboración de las preparaciones magistrales se utilizan sustancias sometidas a control especial, hay que realizar las consultas respectivas frente a las autoridades sanitarias para verificar los requerimientos]. Luego del proceso de elaboración de las preparaciones magistrales se debe asegurar que cada preparación contenga una cantidad del principio activo entre el 90% y el 110%. Dicha información debe ser incluida en la etiqueta del producto.
        .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
          figure.text-center
            img(src="@/assets/curso/tema2/2.png" style="max-width:450px;display:inline;" alt="Imagen decorativa") 
    
    p.mt-5(data-aos="fade-right") Algunas de las formas farmacéuticas utilizadas en las preparaciones magistrales no estériles son:

    .row.mt-5(style="position:relative;")
      .col-lg-3.col-6.mb-4.mb-lg-0(style="place-self:center;")
        div(style="position:absolute;left:0;bottom:0px;z-index:0;")
          img(src="@/assets/curso/tema2/3.png" data-aos="fade-up" style="width:550px;")
        figure.text-center
          img(src="@/assets/curso/tema2/4.png" data-aos="fade-right" style="position:relative;z-index:1;max-width:450px;display:inline;" alt="Imagen decorativa")
      .col-lg-1.d-lg-flex.d-none
      .col-lg-8(style="place-self:center;")
        h4(data-aos="fade-left") Cápsulas, tabletas, polvos, tabletas de disolución bucal
        p.mt-4(data-aos="fade-left") El profesional que realice las preparaciones debe elaborar una cantidad que permita que al momento de la dispensación se entregue exactamente la cantidad recetada. Se deben aplicar las siguientes prácticas y precauciones en el momento de la elaboración de estas formas farmacéuticas sólidas:
    
    .row.mt-5
      .col-lg-3.col-6.mb-4.mb-lg-0(style="place-self:end;")
        figure.text-center
          img(src="@/assets/curso/tema2/5.svg" data-aos="fade-right" style="max-width:450px;display:inline;" alt="Imagen decorativa") 
      .col-lg-9
        .row
          .col-lg-4.mb-4
            .tarjeta-numerada.color-acento-contenido.h-100.p-5(data-aos="fade-right")
              .tarjeta-numerada__numero
                .h2(style="color:#12263F;") 1
              p Disminuir los ingredientes que sean sólidos a partículas de mínimo tamaño para que sean homogéneas.
          .col-lg-4.mb-4
            .tarjeta-numerada.color-acento-contenido.h-100.p-5(data-aos="flip-up")
              .tarjeta-numerada__numero
                .h2(style="color:#12263F;") 2
              p Realizar los controles que se necesiten para asegurar que la mezcla sea homogénea.
          .col-lg-4.mb-4
            .tarjeta-numerada.color-acento-contenido.h-100.p-5(data-aos="fade-left")
              .tarjeta-numerada__numero
                .h2(style="color:#12263F;") 3
              p Controlar la humedad ya que puede ocasionar adhesión a las paredes del envase, ablandamiento o que se disuelva parcialmente la cubierta de las cápsulas.
          .col-lg-4.mb-4
            .tarjeta-numerada.color-acento-contenido.h-100.p-5(data-aos="fade-right")
              .tarjeta-numerada__numero
                .h2(style="color:#12263F;") 4
              p Pesar con exactitud para asegurar que cada unidad contenga entre el 90% y el 110% del peso calculado.
          .col-lg-4.mb-4
            .tarjeta-numerada.color-acento-contenido.h-100.p-5(data-aos="fade-left")
              .tarjeta-numerada__numero
                .h2(style="color:#12263F;") 5
              p Envasar según las especificaciones de envasado de cápsulas y tabletas, salvo que se indique lo contrario en la monografía.
    
    .cont_2_2
      .pt-5
        h4.pt-5(data-aos="fade-left") Emulsiones, soluciones y suspensiones
        p.mt-4(data-aos="fade-right") Para la preparación de estas formas farmacéuticas líquidas, se debe lograr el producto con un exceso del 2% a 3% debido a que pueden haber pérdidas o adhesión de estas a los equipos que se utilicen para fabricación. Se deben aplicar las siguientes prácticas y precauciones en el momento de la elaboración de estas formas farmacéuticas líquidas:

        .row.mt-5
          .col-lg-5.col-10.mb-lg-0.mb-4(style="place-self:center;")
            figure.text-center
              img(src="@/assets/curso/tema2/7.svg" data-aos="fade-right" style="max-width:450px;display:inline;" alt="Imagen decorativa") 
          .col-lg-7(style="place-self:center;")
            LineaTiempoD.color-primario
              p.text-small(numero="1" titulo="Paso 1") El peso de cada envase lleno debe estar entre el 100% y el 110% del volumen declarado en la etiqueta.
              p.text-small(numero="2" titulo="Paso 2") En el momento de la preparación de las suspensiones acuosas se debe mezclar el polvo con el agente humectante para obtener una pasta homogénea, seguidamente se transformará en un líquido al agregar un vehículo.
              p.text-small(numero="3" titulo="Paso 3") Reducir los ingredientes sólidos a partículas del mínimo tamaño para dar homogeneidad.
              p.text-small(numero="4" titulo="Paso 4") Evitar que las soluciones dispensadas tengan algún componente sin disolver. La única excepción se da con las soluciones sobresaturadas como solución oral de yoduro de potasio.
              p.text-small(numero="5" titulo="Paso 5") En las etiquetas de las emulsiones y suspensiones se debe incluir la leyenda “Agitar antes de usarse”.
    
    h4.mt-5(data-aos="fade-left") Supositorios
    p.mt-4(data-aos="fade-right") Para la elaboración de esta forma farmacéutica, se debe elaborar una cantidad mayor de la formulación total para dispensar exactamente, la cantidad recetada. Se deben aplicar las siguientes prácticas y precauciones en el momento de la elaboración de estas formas farmacéuticas:

    .row.mt-5
      .col-lg.pe-md-0.mb-4.mb-lg-0
        .p-4.p-md-5.text-center(style="height:100%;background-color:#D7F3FF;border-radius:10px 0px 0px 10px;")
          figure.text-center
            img(src="@/assets/curso/tema2/8.svg" data-aos="zoom-in-up" style="display:inline;max-width:120px;" alt="Imagen decorativa")
          p.mt-4(data-aos="fade-right") Evitar el uso de ingredientes cáusticos o que causen irritación. Además de pulverizar de manera completa los sólidos que sean abrasivos para las mucosas.
      .col-lg.pe-md-0.ps-md-0.mb-4.mb-lg-0
        .p-4.p-md-5.text-center(style="height:100%;background-color:#CBBEF4;")
          figure.text-center
            img(src="@/assets/curso/tema2/9.svg" data-aos="zoom-in-up" style="display:inline;max-width:120px;" alt="Imagen decorativa")
          p.mt-4(data-aos="fade-right") Seleccionar una base la cual pueda permitir a los ingredientes activos proporcionar el efecto terapéutico deseado a nivel local o sistémico.
      .col-lg.pe-md-0.ps-md-0.mb-4.mb-lg-0
        .p-4.p-md-5.text-center(style="height:100%;background-color:#D7F3FF;")
          figure.text-center
            img(src="@/assets/curso/tema2/10.svg" data-aos="zoom-in-up" style="display:inline;max-width:120px;" alt="Imagen decorativa")
          p.mt-4(data-aos="fade-left") Reducir los ingredientes sólidos a partículas del mínimo tamaño para dar homogeneidad.
      .col-lg.pe-md-0.ps-md-0.mb-4.mb-lg-0
        .p-4.p-md-5.text-center(style="height:100%;background-color:#CBBEF4;border-radius:0px 10px 10px 0px;")
          figure.text-center
            img(src="@/assets/curso/tema2/11.svg" data-aos="zoom-in-up" style="display:inline;max-width:120px;" alt="Imagen decorativa")
          p.mt-4(data-aos="fade-left") Pesar una cantidad adecuada de supositorios para asegurar que cada uno de ellos tenga entre el 90% y el 110% del peso promedio de todos los supositorios en la partida.
    
    h4.mt-5(data-aos="fade-left") Cremas, geles tópicos, ungüentos y pastas
    p.mt-4(data-aos="fade-right") Para la elaboración de esta forma farmacéutica, se debe elaborar una cantidad mayor de la formulación total para dispensar exactamente la cantidad recetada. Se deben aplicar las siguientes prácticas y precauciones en el momento de la elaboración de las formas farmacéuticas semisólidas:

    .cont_2_3.mt-5.pb-4
      .col-xl-4.col-lg-6.m-auto
        ImagenInfografica.infografia1.color-acento-contenido(data-aos="zoom-in")
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/tema2/13.svg' alt="Imagen decorativa")
          .tarjeta.color-acento-botones(x="24%" y="8%" numero="" style="background-color:transparent;")
            .tarjeta-numerada.color-acento-contenido.p-5.bg-white
              .tarjeta-numerada__numero
                .h2 1
              p(style="color:#12263F;") Evitar el uso de ingredientes cáusticos, que causen irritaciones o alergias en la piel u otros sitios de aplicación, a no ser que fuesen necesarios para su tratamiento.
          .tarjeta.color-acento-botones(x="81%" y="8%" numero="" style="background-color:transparent;")
            .tarjeta-numerada.color-acento-contenido.p-5.bg-white
              .tarjeta-numerada__numero
                .h2 2
              p(style="color:#12263F;") Reducir los ingredientes sólidos a partículas del mínimo tamaño para dar homogeneidad.
          .tarjeta.color-acento-botones(x="93%" y="60%" numero="" style="background-color:transparent;")
            .tarjeta-numerada.color-acento-contenido.p-5.bg-white
              .tarjeta-numerada__numero
                .h2 3
              p(style="color:#12263F;") Seleccionar una base la cual pueda permitir a los ingredientes activos proporcionar el efecto terapéutico deseado a nivel local o sistémico.
          .tarjeta.color-acento-botones(x="53%" y="92%" numero="" style="background-color:transparent;")
            .tarjeta-numerada.color-acento-contenido.p-5.bg-white
              .tarjeta-numerada__numero
                .h2 4
              p(style="color:#12263F;") Incorporar de manera geométrica cada uno de los ingredientes activos con las sustancia agregadas para lograr la uniformidad de la formas farmacéuticas líquidas o de la dispersión del sólido.
          .tarjeta.color-acento-botones(x="8%" y="60%" numero="" style="background-color:transparent;")
            .tarjeta-numerada.color-acento-contenido.p-5.bg-white
              .tarjeta-numerada__numero
                .h2 5
              p(style="color:#12263F;") Evaluar la uniformidad de la dispersión extendiendo una película delgada de la formulación terminada sobre una superficie transparente y plana (por ejemplo, una placa de vidrio transparente para ungüentos).

    h4.mt-5(data-aos="fade-left") Recomendaciones generales para el proceso de fabricación de las preparaciones magistrales no estériles
    p.mt-4(data-aos="fade-right") A continuación, se presentará una lista de pasos para ayudar a reducir al mínimo los errores y obtener los resultados esperados por quien extendió la receta (ver figura 2):

    .col-lg-8.mt-5.m-auto
      .titulo-sexto.color-acento-botones(data-aos="fade-right")
        h5 Figura 2.
        span Recomendaciones generales del proceso de fabricación de preparaciones magistrales no estériles
      figure
        img(src="@/assets/curso/tema2/14.svg" data-aos="zoom-in-up" alt="Esquema que relaciona las recomendaciones generales del proceso de fabricación de preparaciones magistrales no estériles, las cuales son: Evaluar la inocuidad y adecuación de la fórmula médica a las condiciones del laboratorio. Determinar las limitaciones legales. Hacer los cálculos para determinar las cantidades de los ingredientes. Identificar los equipos necesarios para el proceso de la elaboración. Vestir ropas adecuadas y realizar lavado de manos. Limpiar las zona de preparación y el equipo necesario. Preparar una sola receta por vez.  Reunir todos los materiales necesarios para la elaboración. Elaborar la preparación teniendo en cuenta el registro de formulación o la receta médica. Evaluar las variaciones peso, la adecuación del mezclado, transparencia, Olor, color, consistencia y pH según corresponda. Registrar los pasos en el libro de registro de preparaciones magistrales y describir la apariencia de la formulación. Etiquetar el envase teniendo en cuenta la información técnica que debe ir en ella. Firmar y fechar la receta médica indicando que se realizaron todos los procedimientos necesarios. Limpiar todo el equipo inmediatamente y almacenarlo adecuadamente.")
      figcaption.fw-normal.mt-3 Nota. SENA (2021).

</template>

<script>
export default {
  name: 'Tema2',
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
<style lang="sass">
.cont_2_1, .cont_2_1 *
  position: relative
.cont_2_1:before
  content: ''
  position: absolute
  height: 100%
  width: 125%
  left: -15%
  top: 0
  background: url(../assets/curso/tema2/1.png)
  background-size: cover
  background-position: top
.cont_2_2, .cont_2_2 *
  position: relative
.cont_2_2:before
  content: ''
  position: absolute
  height: 100%
  width: 125%
  left: -15%
  top: -100px
  background: url(../assets/curso/tema2/6.png)
  background-size: cover
  background-position: top
.cont_2_3
  position: relative
.cont_2_3:before
  content: ''
  position: absolute
  height: 100%
  width: 125%
  left: -15%
  bottom: 0
  background: url(../assets/curso/tema2/12.png)
  background-size: cover
  background-position: bottom
.infografia1 .img-infografica__item__dot
  padding: 1.8rem
  left: -25px
.infografia1 .img-infografica__item__dot:before
  background-color: transparent !important
</style>
