const clasesData = [
    {
        "id": 1,
        "src": "./gallery/clases/bodyattack.jpg",
        "title": "Body Attack",
        "description": "Es una clase de acondicionamiento físico de alta intensidad con movimientos que se adaptan a los principiantes y avanzados. Combinamos movimientos atléticos como correr, lanzar y saltar con ejercicios de fuerza como lagartijas y sentadillas.",
        "sucursales": ["lastorres","riogrande"]
    },
    {
        "id": 2,
        "src": "./gallery/clases/bodycombat.jpg",
        "title": "Body Combat",
        "description": "Es un entrenamiento de golpes y patadas, quemando hasta 570 calorías en cada rutina. Este entrenamiento de alta intensidad inspirado en las artes marciales es totalmente sin contacto y no hay movimientos complejos que realizar. El instructor te desafiará a aumentar la intensidad y te motivará a aprovechar al máximo cada movimiento.",
        "sucursales": ["riogrande"]
    },
    {
        "id": 3,
        "src": "./gallery/clases/bodypump.jpg",
        "title": "Body Pump",
        "description": "Es la original clase con barra, el entrenamiento ideal para cualquiera que busque estar tonificado y en forma rápidamente. Usando pesos livianos y moderados con mucha repetición, BODYPUMP te brinda un entrenamiento corporal total. Quemarás hasta 400 calorías, los instructores te guiarán a través de los movimientos y técnicas respaldados científicamente que infunden entrenamiento, motivación y buena música, lo que te ayudará a lograr mucho más rápido tu meta.",
        "sucursales": ["lastorres","riogrande"]
    },
    {
        "id": 4,
        "src": "./gallery/clases/bodystep.jpg",
        "title": "Body Step",
        "description": "El paso básico, al igual que subir y bajar escaleras, está en el corazón de esta disciplina, un ejercicio cardiovascular de cuerpo completo para tonificar realmente los glúteos y las piernas. Este entrenamiento tiene una mezcla de pasos rítmicos y con fuerza, con patrones de sentadillas y desplantes para trabajar las piernas.",
        "sucursales": ["riogrande"]
    },
    {
        "id": 5,
        "src": "./gallery/clases/box.jpg",
        "title": "Box",
        "description": "Disciplina de combate en grupo, se realizan entrenamientos y ejercicios cardiovasculares empleando guantes especiales. Entrenamiento de 45 o 55 minutos.",
        "sucursales": []
    },
    {
        "id": 6,
        "src": "./gallery/clases/crossfit.jpg",
        "title": "CROSSFIT",
        "description": "Entrenamiento de fuerza y acondicionamiento basado en ejercicios funcionales constantemente variados realizados a una alta intensidad. Los movimientos realizados en la clase son de gimnasia, halterofilia, atletismo, de entre las cuales se seleccionan técnicas o movimientos aplicables a la vida diaria y los combinamos de muchas formas diferentes en entrenamientos intensos.",
        "sucursales": ["lastorres","riogrande"]
    },
    {
        "id": 7,
        "src": "./gallery/clases/cxwork.jpg",
        "title": "Cxwork",
        "description": "Inspirado en los principios del entrenamiento atlético, es un entrenamiento básico científico para un increíble tonificación y rendimiento deportivo. Desarrolla fuerza, estabilidad y resistencia en los músculos que sostienen su núcleo, mejora el equilibrio, ayuda a prevenir lesiones y mejora en todo lo que haces.",
        "sucursales": []
    },
    {
        "id": 8,
        "src": "./gallery/clases/gap.jpg",
        "title": "Gap",
        "description": "Es una clase de entrenamiento de Glúteos, Abdomen y Pierna. Se combinan movimientos de fuerza y resistencia. Se trabajan los músculos más representativos de tu cuerpo. Entrenamiento de 40 o 50 minutos.",
        "sucursales": []
    },
    {
        "id": 9,
        "src": "./gallery/clases/pilates.jpg",
        "title": "PILATES",
        "description": "Conjunto de ejercicios físicos en los que se entrena los músculos, la resistencia, la flexibilidad y el control de la respiración y de la mente. Aumenta la fuerza sin exceso de volumen, creando un cuerpo atlético y armónico con los muslos definidos y un abdomen plano.",
        "sucursales": ["riogrande"]
    },
    {
        "id": 10,
        "src": "./gallery/clases/powerband.jpg",
        "title": "POWER BAND",
        "description": "Es una clase que utiliza una banda de resistencia. Es una banda elástica utilizada para el entrenamiento de fuerza y cardio. Disciplina donde puede ser terapéutico ya que mejora la postura y corrige posturas corporales. Entrenamiento de 45 o 55 minutos.",
        "sucursales": ["lastorres","riogrande"]
    },
    {
        "id": 11,
        "src": "./gallery/clases/powerjump.jpg",
        "title": "POWER JUMP",
        "description": "Es un programa de gimnasia en grupo que utiliza un minitrampolín como equipamiento para realizar el trabajo cardiovascular. Se caracteriza por el uso de combinaciones simples de movimientos acompañados por música divertida.",
        "sucursales": ["lastorres"]
    },
    {
        "id": 12,
        "src": "./gallery/clases/rpm.jpg",
        "title": "RPM",
        "description": "Es un entrenamiento de ciclismo indoor en grupo en el que controlas la intensidad. Es divertido, de bajo impacto y puedes quemar hasta 500 calorías por sesión. Con excelente música y el ciclismo en grupo como uno solo, tu instructor te lleva en un viaje de subidas de colinas, carreras de velocidad y paseos en terreno plano.",
        "sucursales": ["lastorres","riogrande"]
    },
    {
        "id": 13,
        "src": "./gallery/clases/spinning.jpg",
        "title": "Spinning",
        "description": "Es un ejercicio aeróbico y cardiovascular que se realiza sobre una bicicleta estática en el que se trabaja el tren inferior: las piernas y los glúteos. Su finalidad principal es perder peso y la tonificación de los músculos, además de mejorar la fuerza y la resistencia. Las clases de spinning tiene una duración que oscila entre los 40 minutos y una hora, y está guiada por tu instructor.",
        "sucursales": ["lastorres","riogrande"]
    },
    {
        "id": 14,
        "src": "./gallery/clases/trx.jpg",
        "title": "TRX",
        "description": "Es un sistema de entrenamiento basado en la realización de ejercicios en suspensión, donde las manos o los pies se encuentran sostenidos en un punto de anclaje mientras que la otra parte del cuerpo está apoyada en el suelo. Esta disciplina utiliza el peso del propio cuerpo se consigue ejercitar todo tu cuerpo. Para entrenar se utiliza una cinta de nylon resistente y ajustable que, por un lado, tiene un punto de anclaje en un extremo y soportes para los pies y por el otro tiene agarres.",
        "sucursales": ["riogrande"]
    },

    {
        "id": 15,
        "src": "./gallery/clases/yoga.jpg",
        "title": "Yoga",
        "description": "Ideal para todos, mejora tu mente, tu cuerpo y tu vida. Durante la clase la música te inspirara mientras haces flexiones y realizas estiramientos a través de una serie de sencillos movimientos. El control de la respiración es parte de todos los ejercicios, y los instructores siempre te brindarán opciones para tu tipo de entrenamiento.",
        "sucursales": ["lastorres","riogrande"]
    },

    {
        "id": 16,
        "src": "./gallery/clases/zumba.jpg",
        "title": "Zumba",
        "description": "Un entrenamiento de baile increíblemente adictivo y amante de la diversión. Zumba es una clase libre de ego, no se requiere experiencia en baile. Todo lo que necesitas es una actitud y una sonrisa, incluso si entras pensando que no puedes, saldrás sabiendo que puedes. Entrenamiento de 45 o 60 minutos.",
        "sucursales": ["lastorres","riogrande"]
    }



]





export default clasesData;