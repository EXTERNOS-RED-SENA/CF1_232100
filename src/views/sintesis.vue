<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-5(data-aos="fade-down" data-aos-duration="750") El siguiente diagrama proporciona una visión general sintetizada de los principales temas abordados en el componente formativo sobre Tecnología Aplicada en Sistemas Electromecánicos e Industriales. Este mapa conceptual ha sido diseñado para ayudar al lector a comprender la interrelación entre los diversos conceptos que sustentan la tecnología aplicada al sector agrícola.

    .row
      .col-lg-auto.d-none.d-lg-block(data-aos="fade-right")
        figure
          img(src="@/assets/curso/sintesis1.png")
      .col-lg(data-aos="fade-left")
        p El núcleo del diagrama se centra en el concepto principal de los “Fundamentos en Tecnología Aplicada”, del cual se desprenden áreas clave de aprendizaje: electrotecnia, electrónica digital, sistemas embebidos, dibujo técnico, y mecánica y ajuste. Estas áreas se subdividen en temas específicos que reflejan la estructura del componente, abarcando desde principios básicos hasta aplicaciones prácticas en contextos agroindustriales.
        .p-4(style="background-color:#F0F7E8;border-radius:12px;")
          figure.mb-2
            img(src="@/assets/curso/sintesis2.svg" style="max-width:85px;")
          p.mb-0 Este diagrama sirve como una guía visual que resume la amplitud y profundidad de los temas cubiertos en el componente. Permite al estudiante comprender rápidamente las relaciones entre los conceptos y aplicarlos en su contexto profesional. Le invitamos a utilizar este mapa como un complemento al contenido detallado, sirviendo como una referencia rápida y un recordatorio visual de los aspectos fundamentales de la Tecnología Aplicada en Sistemas Electromecánicos e Industriales en la Agricultura.

    .mt-5.row.justify-content-center
      .col-lg-10.mb-5
        figure(data-aos="fade-up" data-aos-duration="800")
          img(src="@/assets/curso/sintesis.svg", alt="alt")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
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
