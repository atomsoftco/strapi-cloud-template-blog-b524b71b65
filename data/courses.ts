import { CourseCategory } from '../types/CourseCategory';

export const courses: CourseCategory[] = [
  {
    id: 'rcp-primeros-auxilios',
    title: 'RCP & Primeros Auxilios',
    description:
      'Únete a nuestros cursos de RCP y Primeros Auxilios y prepárate para actuar con confianza en situaciones de emergencia. Nuestra capacitación está diseñada para todas las edades y niveles de experiencia. ¡Haz la diferencia cuando más se necesita!',
    image: '/uploads/reanimation.jpg', // Placeholder path
    learningPoints: [
      'Podras parar un sangrado.',
      'Podras resucitar a un adulto e infante con técnicas de RCP (Resucitacion cardiopulmonar).',
      'Seras capaz de usar maniobrabilidad anti asfixia en adultos e infantes.',
      'Podras asistir a personas con diferentes tipos de signos y sintomas.',
    ],
    acquiredSkills: [
      'Control de hemorragias',
      'RCP en adultos e infantes',
      'Maniobra anti asfixia',
      'Atención de emergencias',
      'Evaluación de signos vitales',
    ],
    faqs: [
      {
        question: '¿Cómo puedo resucitar a una persona?',
        answer:
          'En tres simples pasos: 1) Ver si la persona respira (observar el pecho por 10 segundos), 2) Ver si la persona reacciona, 3) Inicia el conteo 30/2: 30 compresiones torácicas en el centro del pecho y 2 soplos, repite esto por 2 minutos y verifica si el paciente reacciona y si no vuelve a repetir lo anterior hasta que llegue la ayuda.',
      },
      {
        question:
          '¿Cómo saber cuando alguien está teniendo un derrame cerebral?',
        answer:
          'Identifica un derrame cerebral con la prueba FAST: F. Parálisis facial, A. Inmovilidad o debilidad en los brazos, S. Dificultad para hablar, T. Tiempo: llama al 911 de inmediato.',
      },
      {
        question:
          '¿Cómo saber si un infante reacciona antes de proceder con el RCP?',
        answer:
          'Se procede a frotar las plantas de los pies y de manera firme no brusca se presiona la punta de un dedo de los pies. Si no reacciona, iniciar RCP.',
      },
    ],
    availableDates: ['2024-07-01', '2024-07-15', '2024-08-01'],
  },
  {
    id: 'primeros-auxilios-deportistas',
    title: 'Primeros Auxilios para Deportistas',
    description:
      'Aprende a actuar rápidamente ante lesiones deportivas y emergencias en el campo de juego. Ideal para entrenadores, deportistas y personal de clubes.',
    image: '/uploads/first_aid_sports.jpg',
    learningPoints: [
      'Atención inmediata a lesiones deportivas.',
      'Vendajes y control de hemorragias en el deporte.',
      'Prevención de lesiones comunes.',
      'Uso de botiquín deportivo.',
    ],
    acquiredSkills: [
      'Inmovilización de extremidades',
      'Vendajes funcionales',
      'Evaluación rápida de lesiones',
      'Atención a esguinces y fracturas',
      'Primeros auxilios en campo',
    ],
    faqs: [
      {
        question: '¿Qué hacer ante una fractura en el campo?',
        answer:
          'Inmovilizar la zona, evitar mover al paciente y buscar ayuda médica profesional.',
      },
      {
        question: '¿Cómo tratar una hemorragia nasal durante el deporte?',
        answer:
          'Inclinar la cabeza hacia adelante y presionar suavemente la nariz durante 10 minutos.',
      },
    ],
    availableDates: ['2024-07-10', '2024-08-05'],
  },
  {
    id: 'bls-soporte-vital-basico',
    title: 'BLS (Soporte Vital Básico)',
    description:
      'Curso certificado de soporte vital básico para profesionales de la salud y público general. Aprende a salvar vidas con técnicas avanzadas.',
    image: '/uploads/bls_course.jpg',
    learningPoints: [
      'Cadena de supervivencia.',
      'Uso de desfibrilador externo automático (DEA).',
      'RCP de alta calidad.',
      'Atención a paro cardiorrespiratorio.',
    ],
    acquiredSkills: [
      'Manejo de DEA',
      'RCP avanzada',
      'Evaluación de la escena',
      'Atención a víctimas inconscientes',
      'Trabajo en equipo en emergencias',
    ],
    faqs: [
      {
        question: '¿Quién puede tomar el curso BLS?',
        answer:
          'Cualquier persona interesada en aprender soporte vital básico, especialmente personal de salud.',
      },
      {
        question: '¿El curso otorga certificación?',
        answer:
          'Sí, al finalizar y aprobar el curso recibirás una certificación válida.',
      },
    ],
    availableDates: ['2024-07-20', '2024-08-15'],
  },
  {
    id: 'primeros-auxilios-naturaleza',
    title: 'Primeros Auxilios en la Naturaleza',
    description:
      'Prepárate para emergencias en excursiones, campamentos y actividades al aire libre. Aprende a actuar lejos de centros médicos.',
    image: '/uploads/first_aid_nature.jpg',
    learningPoints: [
      'Atención a picaduras y mordeduras.',
      'Tratamiento de heridas en campo.',
      'Prevención de hipotermia y deshidratación.',
      'Técnicas de señalización de emergencia.',
    ],
    acquiredSkills: [
      'Uso de recursos naturales para primeros auxilios',
      'Inmovilización improvisada',
      'Evaluación de riesgos en la naturaleza',
      'Atención a traumatismos',
      'Primeros auxilios psicológicos',
    ],
    faqs: [
      {
        question: '¿Qué hacer ante una mordedura de serpiente?',
        answer:
          'Mantener la calma, inmovilizar la zona y buscar ayuda médica urgente.',
      },
      {
        question: '¿Cómo tratar una quemadura solar severa?',
        answer: 'Cubrir la zona, hidratarse y evitar la exposición al sol.',
      },
    ],
    availableDates: ['2024-07-25', '2024-08-20'],
  },
  {
    id: 'parar-el-sangrado',
    title: 'Parar el Sangrado',
    description:
      'Curso intensivo para aprender a controlar hemorragias graves y salvar vidas en situaciones críticas.',
    image: '/uploads/stop_bleeding.jpg',
    learningPoints: [
      'Identificación de hemorragias graves.',
      'Técnicas de compresión y vendaje.',
      'Uso de torniquetes.',
      'Prevención de shock.',
    ],
    acquiredSkills: [
      'Aplicación de torniquetes',
      'Vendaje compresivo',
      'Evaluación de sangrados',
      'Atención rápida en emergencias',
      'Comunicación con servicios de emergencia',
    ],
    faqs: [
      {
        question: '¿Cuándo usar un torniquete?',
        answer:
          'Solo en hemorragias que no se pueden controlar con compresión directa.',
      },
      {
        question: '¿Qué hacer si la persona entra en shock?',
        answer:
          'Acostar a la persona, elevar las piernas y buscar ayuda médica.',
      },
    ],
    availableDates: ['2024-07-30', '2024-08-25'],
  },
  {
    id: 'rcp-infantes',
    title: 'RCP en Infantes',
    description:
      'Especialízate en técnicas de reanimación cardiopulmonar para bebés y niños pequeños. Curso ideal para padres, cuidadores y maestros.',
    image: '/uploads/rcp_infants.jpg',
    learningPoints: [
      'Diferencias entre RCP en adultos e infantes.',
      'Técnicas de compresión y ventilación en niños.',
      'Identificación de emergencias pediátricas.',
      'Prevención de accidentes en el hogar.',
    ],
    acquiredSkills: [
      'RCP pediátrica',
      'Atención a obstrucción de vías aéreas',
      'Evaluación de signos vitales en niños',
      'Primeros auxilios en el hogar',
      'Comunicación con padres y servicios médicos',
    ],
    faqs: [
      {
        question: '¿Qué hacer si un bebé no respira?',
        answer: 'Iniciar RCP inmediatamente y pedir ayuda médica.',
      },
      {
        question: '¿Cómo prevenir accidentes en el hogar?',
        answer:
          'Mantener objetos peligrosos fuera del alcance y supervisar a los niños.',
      },
    ],
    availableDates: ['2024-08-01', '2024-08-18'],
  },
  // Puedes agregar más cursos aquí
];
