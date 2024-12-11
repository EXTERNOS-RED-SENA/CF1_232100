<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 5
      h1 Herramientas y Sistema de Montajes

    .row
      .col-lg(data-aos="fade-right")
        .h-100.p-4.d-flex.align-content-center.flex-wrap(style="background-color:#EAEFF4;")
          p.mb-0 En la Agrotrónica, donde la eficiencia de los sistemas agrícolas depende tanto de la precisión como de la robustez, las herramientas y los sistemas de montaje desempeñan un papel fundamental. Este capítulo explora en profundidad las herramientas necesarias para el montaje y ajuste de maquinaria agrícola, así como los métodos y técnicas de montaje que aseguran la correcta funcionalidad y sostenibilidad de los sistemas productivos. A través de este enfoque, se busca que los estudiantes adquieran competencias prácticas y teóricas que les permitan realizar montajes seguros, precisos y eficientes.
      .col-lg-auto.d-none.d-lg-block(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema5/1.png")

    Separador

    .titulo-segundo(data-aos="flip-up")
      h2#t_5_1 5.1	Fundamentos teóricos de las herramientas de montaje
    

    .p-4(style="background-color:#F0F7E8;border-radius:12px;" data-aos="fade-up")
      .row
        .col-md-auto.d-none.d-md-block(style="place-self:center;")
          figure
            img(src="@/assets/curso/tema5/2.svg")
        .col-md(style="place-self:center;")
          p.mb-0 El uso adecuado de herramientas es la piedra angular para garantizar el éxito en cualquier proceso de montaje. Desde herramientas manuales hasta avanzadas electrónicas, cada una desempeña un papel específico en el mantenimiento y optimización de sistemas mecánicos. Una herramienta mal seleccionada o utilizada incorrectamente no solo puede comprometer el montaje sino también poner en riesgo la seguridad del operador.

    .cont_decorativo.mb-4.mt-5(data-aos="fade-right")
      .row
        .col-auto.pe-0
          figure
            img(src="@/assets/curso/tema1/3.svg")
        .col.ps-2(style="place-self:center;")
          h3.mb-0.pe-4 Clasificación de herramientas
    
    .row.mt-4
      .col-lg(data-aos="fade-right")
        p Las herramientas son un pilar fundamental en cualquier operación de montaje y ajuste, ya que garantizan la correcta ejecución de tareas técnicas con precisión y seguridad. La clasificación de herramientas se basa en su función, mecanismo y nivel de sofisticación, lo que permite seleccionar la más adecuada para cada tipo de trabajo. Desde las herramientas manuales básicas hasta las electrónicas avanzadas, cada categoría responde a necesidades específicas de montaje, ajuste y mantenimiento en entornos industriales y agrícolas.
        AcordionRED(tipo="a" clase-tarjeta="tarjeta")
          .row.col-xl-11.m-auto(titulo="Manuales")
            p Como llaves, destornilladores y alicates. Estas herramientas son básicas pero esenciales para operaciones que requieren un control directo.
          .row.col-xl-11.m-auto(titulo="Eléctricas")
            p Taladros, esmeriles y sierras eléctricas, que mejoran la eficiencia al reducir el esfuerzo humano y el tiempo de operación.
          .row.col-xl-11.m-auto(titulo="Electrónicas")
            p Herramientas de medición de alta precisión, como calibradores digitales y micrómetros electrónicos, fundamentales en el ajuste de tolerancias estrictas.
      .col-lg-auto.d-none.d-lg-block(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema5/3.png")
    
    .cont_decorativo.mb-4.mt-5(data-aos="fade-right")
      .row
        .col-auto.pe-0
          figure
            img(src="@/assets/curso/tema1/3.svg")
        .col.ps-2(style="place-self:center;")
          h3.mb-0.pe-4 Principales herramientas utilizadas
    
    p(data-aos="fade-left") En el contexto de la Agrotrónica y la mecánica de precisión, ciertas herramientas se destacan por su versatilidad y efectividad. Herramientas como llaves dinamométricas, calibradores y micrómetros desempeñan un papel clave al garantizar que las piezas mecánicas se ajusten a tolerancias estrictas. Conocer sus características y aplicaciones es clave para optimizar procesos y asegurar la funcionalidad de la maquinaria agrícola.

    .row.mt-4.justify-content-center
      .col-lg.mb-4.mb-lg-0.col-md-9(data-aos="zoom-in")
        .h-100.p-4.text-center(style="background-color:#98E2EC;border-radius:20px;")
          figure.mb-4
            img.d-inline(src="@/assets/curso/tema5/4.svg" style="max-width:85px;")
          p.fw-bold Llaves dinamométricas
          p Garantizan que los tornillos y pernos se ajusten con la fuerza exacta especificada.
      .col-lg.mb-4.mb-lg-0.col-md-9(data-aos="zoom-in")
        .h-100.p-4.text-center(style="background-color:#98E2EC;border-radius:20px;")
          figure.mb-4
            img.d-inline(src="@/assets/curso/tema5/5.svg" style="max-width:85px;")
          p.fw-bold Calibradores y micrómetros
          p Permiten medir dimensiones con alta precisión, asegurando que los componentes encajen correctamente.
      .col-lg.mb-4.mb-lg-0.col-md-9(data-aos="zoom-in")
        .h-100.p-4.text-center(style="background-color:#98E2EC;border-radius:20px;")
          figure.mb-4
            img.d-inline(src="@/assets/curso/tema5/6.svg" style="max-width:85px;")
          p.fw-bold Herramientas de corte y desbaste
          p Incluyen sierras y esmeriles que se usan para dar forma o ajustar materiales metálicos y no metálicos.

    Separador

    .titulo-segundo(data-aos="flip-up")
      h2#t_5_2 5.2	 Sistemas de montaje
    
    p(data-aos="fade-left") Los sistemas de montaje son fundamentales para ensamblar componentes de manera que soporten las condiciones de operación y cargas a las que serán sometidos. Dependiendo del tipo de montaje, se pueden requerir conexiones permanentes o desmontables, cada una con sus propias aplicaciones y ventajas.

    .row.mt-4
      .col-lg-auto.d-none.d-lg-block(data-aos="fade-right")
        figure
          img(src="@/assets/curso/tema5/7.png")
      .col-lg(data-aos="fade-left")
        .cont_decorativo.mb-4(data-aos="fade-right")
          .row
            .col-auto.pe-0
              figure
                img(src="@/assets/curso/tema1/3.svg")
            .col.ps-2(style="place-self:center;")
              h3.mb-0.pe-4 Montajes fijos y desmontables
        
        p El montaje de componentes es una tarea que puede variar entre la necesidad de conexiones permanentes o temporales, dependiendo del tipo de maquinaria y sus requerimientos operativos. Los montajes fijos, como las soldaduras, ofrecen una unión inquebrantable, mientras que los desmontables, como pernos y tornillos, permiten un fácil desensamble para mantenimiento y reparación. La elección correcta entre estos tipos de montajes es vital para garantizar la eficiencia y la durabilidad del sistema.
        
        .p-3.p-lg-4(style="background-color:#B0C4D7;border-radius:8px;")
          ul.lista-ul.mb-0
            li.d-flex.bg-white.p-2(style="border-radius:4px;")
              i.fas.fa-check-circle(style="color:#78B62E;")
              span #[strong Montajes desmontables:] Como pernos, tornillos y tuercas, permiten un fácil desensamble para mantenimiento o reparación.
            li.d-flex.bg-white.p-2.mb-0(style="border-radius:4px;")
              i.fas.fa-check-circle(style="color:#78B62E;")
              span #[strong Montajes fijos:] Incluyen soldaduras y acoples de presión, que son ideales para conexiones permanentes que requieren alta resistencia.    

    .cont_decorativo.mb-4.mt-5(data-aos="fade-right")
      .row
        .col-auto.pe-0
          figure
            img(src="@/assets/curso/tema1/3.svg")
        .col.ps-2(style="place-self:center;")
          h3.mb-0.pe-4 Dispositivos de sujeción y posicionamiento
    
    .row
      .col-lg(data-aos="fade-right")
        p Durante los procesos de montaje y mecanizado, es esencial mantener las piezas en la posición correcta para garantizar la precisión y seguridad de las operaciones. Los dispositivos de sujeción, como mordazas y prensas, desempeñan un papel crítico en la fijación de componentes, evitando movimientos no deseados. Estos sistemas no solo facilitan el trabajo, sino que también mejoran la calidad y la seguridad de las operaciones.
        .p-3.p-lg-4(style="background-color:#C8E2AA;border-radius:8px;")
          ul.lista-ul.mb-0
            li.d-flex.bg-white.p-2(style="border-radius:4px;")
              i.fas.fa-check-circle(style="color:#78B62E;")
              span #[strong Mordazas y prensas:] Utilizadas para mantener las piezas en su lugar durante operaciones de mecanizado o ensamblaje.
            li.d-flex.bg-white.p-2.mb-0(style="border-radius:4px;")
              i.fas.fa-check-circle(style="color:#78B62E;")
              span #[strong Soportes magnéticos:] Ofrecen una solución eficiente para fijar piezas metálicas, especialmente en tareas de mecanizado.
      .col-lg-auto.d-none.d-lg-block(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema5/8.png")
    
    Separador

    .titulo-segundo(data-aos="flip-up")
      h2#t_5_3 5.3	Procedimientos de montaje y ajuste
    
    p(data-aos="fade-left") La calidad de un montaje no solo depende de las herramientas y sistemas utilizados, sino también de la metodología aplicada durante el proceso. El montaje y ajuste precisos aseguran que los sistemas mecánicos operen dentro de las tolerancias especificadas, prolongando la vida útil de los componentes y evitando fallos operativos.

    TabsC.color-acento-contenido.mt-4
      .py-3.py-md-4(titulo="Selección de herramientas y métodos")
        .row.p-4.col-xl-11.m-auto
          .col-md-auto.mb-4.mb-md-0.col-7.m-auto
            figure
              img(src='@/assets/curso/tema5/9.svg')
          .col-md
            p.fw-bold Selección de herramientas y métodos
            p La correcta selección de herramientas y métodos es un paso determinante en cualquier tarea de montaje o ajuste. Factores como el tipo de material, las especificaciones de la pieza y las condiciones operativas influyen en esta decisión. Una elección informada garantiza que el proceso se lleve a cabo con la máxima eficiencia y precisión, reduciendo el riesgo de errores y prolongando la vida útil de los componentes.
            ul.lista-ul.mb-0.mt-4
              li.d-flex
                i.fas.fa-check-circle(style="color:#78B62E;")
                span La elección de herramientas depende del material y la especificación técnica de la pieza a montar.
              li.d-flex
                i.fas.fa-check-circle(style="color:#78B62E;")
                span Métodos de ajuste como interferencia térmica y mecánica para asegurar un encaje perfecto.
      .py-3.py-md-4(titulo="Montaje por ajuste mecánico")
        .row.p-4.col-xl-11.m-auto
          .col-md-auto.mb-4.mb-md-0.col-7.m-auto
            figure
              img(src='@/assets/curso/tema5/10.svg')
          .col-md
            p.fw-bold Montaje por ajuste mecánico
            p El montaje por ajuste mecánico es una técnica ampliamente utilizada en la industria para asegurar la unión de componentes sin necesidad de elementos adicionales como adhesivos o fijadores mecánicos. Este método se basa en la precisión dimensional de las piezas, que se ensamblan mediante la aplicación de fuerzas específicas para garantizar un encaje perfecto. Los ajustes pueden clasificarse en diversos tipos, como ajustes por interferencia o deslizamiento, dependiendo del nivel de fricción requerido. La correcta implementación de este tipo de montaje es esencial para lograr un funcionamiento óptimo y una larga vida útil de los componentes, especialmente en maquinaria que opera bajo condiciones de carga y vibración intensas.
            ul.lista-ul.mb-0.mt-4
              li.d-flex
                i.fas.fa-check-circle(style="color:#78B62E;")
                span Tolerancias y calibración: Uso de instrumentos de medición para garantizar que las piezas se ensamblen dentro de las tolerancias establecidas.
      .py-3.py-md-4(titulo="Técnicas de alineación y verificación")
        .row.p-4.col-xl-11.m-auto
          .col-md-auto.mb-4.mb-md-0.col-7.m-auto
            figure
              img(src='@/assets/curso/tema5/11.svg')
          .col-md
            p.fw-bold Técnicas de alineación y verificación
            p La alineación y verificación de componentes son procesos críticos para asegurar el correcto funcionamiento de sistemas mecánicos. Una alineación precisa reduce el desgaste de las piezas, mejora la eficiencia operativa y previene fallos prematuros. Las técnicas de verificación, apoyadas por instrumentos de medición avanzados, garantizan que cada pieza cumpla con las especificaciones requeridas antes de su puesta en operación.
            ul.lista-ul.mb-0.mt-4
              li.d-flex
                i.fas.fa-check-circle(style="color:#78B62E;")
                span Aplicación de métodos ópticos y mecánicos para alinear componentes críticos, asegurando su correcta operación dentro del sistema.

    Separador

    .titulo-segundo(data-aos="flip-up")
      h2#t_5_4 5.4	Seguridad y mantenimiento de herramientas
    
    p(data-aos="fade-left") El uso seguro de herramientas y el mantenimiento adecuado son esenciales para prevenir accidentes y garantizar la precisión a largo plazo. Además, la implementación de prácticas de mantenimiento contribuye a la sostenibilidad operativa, reduciendo la necesidad de reemplazos frecuentes y aumentando la confiabilidad de los equipos.

    .cont_1_1.mt-4.pt-4.pb-4.pb-xl-5.pt-xl-5
      .tarjeta.bg-white.p-4.p-lg-5.pb-lg-4
        CarouselRED(tipo="b")
          .row.pt-lg-4.col-xl-11.m-auto
            .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
              h5 Normas de seguridad
              p.mt-4 El manejo de herramientas y maquinaria en procesos de montaje y ajuste implica riesgos que pueden minimizarse siguiendo estrictas normas de seguridad. Estas directrices no solo protegen al operario, sino que también garantizan la integridad de los equipos y la calidad del trabajo. La seguridad es un componente esencial de cualquier entorno industrial, y su cumplimiento es clave para evitar accidentes y mantener la productividad.
              ul.lista-ul.mb-0.mt-3.ps-3
                li.d-flex
                  i.fas.fa-check-circle(style="color:#78B62E;")
                  span Uso de equipos de protección personal (EPP) como guantes y gafas de seguridad durante el manejo de herramientas.
                li.d-flex.mb-0
                  i.fas.fa-check-circle(style="color:#78B62E;")
                  span Prácticas seguras para el manejo de herramientas eléctricas y de corte.
            .col-lg-5
              figure.m-auto.col-12.col-md-8.col-lg-12
                img(src='@/assets/curso/tema5/12.png')
          .row.pt-lg-4.col-xl-11.m-auto
            .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
              h5 Mantenimiento preventivo de herramientas
              p.mt-4 El mantenimiento preventivo es un factor esencial para prolongar la vida útil de las herramientas y garantizar su rendimiento óptimo. Este proceso incluye actividades regulares como la limpieza, lubricación y calibración, que previenen el desgaste prematuro y mantienen la precisión operativa. Implementar un programa de mantenimiento preventivo eficiente no solo optimiza los recursos, sino que también asegura la continuidad de las operaciones sin interrupciones costosas
              ul.lista-ul.mb-0.mt-3.ps-3
                li.d-flex
                  i.fas.fa-check-circle(style="color:#78B62E;")
                  span Lubricación regular de herramientas mecánicas.
                li.d-flex.mb-0
                  i.fas.fa-check-circle(style="color:#78B62E;")
                  span Verificación y calibración periódica de instrumentos de medición para mantener su precisión.
            .col-lg-5
              figure.m-auto.col-12.col-md-8.col-lg-12
                img(src='@/assets/curso/tema5/13.png')





</template>

<script>
import AcordionRED from '../bootstrap/AcordionRED.vue'
import CarouselRED from '../bootstrap/CarouselRED.vue'
export default {
  name: 'Tema5',
  components: {
    CarouselRED,
    AcordionRED,
  },
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
