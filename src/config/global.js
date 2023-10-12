export default {
  global: {
    componenteFormativo:
      'Procesos de elaboración y control de calidad de magistrales no estériles',
    descripcionCurso:
      'Este componente formativo abarca temas relacionados con los requisitos y elementos técnicos necesarios para los procesos de elaboración y control de calidad de las preparaciones magistrales no estériles.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
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
        titulo: 'La responsabilidad del preparador',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Elementos técnicos de elaboración según forma farmacéutica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Estabilidad de las preparaciones magistrales no estériles',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Envase primario',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo:
              'Criterios de estabilidad y determinación de la fecha límite de uso',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Control de calidad de preparaciones magistrales no estériles',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Métodos de ensayo',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Validación de los métodos de ensayo',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo:
              'Ensayos según formas farmacéuticas de los preparados magistrales',
            hash: 't_4_3',
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
        download: 'downloads/331502_CF22_DU.pdf',
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
      tema: 'Elementos técnicos de elaboración según forma farmacéutica',
      referencia:
        'López García, B., Roig, O. y García Rebollar, C.A. (2015). <em>Ungüentos, pomadas, cremas, geles y pastas: ¿es todo lo mismo?</em>',
      tipo: 'PDF',
      link:
        'https://fapap.es/files/639-1294-RUTA/FAPAP_4_2015_Unguentos_pomadas.pdf',
    },
    {
      tema: 'Control de calidad de preparaciones magistrales no estériles',
      referencia:
        'Resolución 444 de 2008. [Ministerio de la protección social]. Por la cual se adopta el Instrumento de Verificación de Cumplimiento de Buenas Prácticas de Elaboración de preparaciones magistrales y se dictan otras disposiciones. 12 de febrero de 2008.',
      tipo: 'Resolución',
      link: 'https://www.arlsura.com/images/stories/documentos/res444_08.pdf',
    },
    {
      tema: 'Control de calidad de preparaciones magistrales no estériles',
      referencia:
        'Red de autoridades de medicamentos de Iberoamérica. (2016). <em>Guía de buenas prácticas de elaboración y control de calidad de preparaciones magistrales y oficinales.</em>',
      tipo: 'PDF',
      link:
        'https://www.redeami.net/docs/docs/cooperacion/guias_formulario_iberoamericano/01_Guia_de_buenas_practicas_elaboracion_control_calidad_preparaciones_magistrales_oficinales.pdf',
    },
    {
      tema: 'Control de calidad de preparaciones magistrales no estériles',
      referencia:
        'Resolución 1403 de 2007. [Ministerio de la protección social]. Por la cual se determina el Modelo de Gestión del Servicio Farmacéutico, se adopta el Manual de Condiciones Esenciales y Procedimientos y se dictan otras Disposiciones. 14 de mayo de 2007.',
      tipo: 'Resolución',
      link:
        'http://autorregulacion.saludcapital.gov.co/leyes/Resolucion_1403_de_2007.pdf',
    },
    {
      tema: 'Control de calidad de preparaciones magistrales no estériles',
      referencia:
        'Decreto 1737 de 2005. [Ministerio de la protección social]. Por el cual se reglamenta la preparación, distribución, dispensación, comercialización, etiquetado, rotulado y empaque de los medicamentos homeopático magistrales y oficinales y se dictan otras disposiciones. Mayo 31 de 2005.',
      tipo: 'Decreto',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/DE/DIJ/Decreto-1737-de-2005.pdf',
    },
    {
      tema: 'Requisitos producción de preparaciones magistrales no estériles',
      referencia:
        'Decreto 0780 de 2016. [Ministerio de salud y protección social]. Por medio del cual se expide el Decreto Único Reglamentario del Sector Salud y Protección Social. 6 de mayo de 2016.',
      tipo: 'Decreto',
      link:
        'https://www.minsalud.gov.co/Normatividad_Nuevo/Decreto%200780%20de%202016.pdf',
    },
    {
      tema: 'Ensayos según formas farmacéuticas de los preparados magistrales',
      referencia:
        'Fernández, E. (2003). Control de calidad fórmulas magistrales dermatológicas. Revista farmacia profesional, vol. 17, pág. 70-75.',
      tipo: 'Documento',
      link:
        'https://www.minsalud.gov.co/Normatividad_Nuevo/Decreto%200780%20de%202016.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Buenas prácticas de elaboración magistral',
      significado:
        'conjunto de normas, procesos y procedimientos de carácter técnico que aseguran la correcta elaboración y el control de calidad de los medicamentos magistrales y los preparados oficinales.',
    },
    {
      termino: 'Buenas prácticas de manufactura',
      significado:
        'son las normas, procesos y procedimientos de carácter técnico que aseguran la calidad de los medicamentos, los cosméticos y las preparaciones farmacéuticas a base de recursos naturales.',
    },
    {
      termino: 'Controles en proceso',
      significado:
        'verificaciones que se realizan con el objetivo de comprobar que durante las etapas de ejecución y producción todo se encuentra bajo condiciones controladas.',
    },
    {
      termino: 'Droga (O.M.S)',
      significado:
        'el nombre de droga resulta aplicable a toda sustancia terapéutica o no, que introducida al cuerpo por medio de los mecanismos clásicos (inhalación, ingestión, fricción, administración parenteral, endovenosa) de administración, es capaz de actuar sobre el sistema nervioso central del individuo hasta generar en el una alteración física e intelectual, la experimentación de nuevas sensaciones o la modificación de su estado psíquico.',
    },
    {
      termino: 'Droga blanca',
      significado:
        'es la materia prima para preparar las fórmulas magistrales, tales como: aceite de almendras, aceite de manzanilla, azufre, glicerina pura, ácido Bórico, bórax, bicarbonato de sodio, entre otros. Este tipo de productos no requiere registro INVIMA para su comercialización.',
    },
    {
      termino: 'Excipiente',
      significado:
        'producto más o menos inerte que determina la consistencia, forma o volumen de las preparaciones farmacéuticas.',
    },
    {
      termino: 'Farmacotecnia',
      significado:
        'es una ciencia que estudia las distintas transformaciones a las que deben ser sometidas las materias primas con el fin de darles una forma farmacéutica con la cual se facilite su administración a los seres vivos según una prescripción médica generada por un médico, veterinario u odontólogo o por el resultado de investigaciones clínicas.',
    },
    {
      termino: 'Fórmula magistral tipificada',
      significado: 'aquella fórmula magistral definida en un formulario.',
    },
    {
      termino: 'Garantía de la calidad',
      significado:
        'es un concepto amplio que cubre todos los aspectos que individual o colectivamente influyen en la calidad de un producto. Comprende la totalidad de las gestiones llevadas a cabo con el objeto de asegurar que los productos elaborados en la oficina de farmacia o servicio de farmacia hospitalario son de la calidad requerida para su uso.',
    },
    {
      termino: 'Monografía de preparado farmacéutico',
      significado:
        'documento que describe, detalladamente el método de elaboración, especificaciones, propiedades farmacológicas, control de calidad, condiciones de almacenamiento y requerimientos en el etiquetado del preparado farmacéutico.',
    },
    {
      termino: 'Preparación magistral',
      significado:
        'es la atención farmacéutica que se hace por parte del Químico Farmacéutico una o un grupo de personas en especial, teniendo en cuanta su perfil fármaco terapéutico y son de distribución inmediata.',
    },
    {
      termino: 'Preparado magistral',
      significado:
        'es el preparado o producto farmacéutico para atender una prescripción médica, de un paciente individual, que requiere de algún tipo de intervención técnica de variada complejidad.',
    },
    {
      termino: 'Preparación magistral no estéril',
      significado:
        'es una preparación farmacéutica que se puede formular y elaborar en condiciones ambientales controladas, pero no estériles.',
    },
    {
      termino: 'Preparación o preparado oficinal',
      significado:
        'es el medicamento destinado a su dispensación directa a los pacientes atendidos por las oficinas de farmacia o servicios de farmacia hospitalarios, preparado por un farmacéutico o químico farmacéutico o bajo su dirección, descrito en un formulario oficial, preparado según las buenas prácticas de elaboración y control de calidad establecidas al efecto y con la debida información al paciente.',
    },
    {
      termino: 'Principio activo',
      significado:
        'es todo compuesto biológicamente activo que se extrae de la droga de un ser vivo utilizado por sus propiedades terapéuticas y que se comercializa sin alterar su estructura química.',
    },
    {
      termino: 'Proceso',
      significado:
        'conjunto de actividades que tienen relación entre sí o que interactúan para transformar elementos de entrada en elementos de salida.',
    },
  ],
  referencias: [
    {
      referencia:
        'Decreto 0780 de 2016. [Ministerio de salud y protección social]. Por medio del cual se expide el Decreto Único Reglamentario del Sector Salud y Protección Social. 6 de mayo de 2016.',
      link: '',
    },
    {
      referencia:
        'Farmacopea argentina (Séptima edición). Buenos Aires, 12 de junio de 2003.',
      link: '',
    },
    {
      referencia:
        'Fernández, E. (2003) Control de calidad. Revista farmacia profesional, vol. 17, pág. 70-75. ',
      link:
        'https://www.elsevier.es/es-revista-farmacia-profesional-3-articulo-control-calidad-13044494',
    },
    {
      referencia:
        'Gómez Betancurt, S. (2004). Manual de Laboratorio de Farmacia Magistral. Universidad de Antioquia. Facultad de Química Farmacéutica. Tecnología en Regencia de Farmacia.',
      link: '',
    },
    {
      referencia:
        'Pharmaceutical Compounding - Nonsterile Preparations; USP42-NF37.',
      link: '',
    },
    {
      referencia:
        'Resolución 1403 de 2007. [Ministerio de la protección social]. Por la cual se determina el Modelo de Gestión del Servicio Farmacéutico, se adopta el Manual de Condiciones Esenciales y Procedimientos y se dictan otras Disposiciones. Remington Farmacia (T. II) (20ª ED.) de Gennaro, Alfonso R., Editorial Médica Panamericana.',
      link: '',
    },
    {
      referencia:
        'Resolución 444 del 2008. [Ministerio de la protección social]. Por la cual se adopta el instrumento de verificación de cumplimiento de Buenas Prácticas de Elaboración de preparaciones magistrales y se dictan otras disposiciones. Febrero 12 de 2008.',
      link: '',
    },
    {
      referencia:
        'Rosales, Z. JM y Muñoz, B. JC. (2001). Formulación magistral en atención primaria. Medicina de Familia. Vol. 2, N.º 1.',
      link: '',
    },
    {
      referencia:
        'United States Pharmacopeial Convention, I. (2008). USP 30. Farmacopea de los Estados Unidos de América.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizábal Gutiérrez',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Liliana Victoria Morales Gualdrón',
          cargo: 'Responsable de línea de producción',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Edwin Amir Moreno Moreno',
          cargo: 'Experto temático',
          centro: 'Regional Antioquia – Centro de Servicios de Salud',
        },
        {
          nombre: 'Gustavo Santis Mancipe',
          cargo: 'Diseñador instruccional',
          centro: 'Regional Distrito Capital – Centro de Diseño y Metrología',
        },
        {
          nombre: 'Ana Catalina Córdoba Sus',
          cargo: 'Revisora Metodológica y Pedagógica',
          centro:
            'Regional Distrito Capital – Centro para la Industria de la Comunicación Gráfica',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Asesor pedagógico',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Jhon Jairo Rodríguez Pérez',
          cargo: 'Corrector de estilo',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
        {
          nombre: 'Gloria Amparo López Escudero',
          cargo: 'Adecuación instruccional - 2023',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Andrés Felipe Velandia Espitia',
          cargo: 'Metodología para la formación virtual',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Yazmín Rocío Figueroa Pacheco',
          cargo: 'Diseño web-2023',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Luis Jesús Pérez Madariaga',
          cargo: 'Desarrollador Fullstack-2023',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Lady Adriana Ariza Luque',
          cargo: 'Animación y Producción audiovisual',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Laura Gisselle Murcia Pardo',
          cargo: 'Animación y Producción audiovisual',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Ernesto Navarro Jaimes',
          cargo: 'Animación y Producción audiovisual',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Evaluación de contenidos inclusivos y accesibles',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Lina Marcela Pérez Manchego',
          cargo:
            'Validación de recursos educativos digitales y vinculación al LMS',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Leyson Fabian Castaño Pérez',
          cargo: 'Validación de recursos educativos digitales',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
