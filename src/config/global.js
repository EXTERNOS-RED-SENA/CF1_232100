export default {
  global: {
    componenteFormativo:
      'Fundamentos en tecnología aplicada en sistemas electromecánicos e industriales',
    descripcionCurso:
      'El componente brinda formación integral en desarrollo, análisis y monitoreo de sistemas productivos. Abarca áreas clave como electrotecnia DC, electrónica digital, sistemas Embebidos, dibujo técnico y caracterización de variables en procesos. Prepara a principiantes y técnicos para enfrentar los desafíos técnicos de la industria con visión analítica y operativa.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Introducción la electrotecnia',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Electrotecnia DC',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Electrotecnia AC',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Electrónica digital y sistemas embebidos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Fundamentos teóricos a la electrónica digital',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Definición de sistema embebido',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Lenguajes de programación y entornos de desarrollo',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Aplicaciones prácticas',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Dibujo Técnico',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Dibujo artístico Vs. Dibujo técnico',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Instrumentos y manejo en el dibujo técnico',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Nociones de geometría plana',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Tipos de vistas y proyecciones',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo: 'Interpretación de formas, acotado y lectura de planos',
            hash: 't_3_5',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Mecánica y ajuste',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Fundamentos Teóricos',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Identificación y diagnóstico de componentes mecánicos',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Técnicas de Mecanizado para Ajuste',
            hash: 't_4_3',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Herramientas y Sistema de Montajes',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Fundamentos teóricos de las herramientas de montaje',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Sistemas de montaje',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Procedimientos de montaje y ajuste',
            hash: 't_5_3',
          },
          {
            numero: '5.4',
            titulo: 'Seguridad y mantenimiento de herramientas',
            hash: 't_5_4',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Arduino',
      referencia:
        'Maristas Huelva. (n.d.). <em>Arduino: Libro kit básico</em>. [Documento PDF].',
      tipo: 'Documento',
      link:
        'https://www.maristashuelva.es/webinfo/tecnologia/arduino/Libro_kit_Basico.pdf',
    },
    {
      tema: 'Circuitos DC y AC',
      referencia:
        'Tinkercad. (n.d.). <em>Circuitos DC y AC: Simulador en línea</em>. [Simulador en línea].',
      tipo: 'Simulador en línea',
      link: 'https://www.tinkercad.com/embed/g1Pvn5fI1mE',
    },
    {
      tema: '“Máquinas Agrícolas: diseño industria',
      referencia:
        'YouTube. (n.d.). <em>Máquinas Agrícolas: diseño industrial</em>. [Video]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=mxsKI3NCQlY',
    },
    {
      tema: 'Electrónica digital',
      referencia:
        'YouTube. (n.d.). <em>Electrónica digital</em>. [Video]. YouTube',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=MPEHYhKQztQ',
    },
    {
      tema: 'TRANSISTORIZED! La historia de: El Transistor',
      referencia:
        'YouTube. (n.d.). TRANSISTORIZED! <em>La historia de: El Transistor</em>. [Video]. YouTube',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=f3IUVvJ2XgI&t=1899s',
    },
    {
      tema: 'Diferencias entre corriente alterna y corriente directa',
      referencia:
        'YouTube. (n.d.). <em>Diferencias entre corriente alterna y corriente directa</em>. [Video]. YouTube',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=BPaIiaoYkNY',
    },
    {
      tema: '¿Cómo funciona el transistor?',
      referencia:
        'YouTube. (n.d.). <em>¿Cómo funciona el transistor?</em> [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=ljSdrYmdF44',
    },
    {
      tema: 'Qué es un semiconductor',
      referencia:
        'YouTube. (n.d.). <em>¿Qué es un semiconductor</em>. [Video]. YouTube',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=fFVU7-kfPe8',
    },
    {
      tema: 'Electrotecnia (AC, DC)',
      referencia: 'Nunez, F. (2022). "Fundamentos de Electrotecnia".',
      tipo: 'Video',
      link: 'https://www.youtube.com/fundamentos_electrotecnia',
    },
    {
      tema: 'Electrónica Digital',
      referencia:
        'Jiménez, M. (2023). Introducción a la Electrónica Digital. Biblioteca SENA',
      tipo: 'Capítulo de libro',
      link: 'https://biblioteca.sena.edu.co/',
    },
    {
      tema: 'Sistemas de Control',
      referencia: 'OpenAI. (2024). "Simulador de Circuitos". OpenAI.',
      tipo: 'Simulador',
      link: 'https://www.circuitlab.com/',
    },
    {
      tema: 'Dibujo Técnico',
      referencia:
        'Rodríguez, A. (2022). "Introducción al Dibujo Técnico". Universidad Abierta.',
      tipo: 'Artículo',
      link: 'Universidad Abierta',
    },
    {
      tema: 'Procesos Industriales',
      referencia:
        'García, R. (2023). "Mecanizado CNC y su Aplicación en la Industria". Biblioteca SENA.',
      tipo: 'Capítulo de libro',
      link: 'https://biblioteca.sena.edu.co/',
    },
  ],
  glosario: [
    {
      termino: 'Arduino',
      significado:
        'Plataforma de hardware libre que facilita el desarrollo de proyectos de electrónica mediante el uso de microcontroladores y un entorno de programación accesible.',
    },
    {
      termino: 'Arranque de viruta',
      significado:
        'Proceso de fabricación en el que se elimina material de una pieza en bruto mediante corte para obtener la forma y dimensiones deseadas.',
    },
    {
      termino: 'Circuito digital',
      significado:
        'Sistema electrónico donde las señales representan datos en forma de 0 y 1 (binario), utilizado en computadoras y dispositivos digitales.',
    },
    {
      termino: 'Corriente alterna (AC)',
      significado:
        'Tipo de corriente eléctrica que cambia de dirección de forma periódica, comúnmente usada en sistemas de distribución de electricidad doméstica e industrial.',
    },
    {
      termino: 'Corriente directa (DC)',
      significado:
        'Corriente eléctrica que fluye en una sola dirección, generalmente utilizada en dispositivos electrónicos y sistemas de baterías.',
    },
    {
      termino: 'Dibujo técnico',
      significado:
        'Representación gráfica de objetos y estructuras utilizando normas específicas para transmitir información clara y precisa en ingeniería y arquitectura.',
    },
    {
      termino: 'Electrotecnia',
      significado:
        'Rama de la ingeniería que estudia la producción, distribución y uso de la electricidad y los dispositivos eléctricos.',
    },
    {
      termino: 'Mecánica y ajuste',
      significado:
        'Conjunto de operaciones y procedimientos para ensamblar, reparar y calibrar piezas mecánicas en sistemas industriales o automotrices.',
    },
    {
      termino: 'Procesos industriales',
      significado:
        'Métodos y técnicas empleados en la transformación de materias primas en productos finales mediante el uso de maquinaria y tecnología.',
    },
    {
      termino: 'Semiconductor',
      significado:
        'Material que tiene propiedades de conductividad intermedia entre conductores y aislantes, fundamental en la fabricación de dispositivos electrónicos como transistores y diodos.',
    },
    {
      termino: 'Simulación de circuitos',
      significado:
        'Herramienta que permite crear y probar circuitos electrónicos virtualmente para analizar su comportamiento antes de construirlos físicamente.',
    },
    {
      termino: 'Tolerancia',
      significado:
        'Rango permisible de variación en las dimensiones de una pieza para asegurar el funcionamiento adecuado en el ensamblaje de componentes mecánicos.',
    },
    {
      termino: 'Transistor',
      significado:
        'Componente electrónico que amplifica o conmutan señales electrónicas, siendo clave en circuitos digitales y analógicos.',
    },
  ],
  referencias: [
    {
      referencia:
        'Fernández, R., & García, M. (2021). Mecánica y mantenimiento en maquinaria agrícola: Guía práctica para técnicos y agricultores. Editorial Agrícola.',
      link: '',
    },
    {
      referencia:
        'García, R. (2023). Mecanizado CNC y su Aplicación en la Industria. Biblioteca SENA. ',
      link: 'https://biblioteca.sena.edu.co/',
    },
    {
      referencia:
        'García, T., & Rivas, L. (2016). Mantenimiento preventivo y correctivo en equipos agrícolas. Editorial de Tecnología Agrícola.',
      link: '',
    },
    {
      referencia:
        'González, M. (2015). Lubricación y reducción de fricción en maquinaria de campo. Editorial Ingeniería Sostenible.',
      link: '',
    },
    {
      referencia:
        'López, P., & Torres, F. (2020). Conceptos avanzados de mecánica aplicada en el sector agrícola. Ingeniería y Tecnología Agrícola.',
      link: '',
    },
    {
      referencia:
        'Maristas Huelva. (n.d.). Arduino: Libro kit básico. [Documento PDF]. ',
      link:
        'https://www.maristashuelva.es/webinfo/tecnologia/arduino/Libro_kit_Basico.pdf',
    },
    {
      referencia:
        'Martínez, J., & Díaz, C. (2019). Ajustes y tolerancias en maquinaria agrícola pesada. Ediciones Técnicas.',
      link: '',
    },
    {
      referencia:
        'Núñez, F. (2022). Fundamentos de Electrotecnia. [Video]. YouTube. ',
      link: 'https://www.youtube.com/c/AprenderElectricidad ',
    },
    {
      referencia:
        'Organización Internacional del Trabajo. (2024). Big Data: conceptos y herramientas. [Artículo]. OIT. ',
      link: 'https://www.oit.org/big_data_conceptos',
    },
    {
      referencia:
        'Ramírez, S. (2017). Transferencia de energía y sistemas de transmisión en maquinaria agrícola. Editorial Innovación en Agricultura.',
      link: '',
    },
    {
      referencia:
        'Rodríguez, A. (2022). Introducción al Dibujo Técnico. Universidad Abierta. ',
      link: 'https://www.universidadabierta.edu/dibujo_tecnico',
    },
    {
      referencia:
        'Salazar, J., & Pérez, M. (2014). Métodos de unión y ensamblaje en equipos agrícolas. Ediciones del Agro.',
      link: '',
    },
    {
      referencia:
        'Servicio Nacional de Aprendizaje – SENA. (2024). Mecánica y Ajuste en Maquinaria Agrícola. [Manual]. Repositorio SENA.',
      link: 'https://repositorio.sena.edu.co/handle/11404/4761',
    },
    {
      referencia:
        'Sistema de Bibliotecas SENA. (2024). Metrología - Módulo Básico. ',
      link: 'https://biblioteca.sena.edu.co/',
    },
    {
      referencia:
        'Smith, A., & Johnson, R. (2018). Dinámica y estática para maquinaria industrial y agrícola. Prensa de Ingeniería Aplicada.',
      link: '',
    },
    {
      referencia:
        'Tinkercad. (n.d.). Circuitos DC y AC: Simulador en línea. [Simulador en línea]. ',
      link: 'https://www.tinkercad.com/embed/g1Pvn5fI1mE',
    },
    {
      referencia: 'YouTube. (n.d.). ¿Cómo funciona el transistor? [Video].',
      link: 'https://www.youtube.com/watch?v=ljSdrYmdF44',
    },
    {
      referencia: 'YouTube. (n.d.). ¿Qué es un semiconductor? [Video]. ',
      link: 'https://www.youtube.com/watch?v=fFVU7-kfPe8',
    },
    {
      referencia:
        'YouTube. (n.d.). Diferencias entre corriente alterna y corriente directa. [Video]. ',
      link: 'https://www.youtube.com/watch?v=BPaIiaoYkNY',
    },
    {
      referencia: 'YouTube. (n.d.). Electrónica digital. [Video]. ',
      link: ' https://www.youtube.com/watch?v=MPEHYhKQztQ',
    },
    {
      referencia:
        'YouTube. (n.d.). TRANSISTORIZED! La Historia De: El Transistor. [Video]. ',
      link: 'https://www.youtube.com/watch?v=f3IUVvJ2XgI&t=1899s',
    },
  ],
}
