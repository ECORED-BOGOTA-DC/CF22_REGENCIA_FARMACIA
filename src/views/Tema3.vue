<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Estabilidad de las preparaciones magistrales no estériles
    
    .col-lg-10.m-auto
      .bloque-texto-a.color-primario.p-4.p-md-5
        .row.m-0.align-items-center.justify-content-center
          .col-lg-3.col-6.mb-lg-0.mb-4(data-aos="fade-right")
            figure.text-center
              img(src="@/assets/curso/tema3/1.svg" style="display:inline;max-width:150px;" alt="Imagen decorativa")
          .col-lg-9(data-aos="fade-left")
            .bloque-texto-a__texto.p-5
              p.mb-0 La estabilidad es la conservación, durante el tiempo en que el producto esté almacenado y utilizado, es decir, que tenga las mismas propiedades y características que tenía cuando se preparó.

    .cont_3_1.mt-5.pt-5.pb-5
      .row
        .col-lg-8.mb-lg-0.mb-4
          figure.text-center
            img(src="@/assets/curso/tema3/2.png" data-aos="fade-right" alt="Imagen decorativa")
        .col-lg-4(style="place-self:center;position:relative;")
          .cont_responsive2.p-4.bg-white(style="border-radius:20px 20px 20px 0px;left:-90px;box-shadow:0px 0px 20px rgba(0,0,0,.3)" data-aos="fade-left")
            p El profesional que realice la preparación debe evitar la utilización de ingredientes o condiciones de procesamiento que puedan ocasionar que los preparados se conviertan en productos tóxicos o ineficaces. Este debe tener un profundo conocimiento en lo relacionado con las reacciones químicas de degradación de los medicamentos.
            p.mt-4.mb-0 Los factores que afectan la estabilidad de las preparaciones magistrales son los mismos que para los medicamentos fabricados.
            
    Separador
    #t_3_1.titulo-segundo(data-aos="fade-right")
      h2 3.1 Envase primario
    
    .cont_3_2.pt-5.pb-5
      .col-lg-10.m-auto
        .row
          .col-lg-3.col-6.mb-4.mb-lg-0(style="place-self:center;")
            figure.text-center
              img(src="@/assets/curso/tema3/3.png" data-aos="fade-right" style="display:inline;max-width:450px;" alt="Imagen decorativa")
          .col-lg-9(style="place-self:center;")
            p(data-aos="fade-left") Se requieren envases que cumplan con las normas USP. Utilizar un envase que haya sido seleccionado según las propiedades fisicoquímicas de la preparación magistral. Tener presente la interacción envase-fármaco siempre que se trate de sustancias tales como: compuestos fenólicos y materiales con propiedades de absorción y adsorción (por ejemplo, el polipropileno y proteínas).
            p.mt-4(data-aos="fade-left") A continuación, se podrán observar los diferentes tipos de envases primarios utilizados según la norma farmacéutica:
      
    .tarjeta.tarjeta--gris.p-4.p-lg-5.mt-5(data-aos="zoom-in")
      LineaTiempoC.color-secundario(text-small)
        .row.justify-content-center(titulo="Vidrio")
          .col-lg-6.col-10.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/tema3/5.png' alt="Imagen decorativa")
          .col-lg-6
            p Las características del #[strong vidrio] como material para preparados magistrales son:
            ul.fa-ul.mt-3
              li.mb-2
                i.fas.fa-atom.fa-li(style="color:#7E5EE3;")
                | Presenta baja permeabilidad frente a la humedad y gases.
              li.mb-2
                i.fas.fa-atom.fa-li(style="color:#7E5EE3;")
                | Muy pesado y más frágil que otros materiales.
              li
                i.fas.fa-atom.fa-li(style="color:#7E5EE3;")
                | Transparencia.
            p.mt-3 Las formas farmacéuticas utilizadas con mayor frecuencia son: #[strong lociones y extractos].
        .row.justify-content-center(titulo="Plástico")
          .col-lg-6.col-10.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/tema3/6.png' alt="Imagen decorativa")
          .col-lg-6
            p Las características del #[strong plástico] como material para preparados magistrales son:
            ul.fa-ul.mt-3
              li.mb-2
                i.fas.fa-atom.fa-li(style="color:#7E5EE3;")
                | Mayor resistencia a los golpes.
              li.mb-2
                i.fas.fa-atom.fa-li(style="color:#7E5EE3;")
                | Bajo peso. 
              li.mb-2
                i.fas.fa-atom.fa-li(style="color:#7E5EE3;")
                | Baja resistencia al calor.
              li.mb-2
                i.fas.fa-atom.fa-li(style="color:#7E5EE3;")
                | Posibles transferencias de compuestos al producto.
              li.mb-2
                i.fas.fa-atom.fa-li(style="color:#7E5EE3;")
                | Mayor adsorción y absorción de gases y vapores.
              li.mb-2
                i.fas.fa-atom.fa-li(style="color:#7E5EE3;")
                | Menos transparencia.
              li
                i.fas.fa-atom.fa-li(style="color:#7E5EE3;")
                | Existen múltiples tipos de envases de este material.
            p.mt-3 Las formas farmacéuticas utilizadas con mayor frecuencia son: #[strong ungüentos, geles, cremas y pastas]. 
        .row.justify-content-center(titulo="Metales")
          .col-lg-6.col-10.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/tema3/7.png' alt="Imagen decorativa")
          .col-lg-6
            p Las características de los #[strong metales] como material para preparados magistrales son:
            ul.fa-ul.mt-3
              li.mb-2
                i.fas.fa-atom.fa-li(style="color:#7E5EE3;")
                | Utilizado para envases de aerosoles a presión.
              li
                i.fas.fa-atom.fa-li(style="color:#7E5EE3;")
                | El más utilizado es el de aluminio.
            p.mt-3 La forma farmacéutica utilizada con mayor frecuencia es en #[strong loción].
        .row.justify-content-center(titulo="Compuestos")
          .col-lg-6.col-10.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/tema3/8.png' alt="Imagen decorativa")
          .col-lg-6
            p Los #[strong materiales compuestos] están formados por diferentes elementos, en la mayoría de los casos de aluminio y varios tipos de plásticos: PVC, polietileno, etc. Su uso es más enfocado en comprimidos y medicamentos de administración vía oral o supositorios.
        .row.justify-content-center(titulo="P.E.T.")
          .col-lg-6.col-10.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/tema3/8.png' alt="Imagen decorativa")
          .col-lg-6
            p Las características del #[strong polietileno (PET)] como material para preparados magistrales son:
            ul.fa-ul.mt-3
              li.mb-2
                i.fas.fa-atom.fa-li(style="color:#7E5EE3;")
                | Alta ausencia de impurezas.
              li.mb-2
                i.fas.fa-atom.fa-li(style="color:#7E5EE3;")
                | Baja permeabilidad al oxígeno y vapor de agua.
              li.mb-2
                i.fas.fa-atom.fa-li(style="color:#7E5EE3;")
                | Resistente al golpe y agrietamiento.
              li.mb-2
                i.fas.fa-atom.fa-li(style="color:#7E5EE3;")
                | Rígido.
              li.mb-2
                i.fas.fa-atom.fa-li(style="color:#7E5EE3;")
                | Transparente.
              li
                i.fas.fa-atom.fa-li(style="color:#7E5EE3;")
                | Primera elección para envasar líquidos que requieren ingesta.
            p.mt-3 La forma farmacéutica utilizada con mayor frecuencia es en #[strong jarabes].
        .row.justify-content-center(titulo="P.E.A.D.")
          .col-lg-6.col-10.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/tema3/9.png' alt="Imagen decorativa")
          .col-lg-6
            p Las características del #[strong polietileno de alta densidad (PEAD)] como material para preparados magistrales son:
            ul.fa-ul.mt-3
              li.mb-2
                i.fas.fa-atom.fa-li(style="color:#7E5EE3;")
                | Presentan gran rigidez y resistencia al golpe.
              li.mb-2
                i.fas.fa-atom.fa-li(style="color:#7E5EE3;")
                | Casi sin la presencia de impurezas.
              li.mb-2
                i.fas.fa-atom.fa-li(style="color:#7E5EE3;")
                | Ideal para potes de cremas.
              li
                i.fas.fa-atom.fa-li(style="color:#7E5EE3;")
                | Con este material se hacen las tapas de alta seguridad (inviolables).
            p.mt-3 La forma farmacéutica utilizada con mayor frecuencia es en #[strong cremas].
        .row.justify-content-center(titulo="P.E.B.D.")
          .col-lg-6.col-10.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/tema3/10.png' alt="Imagen decorativa")
          .col-lg-6
            p Las características del #[strong polietileno de baja densidad (PEBD)] como material para preparados magistrales son:
            ul.fa-ul.mt-3
              li.mb-2
                i.fas.fa-atom.fa-li(style="color:#7E5EE3;")
                | Más flexible.
              li.mb-2
                i.fas.fa-atom.fa-li(style="color:#7E5EE3;")
                | Color lechoso.
              li.mb-2
                i.fas.fa-atom.fa-li(style="color:#7E5EE3;")
                | Ideal para preparaciones tópicas.
              li.mb-2
                i.fas.fa-atom.fa-li(style="color:#7E5EE3;")
                | Resistente a preparaciones líquidas.
              li
                i.fas.fa-atom.fa-li(style="color:#7E5EE3;")
                | No genera migraciones de compuestos a los productos.
            p.mt-3 Las formas farmacéuticas utilizadas con mayor frecuencia son: #[strong geles, cremas y ungüentos].
        .row.justify-content-center(titulo="P.S.")
          .col-lg-6.col-10.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/tema3/11.png' alt="Imagen decorativa")
          .col-lg-6
            p Las características del #[strong poliestireno (PS)] como material para preparados magistrales son:
            ul.fa-ul.mt-3
              li.mb-2
                i.fas.fa-atom.fa-li(style="color:#7E5EE3;")
                | No genera migraciones de compuestos a los productos.
              li.mb-2
                i.fas.fa-atom.fa-li(style="color:#7E5EE3;")
                | Cristalino y rígido.
              li.mb-2
                i.fas.fa-atom.fa-li(style="color:#7E5EE3;")
                | Ideal para preparaciones cápsulas, comprimidos y polvos.
              li
                i.fas.fa-atom.fa-li(style="color:#7E5EE3;")
                | Fácil de rotular.
            p.mt-3 Las formas farmacéuticas utilizadas con mayor frecuencia son: #[strong comprimidos, cápsulas y polvos].
        .row.justify-content-center(titulo="P.V.C.")
          .col-lg-6.col-10.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/tema3/12.png' alt="Imagen decorativa")
          .col-lg-6
            p Las características del #[strong policloruro de vinilo (PVC)] como material para preparados magistrales son:
            ul.fa-ul.mt-3
              li.mb-2
                i.fas.fa-atom.fa-li(style="color:#7E5EE3;")
                | Es el tipo de envase que más problemas genera.
              li.mb-2
                i.fas.fa-atom.fa-li(style="color:#7E5EE3;")
                | Ha sido reemplazado por otros tipos de envases menos contaminantes.
              li
                i.fas.fa-atom.fa-li(style="color:#7E5EE3;")
                | Tiene aditivos que migran al producto.
            p.mt-3 Las formas farmacéuticas utilizadas con mayor frecuencia son: #[strong comprimidos, polvos y cápsulas].
    
    .col-lg-8.m-auto.mt-5(data-aos="flip-up")
      .cajon.color-secundario.p-4(style="background-color:#E4DDFA;")
        p.mb-0 Es obligatorio garantizar la esterilidad de las preparaciones magistrales estériles. La preparación y envasado de medicamentos estériles, como por ejemplo las soluciones oftálmicas, requiere un cumplimiento bajo condiciones muy estrictas.
    
    Separador
    #t_3_2.titulo-segundo(data-aos="fade-right")
      h2 3.2 Criterios de estabilidad y determinación de la fecha límite de uso
    
    .row.justify-content-center.align-items-center
      .col-lg-7.order-lg-1.order-2(data-aos="fade-right")
        p(data-aos="fade-right") La fecha límite para el uso de un preparado magistral es aquella que indica hasta cuando debe usarse, y se determina a partir de la fecha en la que fue elaborado. Debido a que su uso es inmediato o luego de un período corto de almacenamiento, dicha fecha podrá tener diferentes criterios en comparación con los medicamentos elaborados en laboratorios.
        p.mt-4(data-aos="fade-right") Para la definición de la fecha límite de uso es indispensable que se realicen las consultas y se aplique la información disponible en la literatura actualizada relacionada con la estabilidad en general, la específica del fármaco y que se tenga en cuenta:
        .p-4.mt-4(style="background-color:#F6F6F6;")
          ul.fa-ul.mb-0
            li.mb-2(data-aos="fade-up")
              i.fas.fa-atom.fa-li(style="color:#FF9D00;")
              | La naturaleza del fármaco.
            li.mb-2(data-aos="fade-up")
              i.fas.fa-atom.fa-li(style="color:#FF9D00;")
              | El mecanismo de degradación.
            li.mb-2(data-aos="fade-up")
              i.fas.fa-atom.fa-li(style="color:#FF9D00;")
              | El envase que se utilizó.
            li.mb-2(data-aos="fade-up")
              i.fas.fa-atom.fa-li(style="color:#FF9D00;")
              | Las condiciones de almacenamiento.
            li(data-aos="fade-up")
              i.fas.fa-atom.fa-li(style="color:#FF9D00;")
              | La duración del tratamiento. 
      .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        figure.text-center
          img(src="@/assets/curso/tema3/14.svg" style="display:inline;max-width:450px;" alt="Imagen decorativa")

    .col-lg-8.m-auto.mt-5
      .row
        .col-lg-5.col-10.mb-4.mb-lg-0.pe-lg-0
          figure.text-center
            img(src="@/assets/curso/tema3/15.png" data-aos="fade-right" style="display:inline;max-width:450px;position:relative;z-index:1" alt="Imagen decorativa")
        .col-lg-7.ps-lg-0(style="place-self:center;position:relative;")
          .p-4.cont_3_3(data-aos="fade-left")
            p.mb-0 #[strong Las fechas límite de uso deben definirse con mucha cautela]. Antes de definir la fecha límite de uso de una preparación final en forma de solución o suspensión acuosa el preparador deber tener en cuenta factores como la hidrólisis, los ciclos en los que se congela y descongela la preparación final. 
    
    .cont_3_4.pt-5.mt-5
      .row
        .col-lg-4.col-8.mb-4.mb-lg-0(style="place-self:center;")
          figure.text-center
            img(src="@/assets/curso/tema3/17.png" data-aos="fade-right" style="display:inline;max-width:450px;" alt="Imagen decorativa")
        .col-lg-8(style="place-self:center;")
          .p-4(style="border:5px #12263F dashed;border-radius:15px;")
            p.mb-0(data-aos="fade-left") #[strong #[em Deadline]]: para definir la fecha límite en la que se puede usar un medicamento elaborado por preparación magistral, el profesional que realice la preparación debe utilizar toda la información que tenga a su disposición relacionada con la estabilidad, todo esto complementado con las experiencias y el conocimiento que se tenga del sector farmacéutico. 
          p.mt-4(data-aos="fade-left") En el momento que se utilice un principio activo de un medicamento fabricado como un ingrediente activo de una preparación magistral no estéril, no se debe utilizar la fecha de vencimiento que tenga este. Sin embargo, quien elabore la preparación podrá realizar las consultas respectivas en la literatura o la información de estabilidad dada por el laboratorio fabricante.
          .cajon.color-secundario.p-4(style="background-color:#E4DDFA;")
            p.mb-0(data-aos="fade-left") Si no están a disposición los datos relacionados con la estabilidad del fármaco o de la preparación específica, es recomendable que se utilicen las siguientes fechas de vencimiento máximas para preparaciones magistrales no estériles, que son envasadas en envases tipo impermeables y que resisten la luz y se almacenan a unas temperaturas y ambientes controlados, a no ser que se tome una, que determine algo diferente.
    
    p.mt-5(data-aos="fade-right") A continuación, se dan las recomendaciones de las fechas límites:

    TabsA.color-acento-contenido.mt-5(data-aos="zoom-in")
      .tarjeta.color-secundario--borde(titulo="Líquidos no acuosos")
        .row.justify-content-center
          .col-lg-7.order-lg-1.order-2
            .p-4.pt-5
              p.fw-bold Para líquidos no acuosos y formulaciones sólidas
              p.mt-3 #[strong Cuando el ingrediente activo se obtiene de un producto farmacéutico fabricado], la fecha de vencimiento equivale al 25% del tiempo que le falta por vencer al producto o se le dan 6 meses.
              p.mt-3.mb-0 #[strong Cuando el ingrediente activo se obtiene de una sustancia NF o USP], la fecha de límite de uso no deberá superar los 6 meses.
          .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4
            figure.text-center
              img.m-auto(src="@/assets/curso/tema3/18.svg" style="max-width:450px;" alt="Imagen decorativa")
      .tarjeta.color-secundario--borde(titulo="Formulaciones con agua")
        .row.justify-content-center
          .col-lg-7.order-lg-1.order-2
            .p-4.pt-5
              p.fw-bold Para formulaciones que contienen agua
              p.mt-3 Para preparaciones magistrales que contienen agua en su formulación y son preparadas a partir de ingredientes en estado sólido, la fecha de vencimiento es anterior a 14 días para preparaciones magistrales líquidas que son almacenadas a temperaturas entre 2 y 8°C.
          .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4
            figure.text-center
              img.m-auto(src="@/assets/curso/tema3/19.svg" style="max-width:450px;" alt="Imagen decorativa")
      .tarjeta.color-secundario--borde(titulo="Demás formulaciones")
        .row.justify-content-center
          .col-lg-7.order-lg-1.order-2
            .p-4.pt-5
              p.fw-bold Para todas las demás formulaciones
              ul.fa-ul.mb-0.mt-3
                li.mb-3(data-aos="fade-up")
                  i.fas.fa-atom.fa-li(style="color:#7E5EE3;")
                  | Las fechas de vencimiento debe ser menor a la duración de la terapia del paciente o 30 días, lo que ocurra primero.
                li(data-aos="fade-up")
                  i.fas.fa-atom.fa-li(style="color:#7E5EE3;")
                  | Estas fechas de vencimiento se pueden extender cuando existen datos de estabilidad aplicables y científicamente válidos, que corresponden exactamente a la preparación en cuestión (por ejemplo, el mismo intervalo de concentración del fármaco, PH, excipientes, vehículo, contenido de agua, etc.).
          .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4
            figure.text-center
              img.m-auto(src="@/assets/curso/tema3/20.svg" style="max-width:450px;" alt="Imagen decorativa")


</template>

<script>
export default {
  name: 'Tema3',
  components: {},
  data: () => ({
    mostrarIndicador: true,
    mostrarIndicador2: true,
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
.bloque-texto-a.color-primario:before
  background-color: #9FCAF2
.bloque-texto-a.color-primario
  background-color: #E8E8E8
.cont_3_1, .cont_3_1 *
  position: relative
.cont_3_1:before
  content: ''
  position: absolute
  width: 125%
  left: -15%
  height: 100%
  top: 0
  background-color: #D5F1FE
.cont_3_2, .cont_3_2 *
  position: relative
.cont_3_2:before
  content: ''
  position: absolute
  height: 100%
  width: 125%
  left: -15%
  top: 0
  background: url(../assets/curso/tema3/4.png)
  background-size: cover
  background-position: top
.cont_3_3, .cont_3_3 *
  position: relative
.cont_3_3:before
  content: ''
  position: absolute
  height: 100%
  width: 120%
  top: 0
  left: -20%
  z-index: 0
  background-color: #EEEAFB
  border-radius: 20px
.cont_3_4, .cont_3_4 *
  position: relative
.cont_3_4:before
  content: ''
  position: absolute
  height: 100%
  width: 125%
  left: -15%
  top: 0
  background: url(../assets/curso/tema3/16.png)
  background-size: cover
  background-position: top
.tabs-a__tab__text
  color: #12263F
</style>
