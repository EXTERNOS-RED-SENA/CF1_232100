<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Electrónica digital y sistemas embebidos	

    .row
      .col-lg(data-aos="fade-right")
        p La electrónica digital y los sistemas embebidos son fundamentales en el mundo de la mecatrónica y la automatización. Estos conocimientos permiten desarrollar y controlar dispositivos y sistemas complejos a través de circuitos digitales y microcontroladores. Este apartado tiene como propósito introducir a los conceptos clave de la electrónica digital y los sistemas embebidos, ofreciendo una base sólida tanto en teoría como en práctica. A través de actividades prácticas, el estudiante comprenderá cómo estos sistemas pueden aplicarse en la industria, incluyendo el sector agrícola, para mejorar la productividad y la eficiencia.
        .p-4.text-white(style="background-color:#294B6D;border-radius:7px;")
          p.mb-0 En la actualidad la electrónica se ha ido transformando, permitiendo la evolución de los operadores tecnológicos, haciendo posible la aparición de equipos y máquinas que están revolucionando la vida del ser humano desde el ámbito industrial, social, económico, de educación, salud y todos aquellos que podamos imaginar.  Es así, como la mayoría de estos artefactos tecnológicos en la esencia de su funcionamiento son sistemas digitales que todo el tiempo están haciendo operaciones lógicas con unos y ceros, por tanto, casi cualquier dispositivo electrónico en esencia lo que hace es realizar operaciones lógicas basadas en el algebra. 
      .col-lg-auto.d-none.d-lg-block(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema2/1.png")
    
    Separador

    .titulo-segundo(data-aos="flip-up")
      h2#t_2_1 2.1	Fundamentos teóricos a la electrónica digital

    .row.mt-4
      .col-lg-auto.d-none.d-lg-block.pe-lg-0(data-aos="fade-right")
        figure
          img(src="@/assets/curso/tema2/2.png")
      .col-lg.ps-lg-0(data-aos="fade-up")
        .h-100.p-4.d-flex.align-content-center.flex-wrap(style="background-color:#CBF0F5;")
          p.mb-0 La electrónica digital es una rama de la electrónica que se centra en el uso de señales digitales para el diseño y funcionamiento de circuitos y sistemas. A diferencia de la electrónica analógica, donde las señales varían de forma continua, la electrónica digital trabaja con señales que solo tienen dos niveles de voltaje, comúnmente llamados 1 y 0 (sistema binario). Estos niveles representan el encendido (1) y apagado (0) de un sistema. La principal ventaja de los sistemas digitales es su capacidad de ser exactos y resistentes a ruidos o interferencias, lo que los hace ideales para sistemas de control, almacenamiento de datos y procesamiento de información.

    .cont_1_2
      .cont_decorativo.mb-4.mt-5(data-aos="fade-right")
        .row
          .col-auto.pe-0
            figure
              img(src="@/assets/curso/tema1/3.svg")
          .col.ps-2(style="place-self:center;")
            h3.mb-0.pe-4 Sistemas de numeración
      
      p(data-aos="fade-right") Para trabajar en electrónica digital, es fundamental comprender los sistemas de numeración, ya que toda la información en un circuito digital se representa en forma de número
      
      .row.mt-4
        .col-lg.mb-4.mb-lg-0(data-aos="zoom-in")
          .bg-white.p-4.h-100(style="box-shadow:0px 4px 20px rgba(0,0,0,.1);border-radius:14px;")
            figure.mb-3
              img(src="@/assets/curso/tema2/3.svg" style="max-width:76px;")
            h5 Sistema binario
            p Es el sistema numérico base de la electrónica digital. Usa solo dos dígitos, 0 y 1. Cada posición en un número binario representa una potencia de 2 (por ejemplo, 101 en binario es igual a 5 en decimal: 1×2² + 0×2¹ + 1×2⁰ = 4 + 0 + 1 = 5).
        .col-lg.mb-4.mb-lg-0(data-aos="zoom-in")
          .bg-white.p-4.h-100(style="box-shadow:0px 4px 20px rgba(0,0,0,.1);border-radius:14px;")
            figure.mb-3
              img(src="@/assets/curso/tema2/4.svg" style="max-width:76px;")
            h5 Sistema decimal
            p Es el sistema numérico que usamos comúnmente, con base 10 (0 a 9). En electrónica digital, es común tener que convertir entre decimal y binario.
        .col-lg.mb-4.mb-lg-0(data-aos="zoom-in")
          .bg-white.p-4.h-100(style="box-shadow:0px 4px 20px rgba(0,0,0,.1);border-radius:14px;")
            figure.mb-3
              img(src="@/assets/curso/tema2/5.svg" style="max-width:76px;")
            h5 Sistema hexadecimal
            p Usa 16 símbolos (0 a 9 y A a F) y se utiliza en programación y diseño de circuitos digitales, ya que cada dígito hexadecimal puede representar cuatro bits binarios. Por ejemplo, el número hexadecimal A3 es igual a 10100011 en binario y 163 en decimal.

      .cont_decorativo.mb-4.mt-5(data-aos="fade-right")
        .row
          .col-auto.pe-0
            figure
              img(src="@/assets/curso/tema1/3.svg")
          .col.ps-2(style="place-self:center;")
            h3.mb-0.pe-4 Álgebra Booleana
      
      p(data-aos="fade-right") Es la base matemática de la electrónica digital. Fue desarrollada por el matemático George Boole y se utiliza para simplificar circuitos lógicos. En álgebra booleana, se usan operaciones básicas como AND, OR y NOT para manipular expresiones lógicas:

      .row.mt-4
        .col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
          .h-100.p-4(style="background-color:#CBF0F5;")
            ul.lista-ul.mb-0 
              li.d-flex
                i.fas.fa-check-circle(style="color:#78B62E;")
                span Operación AND: Devuelve 1 solo si ambas entradas son 1.
              li.d-flex
                i.fas.fa-check-circle(style="color:#78B62E;")
                span Ejemplo: A·B; si A=1 y B=1, entonces A·B=1
              li.d-flex
                i.fas.fa-check-circle(style="color:#78B62E;")
                span Operación OR: Devuelve 1 si al menos una de las entradas es 1.
              li.d-flex
                i.fas.fa-check-circle(style="color:#78B62E;")
                span Ejemplo: A+B; si A=1 o B=1, entonces A+B=1
              li.d-flex
                i.fas.fa-check-circle(style="color:#78B62E;")
                span Operación NOT: Invierte el valor de la entrada; convierte un 1 en 0 y un 0 en 1.
              li.d-flex.mb-0
                i.fas.fa-check-circle(style="color:#78B62E;")
                span Ejemplo: Ā; si A=1, entonces Ā=0
        .col-lg-7(data-aos="fade-left")
          .h-100.p-4.text-white(style="background-color:#294B6D;")
            p #[strong Ejemplo práctico:] simplificación de funciones lógicas
            p Para una función lógica dada, se puede simplificar usando propiedades booleanas. Por ejemplo:
            p.mb-0  F = A·B + A·B̄
            p Usando simplificación: F = A
            p.mb-0 #[strong Nota:] Este ejemplo muestra cómo una expresión compleja (A·B + A·B̄) se puede reducir a una forma más simple (A) aplicando las leyes del álgebra booleana.

    .cont_decorativo.mb-4.mt-5(data-aos="fade-right")
      .row
        .col-auto.pe-0
          figure
            img(src="@/assets/curso/tema1/3.svg")
        .col.ps-2(style="place-self:center;")
          h3.mb-0.pe-4 Compuertas Lógicas
    
    p(data-aos="fade-right") Son los bloques fundamentales de los circuitos digitales. Cada compuerta realiza una operación booleana y se representa en circuitos electrónicos mediante componentes específicos.

    .row.mt-4
      .col-lg-auto.d-none.d-lg-block(data-aos="fade-right")
        figure
          img(src="@/assets/curso/tema2/6.svg")
      .col-lg(data-aos="fade-left")
        AcordionRED(tipo="a" clase-tarjeta="tarjeta")
          .row.col-xl-11.m-auto(titulo="Compuerta <em>AND</em>")
            p Produce una salida de 1 solo si ambas entradas son 1.
            p.mb-0 Tabla de verdad:
            figure
              img(src="@/assets/curso/tema2/7.svg" style="max-width:150px;")
          .row.col-xl-11.m-auto(titulo="Compuerta <em>OR</em>")
            p Produce una salida de 1 si al menos una de las entradas es 1.
            p.mb-0 Tabla de verdad:
            figure
              img(src="@/assets/curso/tema2/8.svg" style="max-width:150px;")
          .row.col-xl-11.m-auto(titulo="Compuerta <em>NOT</em>")
            p Invierte la entrada.
            p.mb-0 Tabla de verdad:
            figure
              img(src="@/assets/curso/tema2/9.svg" style="max-width:150px;")
          .row.col-xl-11.m-auto(titulo="Compuertas <em>NAND, NOR, XOR, XNOR</em>")
            p Son compuertas compuestas que combinan las funciones básicas para realizar operaciones más avanzadas. La compuerta #[em XOR], por ejemplo, solo da un 1 si las entradas son diferentes.
    
    .col-xl-10.m-auto.mt-4
      .p-4.p-lg-3(style="background-color:#78B62E;border-radius:10px;" data-aos="fade-up")
        .row.mt-4
          .col-md-auto.d-none.d-md-block(style="place-self:center;")
            figure
              img(src="@/assets/curso/tema2/10.svg")
          .col-md(style="place-self:center;")
            h4 Ejercicio práctico- compuertas lógicas
            p #[strong Ejercicio Práctico:] Construcción de un Circuito con Compuertas Lógicas
            p.mb-0 En un simulador como #[em Tinkercad] o en un #[em protoboard], conecta dos interruptores y una luz LED. Usa una compuerta AND para que el LED se encienda solo si ambos interruptores están activados.

    Separador

    .titulo-segundo(data-aos="flip-up")
      h2#t_2_2 2.2	Definición de sistema embebido

    .row
      .col-lg.pe-lg-0(data-aos="fade-up")
        .h-100.p-4.d-flex.align-content-center.flex-wrap(style="background-color:#98E2EC;")
          p.mb-0 Un sistema embebido es un sistema de computación diseñado para realizar una función específica dentro de un dispositivo mayor. A diferencia de una computadora general, los sistemas embebidos están optimizados para ejecutar una tarea o conjunto de tareas concretas, como controlar la temperatura en un horno o gestionar los sistemas de riego en un campo agrícola. Estos sistemas suelen estar compuestos por un microcontrolador o un microprocesador y se encuentran en aplicaciones industriales, domésticas, automotrices y agrícolas.
      .col-lg-auto.d-none.d-lg-block.ps-lg-0(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema2/11.png")
    
    .cont_2_1
      .cont_decorativo.mb-4.mt-5(data-aos="fade-right")
        .row
          .col-auto.pe-0
            figure
              img(src="@/assets/curso/tema1/3.svg")
          .col.ps-2(style="place-self:center;")
            h3.mb-0.pe-4 Microcontroladores vs. microprocesadores: diferencias y usos
      
      .col-xl-10.m-auto.mt-5
        .row.justify-content-center
          .col-lg.mb-4.mb-lg-0.col-md-9(data-aos="zoom-in")
            .h-100.p-4.text-center(style="background-color:#B0C4D7;border-radius:23px;")
              figure.mb-3
                img.d-inline(src="@/assets/curso/tema2/12.svg" style="max-width:88px;")
              h5 Microcontroladores
              p Incluyen CPU, memoria y periféricos en un solo chip, optimizados para tareas de control y monitoreo en aplicaciones específicas. Son ideales para sistemas embebidos donde se necesita bajo consumo de energía y operación específica. Ejemplos: Arduino, PIC.
          .col-lg.mb-4.mb-lg-0.col-md-9(data-aos="zoom-in")
            .h-100.p-4.text-center(style="background-color:#B0C4D7;border-radius:23px;")
              figure.mb-3
                img.d-inline(src="@/assets/curso/tema2/13.svg" style="max-width:88px;")
              h5 Microprocesadores
              p Son procesadores de propósito general que requieren componentes adicionales (RAM, almacenamiento, etc.) para funcionar. Son más potentes y versátiles, por lo que se usan en sistemas que requieren mayor capacidad de procesamiento, como computadoras y teléfonos inteligentes.
      
      .cont_decorativo.mb-4.mt-5(data-aos="fade-right")
        .row
          .col-auto.pe-0
            figure
              img(src="@/assets/curso/tema1/3.svg")
          .col.ps-2(style="place-self:center;")
            h3.mb-0.pe-4 Arquitectura básica de un sistema embebido: incluye CPU, memoria y dispositivos de entrada/salida
      
      .row.mt-4
        .col-lg-auto.d-none.d-lg-block(data-aos="fade-right")
          figure
            img(src="@/assets/curso/tema2/14.svg")
        .col-lg(data-aos="fade-left")
          p La arquitectura de un sistema embebido típico incluye:
          .p-3.p-lg-4(style="background-color:#294B6D;")
            ul.lista-ul.mb-0
              li.d-flex.bg-white.p-2(style="border-radius:4px;")
                i.fas.fa-check-circle(style="color:#78B62E;")
                span #[strong CPU (Unidad Central de Procesamiento):] Realiza las operaciones lógicas y aritméticas, y controla el flujo de datos.
              li.d-flex.bg-white.p-2(style="border-radius:4px;")
                i.fas.fa-check-circle(style="color:#78B62E;")
                span #[strong Memoria:] Usada para almacenar instrucciones y datos. Puede ser memoria ROM (almacena el programa de forma permanente) y RAM (memoria temporal).
              li.d-flex.bg-white.p-2.mb-0(style="border-radius:4px;")
                i.fas.fa-check-circle(style="color:#78B62E;")
                span #[strong Dispositivos de Entrada/Salida (I/O):] Interfases para conectar el sistema embebido con sensores (entrada) y actuadores (salida), como un sensor de temperatura y una bomba de agua en un sistema de riego.

      Separador

      .titulo-segundo(data-aos="flip-up")
        h2#t_2_3 2.3	Lenguajes de programación y entornos de desarrollo
      
    .row
      .col-lg.pe-lg-0(data-aos="fade-up")
        .h-100.p-4.d-flex.align-content-center.flex-wrap(style="background-color:#C8E2AA;")
          p.fw-bold Lenguajes Comunes: C y C++ como principales lenguajes para microcontroladores
          p.mb-0 Los lenguajes de programación C y C++ son los más utilizados en la programación de sistemas embebidos debido a su eficiencia y control sobre los recursos de hardware. C es particularmente popular en microcontroladores debido a su simplicidad y rapidez, mientras que C++ se usa cuando se necesita un enfoque orientado a objetos
      .col-lg-auto.d-none.d-lg-block.ps-lg-0(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema2/15.png")
    
    .cont_decorativo.mb-4.mt-5(data-aos="fade-right")
      .row
        .col-auto.pe-0
          figure
            img(src="@/assets/curso/tema1/3.svg")
        .col.ps-2(style="place-self:center;")
          h3.mb-0.pe-4 Entornos de desarrollo: uso de herramientas como Arduino IDE o MPLAB
    
    .row.mt-5
      .col-lg-auto.d-none.d-lg-block(data-aos="fade-right")
        figure
          img(src="@/assets/curso/tema2/16.svg")
      .col-lg.pe-lg-0(data-aos="fade-left")
        ul.lista-ul
          li.d-flex.mb-3
            i.fas.fa-check-circle(style="color:#78B62E;")
            span #[strong Arduino IDE:] Entorno de desarrollo fácil de usar diseñado para programar microcontroladores Arduino. Ofrece una interfaz intuitiva y permite a los principiantes desarrollar proyectos rápidamente.
          li.d-flex
            i.fas.fa-check-circle(style="color:#78B62E;")
            span #[strong MPLAB:] Entorno de desarrollo para programar microcontroladores PIC. Proporciona un conjunto de herramientas avanzadas que permiten el desarrollo, depuración y programación de aplicaciones en sistemas embebidos.
        p.mb-0 Ambos entornos son utilizados para programar y probar proyectos embebidos que pueden aplicarse en diferentes sectores, incluyendo el agrícola.
    
    Separador

    .titulo-segundo(data-aos="flip-up")
      h2#t_2_4 2.4	Aplicaciones prácticas
    
    p(data-aos="fade-right") Las aplicaciones básicas en el apartado de #[strong Lenguajes de Programación y Entornos de Desarrollo] para sistemas embebidos en el contexto de electrónica digital y sistemas embebidos incluyen una variedad de proyectos y funciones de control y monitoreo. A continuación, se describen algunas aplicaciones comunes usando lenguajes como C y C++, y entornos como #[strong Arduino IDE y MPLAB] (Tabla. 3)

    .titulo-sexto.color-acento-contenido.mt-5(data-aos="fade-down")
      h5 Tabla 3.
      span Aplicaciones prácticas de sistemas embebidos y microcontroladores en control y automatización agrícola.
    .tabla-a.color-acento-botones(data-aos="fade-up")
      table
        caption.fw-normal Fuente: OIT, 2024.
        thead(style="border:0;")
          tr.text-center(style="background-color:#78B62E;")
            th Aplicación
            th Desarrollo
            th Descripción
        tbody
          tr(style="background-color:#F6F6F6;")
            td.text-center(style="border:0;border-right:1px #AFAFAF solid;")  Control de dispositivos de encendido y apagado
            td(style="border:0;border-right:1px #AFAFAF solid;")  
              p #[strong Aplicación:] Encender y apagar un LED o cualquier dispositivo (como un motor o una bomba) en función de una entrada.
              p #[strong Lenguaje:] C o C++.
              p #[strong Entorno de Desarrollo:] Arduino IDE o MPLAB
            td(style="border:0;") 
              p Este es uno de los primeros ejercicios que se enseña para familiarizarse con el control de salidas digitales. Se puede usar para aprender a manejar entradas (como botones o sensores) y cómo estas pueden activar salidas específicas.
          tr(style="background-color:#fff;")
            td.text-center(style="border:0;border-right:1px #AFAFAF solid;") Lectura de sensores y actuación en función de variables
            td(style="border:0;border-right:1px #AFAFAF solid;") 
              p #[strong Aplicación:] Leer datos de sensores (como un sensor de temperatura, humedad o luz) y activar un dispositivo en función de esos valores.
              p #[strong Lenguaje:] C (para microcontroladores PIC) o C++ (en Arduino).
              p #[strong Entorno de Desarrollo:] Arduino IDE o MPLAB.
            td(style="border:0;") 
              p Permite la implementación de sistemas de control básico. Por ejemplo, se puede encender un ventilador cuando la temperatura supera un límite o activar una bomba de agua cuando la humedad del suelo cae por debajo de un valor específico.
          tr(style="background-color:#F6F6F6;")
            td.text-center(style="border:0;border-right:1px #AFAFAF solid;")  Control de motores y actuadores
            td(style="border:0;border-right:1px #AFAFAF solid;")  
              p #[strong Aplicación:] Controlar la velocidad y dirección de un motor para aplicaciones como sistemas de riego móviles o pequeñas plataformas de transporte automatizado.
              p #[strong Lenguaje:] C o C++.
              p #[strong Entorno de Desarrollo:] Arduino IDE
            td(style="border:0;") 
              p En esta aplicación, los estudiantes aprenden a controlar motores de corriente continua o motores paso a paso utilizando módulos de control y funciones de PWM (modulación por ancho de pulso), esenciales en el manejo de motores
          tr(style="background-color:#fff;")
            td.text-center(style="border:0;border-right:1px #AFAFAF solid;") Monitoreo de variables y almacenamiento de datos
            td(style="border:0;border-right:1px #AFAFAF solid;") 
              p #[strong Aplicación:] Monitorear y registrar datos de sensores como temperatura, humedad, o nivel de luz en un sistema de almacenamiento de datos.
              p #[strong Lenguaje:] C o C++.
              p #[strong Entorno de Desarrollo:] Arduino IDE o MPLAB
            td(style="border:0;") 
              p Esta aplicación es básica en sistemas de monitoreo. Los datos recolectados por los sensores se guardan en una tarjeta SD o en una memoria EEPROM para un análisis posterior, permitiendo el monitoreo continuo de variables importantes en sistemas agrícolas.
          tr(style="background-color:#F6F6F6;")
            td.text-center(style="border:0;border-right:1px #AFAFAF solid;")  Sistema de alarma con sensores
            td(style="border:0;border-right:1px #AFAFAF solid;")  
              p #[strong Aplicación:] Crear un sistema de alarma que se active cuando los datos de un sensor detectan condiciones anormales, como una temperatura muy alta o humedad muy baja.
              p #[strong Lenguaje:] C o C++.
              p #[strong Entorno de Desarrollo:] Arduino IDE o MPLAB.
            td(style="border:0;") 
              p Este tipo de aplicación es útil para entornos donde es necesario mantener ciertas condiciones (por ejemplo, en invernaderos o almacenes). Se utiliza programación básica para verificar el valor de sensores y activar alarmas visuales o sonoras en caso de condiciones fuera de los límites establecidos.
          tr(style="background-color:#fff;")
            td.text-center(style="border:0;border-right:1px #AFAFAF solid;") Interfaz básica con usuario
            td(style="border:0;border-right:1px #AFAFAF solid;") 
              p #[strong Aplicación:] Crear una interfaz con botones o una pantalla LCD para que el usuario pueda interactuar con el sistema.
              p #[strong Lenguaje:] C o C++.
              p #[strong Entorno de Desarrollo:] Arduino IDE o MPLAB
            td(style="border:0;") 
              p Esta aplicación permite que los estudiantes programen interfaces simples, donde el usuario puede ajustar valores (como el límite de temperatura para una alarma) y ver datos en tiempo real. Esto introduce conceptos básicos de interacción usuario-sistema en sistemas embebidos.
          tr(style="background-color:#F6F6F6;")
            td.text-center(style="border:0;border-right:1px #AFAFAF solid;")  
            td(style="border:0;border-right:1px #AFAFAF solid;")  
            td(style="border:0;") 
          tr(style="background-color:#fff;")
            td.text-center(style="border:0;border-right:1px #AFAFAF solid;") Control de sistemas de riego automatizado
            td(style="border:0;border-right:1px #AFAFAF solid;") 
              p #[strong Aplicación:] Controlar automáticamente el riego de plantas en función de la humedad del suelo y el horario.
              p #[strong Lenguaje:] C o C++.
              p #[strong Entorno de Desarrollo:] Arduino IDE.
            td(style="border:0;") 
              p Se programa un sistema embebido para monitorear la humedad del suelo y activar una bomba de agua cuando la humedad cae por debajo de un umbral. También se pueden establecer horarios específicos para el riego, integrando lógica y control de tiempo.
          tr(style="background-color:#F6F6F6;")
            td.text-center(style="border:0;border-right:1px #AFAFAF solid;")  Proyectos básicos de comunicación serial
            td(style="border:0;border-right:1px #AFAFAF solid;") 
              p #[strong Aplicación:] Enviar y recibir datos entre el microcontrolador y otros dispositivos (como una computadora o un módulo de comunicación).
              p #[strong Lenguaje:] C o C++.
              p #[strong Entorno de Desarrollo:] Arduino IDE.
            td(style="border:0;") 
              p Estos proyectos permiten a los estudiantes aprender sobre la comunicación serial, lo cual es esencial para enviar datos del microcontrolador a una computadora para su visualización o control remoto. Un ejemplo podría ser enviar la lectura de un sensor a una computadora para mostrar gráficos en tiempo real.



    


</template>

<script>
import AcordionRED from '../bootstrap/AcordionRED.vue'
export default {
  name: 'Tema2',
  components: {
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
