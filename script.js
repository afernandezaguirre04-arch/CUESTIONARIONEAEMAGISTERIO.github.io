// --- Bancos de Preguntas (Organizados por Tema) ---
        
//--- TEMA 1 ---
/**
 * BANCO DE PREGUNTAS - TEMA NEAE
 * Basado en los documentos:
 * - GLOSARIO DE TÉRMINOS.pdf
 * - clasificación .pdf
 * - Modalidades.pdf
 * - Anexo6-Recursos.pdf
 * - TEMA1_Diapositivas.pdf
 * - ModeloFuncionamiento Individual.pdf
 */

// --- PREGUNTAS FÁCILES ---
var questions_easy = {
    'tema1': [ 
        {
            question: 'Según el glosario, ¿qué cualidad permite que algo sea alcanzable, comprendido o utilizado fácilmente por todas las personas?',
            answers: [
                { text: 'Accesibilidad', correct: true },
                { text: 'Equidad', correct: false },
                { text: 'Inclusión', correct: false },
                { text: 'Integración', correct: false }
            ],
            explanation: 'La accesibilidad es una condición fundamental para la inclusión. Se define como la cualidad que deben tener los entornos, procesos o productos para ser comprensibles y utilizables por todas las personas, incluidas aquellas con discapacidad. El concepto de Accesibilidad Universal va un paso más allá, buscando que este uso sea en condiciones de seguridad, comodidad y de la forma más autónoma posible. Es un principio clave en la LOMLOE para garantizar la no discriminación.'
        },
        {
            question: '¿Qué término se define como el proceso que implementa estrategias para que cada persona tenga acceso y oportunidades justas y equitativas?',
            answers: [
                { text: 'Igualdad', correct: false },
                { text: 'Equidad', correct: true },
                { text: 'Justicia (social)', correct: false },
                { text: 'Accesibilidad Universal', correct: false }
            ],
            explanation: 'La equidad es un principio básico de la inclusión educativa. A diferencia de la igualdad (que da lo mismo a todos), la equidad implementa estrategias específicas para que cada persona tenga oportunidades justas. Esto implica reconocer que, debido a los diferentes contextos o diversidades, es necesario eliminar barreras específicas que impedirían el éxito de una persona en particular. El objetivo es compensar las desigualdades de origen.'
        },
        {
            question: '¿Cómo se denomina el proceso que busca asegurar la participación plena de los estudiantes, brindando las condiciones necesarias para que formen parte de la vida en igualdad de oportunidades?',
            answers: [
                { text: 'Integración', correct: false },
                { text: 'Exclusión', correct: false },
                { text: 'Inclusión', correct: true },
                { text: 'Deficiencia', correct: false }
            ],
            explanation: 'El término correcto es Inclusión. Este concepto busca asegurar la participación plena de todo el alumnado, garantizando que tengan las condiciones necesarias para formar parte de la comunidad educativa en igualdad de oportunidades. La inclusión vela por el bienestar integral del estudiante (físico, emocional e intelectual). Es un principio fundamental recogido en la LOMLOE para la atención a las diferencias individuales.'
        },
        {
            question: 'Según el glosario, ¿qué concepto implica que los estudiantes con "necesidades educativas especiales" se ubican en entornos de educación general con adaptaciones, pero con la condición de que se adapten ellos al entorno preexistente?',
            answers: [
                { text: 'Inclusión', correct: false },
                { text: 'Accesibilidad', correct: false },
                { text: 'Equidad', correct: false },
                { text: 'Integración', correct: true }
            ],
            explanation: 'Este modelo se conoce como Integración. En la integración, los estudiantes con NEE son ubicados en aulas ordinarias, pero se espera que sean ellos quienes se adapten a una estructura y un entorno que permanecen inalterados. La inclusión, por el contrario, busca que sea el sistema el que se modifique para acoger a la diversidad de todo el alumnado. La integración es un paso previo, pero la inclusión es el objetivo final.'
        },
        {
            question: 'La pérdida o anormalidad de una estructura o función psicológica, fisiológica o anatómica se define como:',
            answers: [
                { text: 'Deficiencia', correct: true },
                { text: 'Discapacidad', correct: false },
                { text: 'Minusvalía', correct: false },
                { text: 'Exclusión', correct: false }
            ],
            explanation: 'Este término es Deficiencia. Es importante distinguirlo de "discapacidad". La deficiencia es la pérdida o anormalidad de una estructura o función a nivel orgánico (psicológico, fisiológico o anatómico). Por ejemplo, una lesión medular es una deficiencia. Esta deficiencia *puede* (o no) provocar una discapacidad (dificultad para realizar una actividad).'
        },
        {
            question: '¿Qué término se refiere a la restricción o ausencia, debida a una deficiencia, de la capacidad de realizar una actividad considerada normal para el ser humano?',
            answers: [
                { text: 'Minusvalía', correct: false },
                { text: 'Discapacidad', correct: true },
                { text: 'Diversidad Funcional', correct: false },
                { text: 'Exclusión', correct: false }
            ],
            explanation: 'Esto es la Discapacidad. La discapacidad es la consecuencia de una deficiencia (pérdida de una función). Se refiere a la restricción o dificultad para realizar una actividad que se considera "normal" para una persona. Por ejemplo, a consecuencia de una deficiencia visual (pérdida de la vista), una persona puede tener una discapacidad para leer texto impreso.'
        },
        {
            question: '¿Qué significan las siglas DUA?',
            answers: [
                { text: 'Dificultad Universal del Alumnado', correct: false },
                { text: 'Derecho Único de Aprendizaje', correct: false },
                { text: 'Diseño Universal de Aprendizaje', correct: true },
                { text: 'Diversidad Unificada en el Aula', correct: false }
            ],
            explanation: 'DUA significa Diseño Universal de Aprendizaje (o Diseño Universal para el Aprendizaje). Es un modelo de enseñanza fundamental para la educación inclusiva. Reconoce que cada alumno es único y aprende de manera diferente. Su objetivo es crear un currículo flexible desde el principio, evitando la necesidad de hacer adaptaciones posteriores.'
        },
        {
            question: 'El DUA (Diseño Universal de Aprendizaje) se basa en proporcionar múltiples formas de:',
            answers: [
                { text: 'Evaluación, calificación y agrupación.', correct: false },
                { text: 'Interés, representación, acción y expresión.', correct: true },
                { text: 'Diagnóstico, intervención y segregación.', correct: false },
                { text: 'Apoyo, recursos y personal especializado.', correct: false }
            ],
            explanation: 'El DUA se estructura en torno a tres principios fundamentales basados en las redes cerebrales. El primer principio es proporcionar múltiples formas de compromiso (el "POR QUÉ" del aprendizaje) para captar el interés. El segundo es proporcionar múltiples formas de representación (el "QUÉ"). Y el tercero es proporcionar múltiples formas de acción y expresión (el "CÓMO"), permitiendo que el estudiante demuestre lo que sabe.'
        },
        {
            question: 'En el modelo ecológico de Bronfenbrenner, ¿cuál es el sistema que incluye los entornos en los que la persona está presente y actúa directamente (ej. familia, escuela)?',
            answers: [
                { text: 'Mesosistema', correct: false },
                { text: 'Exosistema', correct: false },
                { text: 'Macrosistema', correct: false },
                { text: 'Microsistema', correct: true }
            ],
            explanation: 'Este es el Microsistema. Es el nivel más inmediato de influencia sobre la persona. Incluye todos aquellos entornos, actividades y relaciones interpersonales en los que el individuo participa activamente. Los ejemplos más claros del microsistema de un niño son la familia (la relación con sus padres) y la escuela (la relación con su profesor y compañeros).'
        },
        {
            question: '¿Qué sistema del modelo de Bronfenbrenner representa el nivel contextual más exterior, como los valores y las leyes de una cultura?',
            answers: [
                { text: 'Macrosistema', correct: true },
                { text: 'Microsistema', correct: false },
                { text: 'Exosistema', correct: false },
                { text: 'Mesosistema', correct: false }
            ],
            explanation: 'Este es el Macrosistema. Representa el nivel contextual más amplio y exterior que influye en todos los demás sistemas (micro, meso y exo). No es un entorno físico, sino que se compone de los patrones culturales, valores, ideologías, sistemas económicos y leyes de la sociedad en la que vive el individuo. Por ejemplo, las leyes educativas de un país son parte del macrosistema.'
        },
        {
            question: 'El documento de clasificación de la Junta de Andalucía divide al alumnado con NEAE en cuatro grandes categorías. ¿Cuáles son?',
            answers: [
                { text: 'Discapacidad, Trastornos, Altas Capacidades y Compensatoria.', correct: false },
                { text: 'NEE, Dificultades de aprendizaje, Altas capacidades intelectuales y Acciones de carácter compensatorio.', correct: true },
                { text: 'Leves, Moderados, Graves y Profundos.', correct: false },
                { text: 'Físicos, Psíquicos, Sensoriales y Sociales.', correct: false }
            ],
            explanation: 'El sistema educativo andaluz organiza las Necesidades Específicas de Apoyo Educativo (NEAE) en cuatro grandes bloques. El primero es el alumnado con Necesidades Educativas Especiales (NEE), que incluye discapacidades o trastornos graves. El segundo bloque es el alumnado con Dificultades de Aprendizaje (DEA). El tercero corresponde al alumnado con Altas Capacidades Intelectuales (AACC). Finalmente, el cuarto bloque agrupa al alumnado que requiere Acciones de Carácter Compensatorio.'
        },
        {
            question: '¿Qué significan las siglas CIF?',
            answers: [
                { text: 'Clasificación Internacional de Fármacos', correct: false },
                { text: 'Centro de Intervención Funcional', correct: false },
                { text: 'Clasificación Internacional del Funcionamiento, de la Discapacidad y de la Salud', correct: true },
                { text: 'Capacidad Intelectual y Funcional', correct: false }
            ],
            explanation: 'Las siglas CIF corresponden a la Clasificación Internacional del Funcionamiento, de la Discapacidad y de la Salud. Es una clasificación desarrollada por la Organización Mundial de la Salud (OMS). A diferencia del DSM-5 o la CIE-11 que proporcionan diagnósticos, la CIF se centra en describir el funcionamiento humano y sus restricciones, sirviendo como un marco de referencia para organizar esta información.'
        },
        {
            question: 'Uno de los objetivos de la CIF es:',
            answers: [
                { text: 'Diagnosticar enfermedades mentales como el DSM-5.', correct: false },
                { text: 'Establecer un lenguaje común para describir la salud y los estados relacionados con ella.', correct: true },
                { text: 'Determinar el CI de una persona.', correct: false },
                { text: 'Clasificar únicamente los factores ambientales.', correct: false }
            ],
            explanation: 'La CIF tiene múltiples aplicaciones (estadísticas, de investigación, clínicas, etc.). Uno de sus objetivos principales es "Establecer un lenguaje común para describir la salud y los estados relacionados con ella". Esto permite una comunicación y comparación de datos más clara y estandarizada entre diferentes países y disciplinas. No se centra en el diagnóstico de enfermedades, sino en el funcionamiento de la persona.'
        },
        {
            question: '¿En qué se centraba el "Modelo de Déficit" para entender la discapacidad?',
            answers: [
                { text: 'En el carácter interactivo de la discapacidad.', correct: false },
                { text: 'En la participación en los contextos.', correct: false },
                { text: 'En el carácter orgánico e inmutable, con origen en el individuo.', correct: true },
                { text: 'En las necesidades de apoyo del entorno.', correct: false }
            ],
            explanation: 'El "Modelo de Déficit" es una perspectiva desactualizada que ponía el foco del problema en el individuo. Consideraba la discapacidad como algo de carácter orgánico, interno e inmutable. El objetivo de la intervención era paliar síntomas y el principal criterio de diagnóstico era el Cociente Intelectual (CI). Este modelo ha sido superado por modelos interactivos y de participación.'
        },
        {
            question: 'Según la clasificación de la Junta de Andalucía, la "Discapacidad intelectual" se encuadra dentro de:',
            answers: [
                { text: 'Alumnado con Dificultades de aprendizaje.', correct: false },
                { text: 'Alumnado con Altas Capacidades Intelectuales.', correct: false },
                { text: 'Alumnado que precisa acciones de carácter compensatorio.', correct: false },
                { text: 'Alumnado con Necesidades Educativas Especiales (NEE).', correct: true }
            ],
            explanation: 'La categoría "1. Alumnado con Necesidades Educativas Especiales (NEE)" agrupa al alumnado que requiere una atención específica por presentar discapacidades o trastornos graves. La "Discapacidad intelectual" es una de las subcategorías principales dentro de este grupo, junto a otras como la discapacidad visual, auditiva, física o los Trastornos del Espectro Autista.'
        },
        {
            question: 'La "Dificultad específica en el aprendizaje de la lectura o dislexia" se clasifica como:',
            answers: [
                { text: 'Alumnado con Dificultades de aprendizaje', correct: true },
                { text: 'Alumnado con Necesidades Educativas Especiales', correct: false },
                { text: 'Trastornos graves del desarrollo', correct: false },
                { text: 'Acciones de carácter compensatorio', correct: false }
            ],
            explanation: 'La dislexia se enmarca en la categoría "2. Alumnado con Dificultades de Aprendizaje". Específicamente, pertenece a la subcategoría 2.1 "Dificultad específica de aprendizaje". Esta categoría se distingue de las NEE porque las dificultades no vienen determinadas por una discapacidad intelectual o sensorial, sino por desórdenes en los procesos cognitivos básicos.'
        },
        {
            question: 'El "Talento simple" y el "Talento complejo" son categorías dentro de:',
            answers: [
                { text: 'Necesidades Educativas Especiales', correct: false },
                { text: 'Alumnado con Altas Capacidades Intelectuales', correct: true },
                { text: 'Dificultades de aprendizaje', correct: false },
                { text: 'Trastornos graves del desarrollo', correct: false }
            ],
            explanation: 'Estas categorías forman parte del "3. Alumnado con Altas Capacidades Intelectuales". Este grupo se define por manejar múltiples recursos cognitivos o destacar excepcionalmente en uno o varios. Se divide en "Sobredotación intelectual" (alto nivel en múltiples áreas), "Talento complejo" (combinación de varias aptitudes altas) y "Talento simple" (elevada aptitud en un ámbito específico).'
        },
        {
            question: '¿Qué término se utiliza para destacar las capacidades y potencialidades diversas de las personas con discapacidad en lugar de centrarse en sus limitaciones?',
            answers: [
                { text: 'Discapacidad', correct: false },
                { text: 'Deficiencia', correct: false },
                { text: 'Minusvalía', correct: false },
                { text: 'Diversidad Funcional', correct: true }
            ],
            explanation: 'El término "Diversidad Funcional" se ha propuesto como una alternativa a "discapacidad". Su objetivo es cambiar el enfoque, dejando de centrarse en las limitaciones de la persona. En su lugar, busca destacar las capacidades y potencialidades diversas que todas las personas tienen. Es un cambio de paradigma que busca alejarse de términos como deficiencia o minusvalía.'
        },
        {
            question: 'Según las diapositivas sobre la actualidad de las NEAE en Andalucía (2024), ¿cuál es el tipo de NEAE más frecuente?',
            answers: [
                { text: 'NEE (Necesidades Educativas Especiales)', correct: true },
                { text: 'AACC (Altas Capacidades)', correct: false },
                { text: 'Dificultades de Aprendizaje', correct: false },
                { text: 'Incorporación Tardía', correct: false }
            ],
            explanation: 'Según los datos estadísticos presentados para Andalucía en 2024, el alumnado con NEAE se distribuye en tres grandes grupos. El grupo más numeroso es el de "NEE" (Necesidades Educativas Especiales), que representa el 54,8% del total. Le siguen las "Dificultades de Aprendizaje" con un 31,4% y, por último, las "AACC" (Altas Capacidades) con un 13,8%.'
        },
        {
            question: 'En Andalucía (2024), el alumnado NEAE se distribuye en un:',
            answers: [
                { text: '50% chicos y 50% chicas.', correct: false },
                { text: '66,1% chicos y 33,9% chicas.', correct: true },
                { text: '33,9% chicos y 66,1% chicas.', correct: false },
                { text: '29,1% chicos y 38,6% chicas.', correct: false }
            ],
            explanation: 'Los datos estadísticos sobre la actualidad de las NEAE en Andalucía (2024) muestran una diferencia significativa en la distribución por sexo. Existe una mayor prevalencia de chicos identificados con NEAE, alcanzando el 66,1% del total. Por el contrario, las chicas representan el 33,9% del alumnado con estas necesidades.'
        },
        {
            question: 'El modelo conceptual del funcionamiento humano de la AAIDD (presentado en las diapositivas) se basa en 5 dimensiones que incluyen:',
            answers: [
                { text: 'Habilidades intelectuales, Conducta adaptativa, Salud, Participación y Contexto.', correct: true },
                { text: 'Diagnóstico, Tratamiento, Rehabilitación, Apoyo y Evaluación.', correct: false },
                { text: 'Microsistema, Mesosistema, Exosistema, Macrosistema y Cronosistema.', correct: false },
                { text: 'Deficiencia, Discapacidad, Minusvalía, Entorno y Apoyos.', correct: false }
            ],
            explanation: 'El modelo actual de la AAIDD (Asociación Americana sobre Discapacidad Intelectual) es multidimensional y se centra en el funcionamiento humano. Este funcionamiento se analiza a través de cinco dimensiones clave: 1. Habilidades intelectuales, 2. Conducta adaptativa (habilidades prácticas, sociales...), 3. Salud, 4. Participación, y 5. Contexto (el entorno de la persona).'
        },
        {
            question: '¿Qué se entiende por "Conducta adaptativa"?',
            answers: [
                { text: 'El cociente intelectual medido por un test.', correct: false },
                { text: 'Habilidades conceptuales, sociales y prácticas aprendidas para funcionar en la vida diaria.', correct: true },
                { text: 'La capacidad de memorizar y procesar información rápidamente.', correct: false },
                { text: 'El estado integral de bienestar físico, mental y social.', correct: false }
            ],
            explanation: 'La conducta adaptativa es un componente clave en la definición de la discapacidad intelectual, junto con las habilidades intelectuales. No se refiere a la inteligencia, sino al conjunto de habilidades que aprendemos para desenvolvernos en la vida. Estas habilidades se agrupan en tres áreas: conceptuales (ej. lenguaje), sociales (ej. seguir normas, comunicación) y prácticas (ej. autocuidado, autonomía en el hogar).'
        },
        {
            question: '¿Qué significan las siglas ACNS?',
            answers: [
                { text: 'Adaptaciones Curriculares No Significativas', correct: true },
                { text: 'Alumnado Con Necesidades de Supervisión', correct: false },
                { text: 'Apoyos Curriculares Nacionales y Sociales', correct: false },
                { text: 'Aulas Compensatorias de Nivel Superior', correct: false }
            ],
            explanation: 'Las siglas ACNS se refieren a las Adaptaciones Curriculares No Significativas. Estas son medidas educativas específicas que se proponen cuando un alumno presenta un desfase curricular, pero este no es lo suficientemente grande como para eliminar objetivos o contenidos clave. Por ejemplo, en Primaria, se aplican cuando el desfase es de al menos un curso.'
        },
        {
            question: '¿Qué significan las siglas ACS?',
            answers: [
                { text: 'Apoyo Curricular Simple', correct: false },
                { text: 'Alumnado Con Supervisión', correct: false },
                { text: 'Adaptaciones Curriculares Significativas', correct: true },
                { text: 'Aulas de Compensatoria y Seguimiento', correct: false }
            ],
            explanation: 'Las siglas ACS se refieren a las Adaptaciones Curriculares Significativas. Esta es una medida específica de mayor calado que la ACNS. Se propone para alumnado con NEE que presenta un desfase curricular considerable, como por ejemplo, de al menos dos cursos en Educación Primaria. También se aplican cuando limitaciones funcionales por discapacidad impiden adquirir objetivos en áreas no instrumentales.'
        },
        {
            question: 'En el contexto de los recursos personales, ¿qué significa PT?',
            answers: [
                { text: 'Personal de Transporte', correct: false },
                { text: 'Profesional Técnico', correct: false },
                { text: 'Profesorado especialista en Pedagogía Terapéutica', correct: true },
                { text: 'Programa de Transición', correct: false }
            ],
            explanation: 'Las siglas PT identifican al Profesorado especialista en Pedagogía Terapéutica. Este es un recurso personal específico, un docente especializado. Su intervención se propone cuando el alumnado con NEE requiere atención especializada para el desarrollo de las Adaptaciones Curriculares Significativas (ACS) y/o Programas Específicos (PE).'
        },
        {
            question: '¿Qué significa AL en el contexto de los recursos personales?',
            answers: [
                { text: 'Ayudante Lingüístico', correct: false },
                { text: 'Profesorado especialista en Audición y Lenguaje', correct: true },
                { text: 'Aula de Logopedia', correct: false },
                { text: 'Apoyo en Lectura', correct: false }
            ],
            explanation: 'Las siglas AL identifican al Profesorado especialista en Audición y Lenguaje. Al igual que el PT, es un docente especialista que forma parte de los recursos personales específicos. Su intervención se centra en el alumnado que requiere atención especializada para el desarrollo de sus habilidades lingüísticas y de comunicación, por ejemplo, mediante programas específicos de estimulación o reeducación del lenguaje.'
        },
        {
            question: '¿Qué significan las siglas PTIS?',
            answers: [
                { text: 'Profesorado Técnico de Integración Social', correct: false },
                { text: 'Personal Técnico de Interpretación de Signos', correct: false },
                { text: 'Profesional Técnico en Integración Social', correct: true },
                { text: 'Programa de Transición e Inserción Sociolaboral', correct: false }
            ],
            explanation: 'Las siglas PTIS corresponden al Profesional Técnico en Integración Social. Es importante destacar que el PTIS forma parte del "Personal No Docente". Su función no es pedagógica, sino asistencial. Se propone para alumnado que requiere ayudas en tareas como el desplazamiento, el aseo personal, la alimentación, el control de esfínteres o que necesita una supervisión especializada y directa.'
        },
        {
            question: 'La situación desventajosa para un individuo, consecuencia de una deficiencia o discapacidad, que limita o impide el desempeño de un rol normal en su caso, se denomina:',
            answers: [
                { text: 'Deficiencia', correct: false },
                { text: 'Discapacidad', correct: false },
                { text: 'Trastorno', correct: false },
                { text: 'Minusvalía', correct: true }
            ],
            explanation: 'Este concepto es la Minusvalía. Es el tercer eslabón del modelo clásico (Deficiencia -> Discapacidad -> Minusvalía). La minusvalía es la consecuencia social de la discapacidad; es la situación de desventaja que experimenta la persona (ej. dificultad para encontrar empleo o relacionarse). El modelo actual de la CIF prefiere hablar de "restricción en la participación".'
        },
        {
            question: 'En la clasificación de Discapacidad Visual, la ausencia total o casi total de visión se denomina:',
            answers: [
                { text: 'Ceguera', correct: true },
                { text: 'Baja visión', correct: false },
                { text: 'Hipoacusia', correct: false },
                { text: 'Disminución visual grave', correct: false }
            ],
            explanation: 'La Discapacidad Visual se clasifica en dos grandes grupos según el grado de afectación. La "Ceguera" se define como la ausencia total o casi total de visión. El otro grupo es la "Baja visión", que incluye el resto de los casos donde existe un resto visual funcional, pero siempre cumpliendo los criterios generales de discapacidad visual (ej. agudeza inferior a 0,3).'
        },
        {
            question: 'En la clasificación de Discapacidad Auditiva, una pérdida de audición superior a 70 dB se considera:',
            answers: [
                { text: 'Hipoacusia', correct: false },
                { text: 'Sordera', correct: true },
                { text: 'Afasia', correct: false },
                { text: 'Disartria', correct: false }
            ],
            explanation: 'La Discapacidad Auditiva se clasifica en dos grupos en función de los decibelios (dB) de pérdida. La "Hipoacusia" se define como una pérdida auditiva moderada, situada en un rango de entre 20 y 70 dB. La "Sordera", en cambio, se define como una pérdida auditiva severa o profunda, que es superior a los 70 dB.'
        },
        {
            question: '¿Qué caracteriza la Modalidad de escolarización "A"?',
            answers: [
                { text: 'Grupo ordinario a tiempo completo.', correct: true },
                { text: 'Grupo ordinario con apoyos variables.', correct: false },
                { text: 'Aula de Educación Especial en Centro Ordinario.', correct: false },
                { text: 'Centro Específico de Educación Especial.', correct: false }
            ],
            explanation: 'La Modalidad "A" es la más inclusiva y se denomina "Grupo ordinario a tiempo completo". Su finalidad es que el alumnado con NEE adquiera el máximo desarrollo participando en el mismo entorno y actividades que su grupo de referencia. Se destina a alumnado que precisa principalmente adaptaciones de acceso (AAC) o la intervención de personal no docente (como un PTIS), pero que no requiere una intervención directa y continuada del profesorado especialista (PT/AL).'
        },
        {
            question: 'La relación que surge entre los microsistemas (ej. familia-escuela) se denomina:',
            answers: [
                { text: 'Macrosistema', correct: false },
                { text: 'Exosistema', correct: false },
                { text: 'Mesosistema', correct: true },
                { text: 'Microsistema', correct: false }
            ],
            explanation: 'Este nivel es el Mesosistema. No es un entorno en sí mismo, sino la interrelación que se establece entre dos o más microsistemas en los que el niño participa. El ejemplo más importante es la relación familia-escuela. Un mesosistema fuerte (donde hay coherencia y comunicación entre familia y escuela) potencia el desarrollo, mientras que un mesosistema débil (con mensajes contradictorios) puede ser un factor de riesgo.'
        },
        {
            question: 'El DUA (Diseño Universal de Aprendizaje) permite realizar ajustes en el mismo momento de la programación, evitando:',
            answers: [
                { text: 'La evaluación.', correct: false },
                { text: 'La inclusión.', correct: false },
                { text: 'Adaptaciones posteriores.', correct: true },
                { text: 'El trabajo colaborativo.', correct: false }
            ],
            explanation: 'El Diseño Universal de Aprendizaje (DUA) es un enfoque proactivo. Su filosofía es diseñar el currículo y las actividades pensando en la diversidad desde el principio. Al ofrecer múltiples formas de representación, expresión y motivación de manera universal, se ofrece una respuesta inclusiva desde la programación inicial. Esto reduce o elimina la necesidad de realizar adaptaciones "a posteriori" para estudiantes específicos.'
        },
        {
            question: '¿Qué concepto se define como la situación donde no todas las personas tienen acceso a las mismas oportunidades y servicios?',
            answers: [
                { text: 'Integración', correct: false },
                { text: 'Inclusión', correct: false },
                { text: 'Segregación', correct: false },
                { text: 'Exclusión', correct: true }
            ],
            explanation: 'Esta situación se denomina Exclusión. La exclusión ocurre cuando no todas las personas tienen acceso a las mismas oportunidades, servicios o derechos elementales (educación, salud, etc.) que les permitirían llevar una vida digna. La exclusión social suele basarse en prejuicios o estereotipos que impactan negativamente a grupos específicos. Es el opuesto directo de la inclusión.'
        },
        {
            question: 'El proceso que garantiza que factores como el género, la raza o el entorno familiar no determinen el desarrollo de un individuo se define como:',
            answers: [
                { text: 'Igualdad', correct: true },
                { text: 'Equidad', correct: false },
                { text: 'Justicia', correct: false },
                { text: 'Accesibilidad', correct: false }
            ],
            explanation: 'Este concepto es la Igualdad. Se refiere al proceso de garantizar que características que están fuera del control de una persona (como su género, raza, lugar de nacimiento o entorno familiar) no se conviertan en un impedimento que determine su trayectoria vital o su desarrollo. La equidad, en cambio, es la herramienta para lograr esta igualdad, aplicando estrategias justas para compensar desventajas.'
        }
    ]
};

// --- PREGUNTAS MEDIAS ---
var questions_medium = {
    'tema1': [ 
        {
            question: 'Según la clasificación de la Junta de Andalucía, el "Síndrome de Asperger" y el "Autismo" se incluyen dentro de la categoría:',
            answers: [
                { text: 'Trastornos graves de conducta.', correct: false },
                { text: 'Trastornos del Espectro Autista (TEA).', correct: true },
                { text: 'Trastornos graves del desarrollo.', correct: false },
                { text: 'Discapacidad intelectual.', correct: false }
            ],
            explanation: 'El "Autismo" y el "Síndrome de Asperger" son dos de las subcategorías que se agrupan bajo el paraguas de "Trastornos del Espectro Autista" (TEA). Esta categoría TEA, a su vez, forma parte del grupo más grande "1. Alumnado con Necesidades Educativas Especiales (NEE)". Se caracterizan por alteraciones cualitativas en la interacción social y la comunicación.'
        },
        {
            question: 'El "Trastorno por déficit de atención con o sin hiperactividad" (TDAH) aparece en la clasificación de NEE bajo su propia categoría, pero también puede ser considerado dentro de:',
            answers: [
                { text: 'Trastornos graves de conducta.', correct: false },
                { text: 'Dificultades del aprendizaje.', correct: true },
                { text: 'Discapacidad intelectual.', correct: false },
                { text: 'Trastornos del Espectro Autista.', correct: false }
            ],
            explanation: 'El TDAH tiene una clasificación dual en la normativa andaluza. Se considera "Alumnado con NEE" (apartado 1.9) cuando requiere una atención específica que implica recursos (ej. una ACS). Sin embargo, también se contempla como "Dificultades del aprendizaje" (apartado 2.4) si las dificultades que genera se pueden atender con medidas específicas que no implican recursos personales específicos (ej. una ACNS).'
        },
        {
            question: 'Según la clasificación, la "dislexia" (Dificultad específica en el aprendizaje de la lectura) se aplica a partir de qué etapa educativa:',
            answers: [
                { text: 'Educación Infantil (2º ciclo)', correct: false },
                { text: 'Educación Primaria', correct: true },
                { text: 'Educación Secundaria Obligatoria', correct: false },
                { text: 'Se puede aplicar en cualquier etapa, incluida la infantil.', correct: false }
            ],
            explanation: 'La normativa es específica sobre este punto. Las Dificultades Específicas de Aprendizaje (DEA), como la dislexia, disgrafía o discalculia, requieren un proceso madurativo y de aprendizaje de la lectoescritura y el cálculo para ser identificadas. Por este motivo, el documento indica que esta subcategoría "se aplicará a partir de la etapa de educación primaria". En Educación Infantil se usarían otros términos, como "Trastornos graves del desarrollo del lenguaje" si procede.'
        },
        {
            question: '¿Cuál de las siguientes es una subcategoría de las "Dificultades específicas de aprendizaje"?',
            answers: [
                { text: 'Dificultad específica en el aprendizaje del cálculo o discalculia.', correct: true },
                { text: 'Dificultad de aprendizaje por capacidad intelectual límite.', correct: false },
                { text: 'Dificultad de aprendizaje por retraso en el lenguaje.', correct: false },
                { text: 'Trastorno por déficit de atención con hiperactividad.', correct: false }
            ],
            explanation: 'La categoría "2. Alumnado con Dificultades de Aprendizaje" se divide en varias subcategorías. La 2.1 es "Dificultades específicas del aprendizaje", que incluye dislexia, disgrafía, disortografía y discalculia. Las otras opciones, aunque también son Dificultades de Aprendizaje, pertenecen a otras subcategorías: "Dificultad por retraso en el lenguaje" (2.2), "Dificultad por capacidad intelectual límite" (2.3) y "Dificultades derivadas de TDAH" (2.4).'
        },
        {
            question: 'En la clasificación de la Discapacidad Intelectual, ¿qué rango de CI (Cociente Intelectual) corresponde a la "Leve"?',
            answers: [
                { text: 'CI entre 70 y 80', correct: false },
                { text: 'CI entre 50-55 y aproximadamente 70', correct: true },
                { text: 'CI entre 35-40 y 50-55', correct: false },
                { text: 'CI inferior a 20-25', correct: false }
            ],
            explanation: 'La Discapacidad Intelectual requiere limitaciones significativas tanto en el funcionamiento intelectual (generalmente un CI de 70 o inferior) como en la conducta adaptativa. La clasificación andaluza la divide en cuatro grupos según el CI. La "Leve" corresponde a un CI entre 50-55 y aproximadamente 70. La "Moderada" está entre 35-40 y 50-55. La "Grave" entre 20-25 y 35-40, y la "Profunda" es inferior a 20-25.'
        },
        {
            question: 'La diapositiva 21 muestra cuatro diagramas. ¿Cuál representa la "Inclusión"?',
            answers: [
                { text: 'El diagrama con puntos de colores mezclados dentro de un solo círculo.', correct: true },
                { text: 'El diagrama con puntos verdes dentro y puntos de colores fuera.', correct: false },
                { text: 'El diagrama con dos círculos separados (verdes en uno, colores en otro).', correct: false },
                { text: 'El diagrama con un círculo pequeño de colores dentro de uno grande de verdes.', correct: false }
            ],
            explanation: 'El diagrama superior izquierdo (etiquetado "Inclusión") representa este concepto mostrando un único círculo donde todos los puntos, de todos los colores, están mezclados. Esto simboliza un único entorno que acoge y valora la diversidad. Se diferencia de la "Integración" (donde los puntos de colores están juntos pero en un sub-círculo), la "Segregación" (dos círculos separados) y la "Exclusión" (puntos de colores fuera del círculo).'
        },
        {
            question: 'Según las diapositivas, ¿cuál es el propósito del DSM-5?',
            answers: [
                { text: 'Es un sistema dimensional que mide la discapacidad como un espectro.', correct: false },
                { text: 'Es un sistema categorial de clasificación de trastornos, útil para la comunicación entre profesionales.', correct: true },
                { text: 'Es la clasificación de la OMS para el funcionamiento y la salud (CIF).', correct: false },
                { text: 'Es un modelo centrado en los apoyos y el funcionamiento humano (AAIDD).', correct: false }
            ],
            explanation: 'El DSM-5 (Manual Diagnóstico y Estadístico de los Trastornos Mentales) es la herramienta de la Asociación Americana de Psiquiatría. Es un sistema de clasificación "categorial", lo que significa que organiza los trastornos en categorías con criterios diagnósticos específicos. Su principal utilidad es unificar el lenguaje y facilitar la comunicación entre profesionales de la salud mental. No es una herramienta diseñada para planificar la intervención educativa en sí misma.'
        },
        {
            question: 'Según el modelo de la AAIDD (Fig. 5.1), ¿qué cinco dimensiones influyen en el "Funcionamiento humano"?',
            answers: [
                { text: 'Habilidades intelectuales, Conducta adaptativa, Salud, Participación y Contexto.', correct: true },
                { text: 'Cuerpo, Actividades, Factores Ambientales, Factores Personales y Participación.', correct: false },
                { text: 'Microsistema, Mesosistema, Exosistema, Macrosistema y Apoyos.', correct: false },
                { text: 'Deficit, Interactivo, Participación, Apoyos y Entornos.', correct: false }
            ],
            explanation: 'El modelo actual de la AAIDD (Asociación Americana sobre Discapacidad Intelectual) es multidimensional y se centra en el funcionamiento humano. Este funcionamiento se analiza a través de cinco dimensiones clave: 1. Habilidades intelectuales, 2. Conducta adaptativa (habilidades prácticas, sociales...), 3. Salud, 4. Participación, y 5. Contexto (el entorno de la persona).'
        },
        {
            question: '¿Para qué se proponen los "Programas Específicos" (PE) según el Anexo VII?',
            answers: [
                { text: 'Para adaptar el acceso físico al aula, como rampas o mobiliario.', correct: false },
                { text: 'Para eliminar objetivos y contenidos de áreas no instrumentales.', correct: false },
                { text: 'Para favorecer el desarrollo estimulando procesos como la atención, memoria, lenguaje o habilidades sociales.', correct: true },
                { text: 'Exclusivamente para el alumnado con capacidad intelectual límite.', correct: false }
            ],
            explanation: 'Los Programas Específicos (PE) son una medida educativa destinada a alumnado con NEE. Su objetivo es muy concreto: favorecer el desarrollo y facilitar la adquisición de competencias clave mediante la estimulación de procesos cognitivos y adaptativos. Esto incluye trabajar aspectos como la percepción, atención, memoria, estimulación del lenguaje, autonomía personal, habilidades sociales o la gestión de emociones. Son impartidos por profesorado especialista (PT o AL).'
        },
        {
            question: 'Las "Adaptaciones de Acceso" (AAC) se proponen cuando el alumnado requiere elementos para el acceso a:',
            answers: [
                { text: 'La información, la comunicación y la participación.', correct: true },
                { text: 'Un currículo con menos objetivos.', correct: false },
                { text: 'Un centro específico de educación especial.', correct: false },
                { text: 'Un programa de refuerzo de materias instrumentales.', correct: false }
            ],
            explanation: 'Las Adaptaciones de Acceso (AAC) son medidas que no modifican el currículo, sino el entorno, para hacerlo accesible. Se proponen cuando las NEE del alumno (derivadas de una limitación funcional) requieren elementos específicos para tres fines: acceder a la información (ej. ayudas ópticas), a la comunicación (ej. sistemas alternativos) y a la participación (ej. eliminación de barreras arquitectónicas o intervención de personal no docente).'
        },
        {
            question: 'En el 2º ciclo de Educación Infantil, ¿cuándo se propone una Adaptación Curricular No Significativa (ACNS)?',
            answers: [
                { text: 'Cuando hay un desfase curricular de al menos dos cursos.', correct: false },
                { text: 'Cuando el alumno presenta un desfase en el ritmo de aprendizaje y desarrollo que implica una atención más personalizada.', correct: true },
                { text: 'Solo si tiene un diagnóstico de TDAH.', correct: false },
                { text: 'Solo si necesita un PTIS.', correct: false }
            ],
            explanation: 'En el 2º ciclo de Educación Infantil, las ACNS tienen un criterio adaptado a la etapa. No se habla de "cursos" de desfase, sino de un "desfase en el ritmo de aprendizaje y desarrollo" en relación con la programación del grupo. Esta medida se propone cuando dicho desfase es lo suficientemente relevante como para implicar una atención más personalizada por parte del tutor o tutora.'
        },
        {
            question: 'En Educación Primaria, ¿cuándo se propone una Adaptación Curricular No Significativa (ACNS)?',
            answers: [
                { text: 'Cuando hay un desfase curricular de al menos un curso.', correct: true },
                { text: 'Cuando hay un desfase curricular de al menos dos cursos.', correct: false },
                { text: 'Cuando se necesita la intervención de un Fisioterapeuta.', correct: false },
                { text: 'Cuando el alumno presenta un CI inferior a 70.', correct: false }
            ],
            explanation: 'En las etapas de Educación Básica (Primaria y ESO), el criterio para una ACNS es más específico que en Infantil. Se propone esta medida cuando el alumno presenta un desfase curricular de "al menos un curso" en el área o materia que se va a adaptar. Este desfase se mide comparando el nivel de competencia curricular del alumno (criterios de evaluación superados) con el curso en el que está escolarizado.'
        },
        {
            question: 'En Educación Primaria, ¿cuándo se propone una Adaptación Curricular Significativa (ACS)?',
            answers: [
                { text: 'Cuando hay un desfase curricular de al menos un curso.', correct: false },
                { text: 'Cuando hay un desfase curricular de al menos dos cursos.', correct: true },
                { text: 'Cuando el alumno solo necesita adaptaciones de acceso (AAC).', correct: false },
                { text: 'Cuando el alumno presenta un desfase en el ritmo de aprendizaje (sin llegar a un curso).', correct: false }
            ],
            explanation: 'La Adaptación Curricular Significativa (ACS) es una medida de mayor calado. Se propone para alumnado con NEE en Primaria o ESO cuando el desfase curricular es más amplio: "al menos dos cursos" en el área o materia objeto de adaptación. También se puede proponer por limitaciones funcionales (discapacidad física o sensorial) que impidan alcanzar objetivos en áreas no instrumentales, aunque el desfase no sea de dos cursos.'
        },
        {
            question: 'Según el modelo de Bronfenbrenner, el trabajo de los padres (un entorno donde el niño no participa directamente, pero que le afecta) es un ejemplo de:',
            answers: [
                { text: 'Microsistema', correct: false },
                { text: 'Macrosistema', correct: false },
                { text: 'Mesosistema', correct: false },
                { text: 'Exosistema', correct: true }
            ],
            explanation: 'Este entorno es el Exosistema. El exosistema está compuesto por escenarios o estructuras sociales que, aunque no incluyen al niño directamente, sí afectan a lo que ocurre en su microsistema. El niño no va al trabajo de sus padres, pero las condiciones laborales de estos (horarios, estrés, salario) influyen directamente en la vida familiar (microsistema). Otros ejemplos son los servicios comunitarios o las entidades del barrio.'
        },
        {
            question: 'En la clasificación de Altas Capacidades, ¿cómo se define el "Talento Simple"?',
            answers: [
                { text: 'Percentil superior a 80 en al menos tres capacidades.', correct: false },
                { text: 'Percentil superior a 75 en todas las capacidades y alta creatividad.', correct: false },
                { text: 'Elevada aptitud o competencia en un ámbito específico (por encima del percentil 95).', correct: true },
                { text: 'Alto rendimiento escolar y motivación, pero sin destacar en creatividad.', correct: false }
            ],
            explanation: 'La categoría de Altas Capacidades se divide en tres grupos. El "Talento Simple" se define por una competencia excepcional en un área muy concreta. El criterio para identificarlo es presentar una elevada aptitud o competencia en un ámbito específico, situándose por encima del percentil 95 en las pruebas que miden esa capacidad.'
        },
        {
            question: '¿En qué categoría se incluye al alumnado que se incorpora tardíamente al sistema educativo o que tiene una escolarización irregular por hospitalización?',
            answers: [
                { text: 'Necesidades Educativas Especiales (NEE).', correct: false },
                { text: 'Dificultades de Aprendizaje.', correct: false },
                { text: 'Acciones de carácter compensatorio.', correct: true },
                { text: 'Altas Capacidades Intelectuales.', correct: false }
            ],
            explanation: 'Este alumnado se incluye en la categoría "4. Alumnado que precisa de acciones de carácter compensatorio". Esta categoría está pensada para estudiantes que, sin tener una discapacidad o dificultad específica de aprendizaje, requieren una atención diferente para compensar desigualdades. Las causas incluyen una historia personal o social compleja, escolarización irregular por hospitalización, pertenencia a familias itinerantes o la incorporación tardía al sistema educativo.'
        },
        {
            question: 'El "Modelo Interactivo" de discapacidad (diapositivas 28-29) se caracteriza por:',
            answers: [
                { text: 'Considerar la discapacidad como orgánica e inmutable (Modelo de Déficit).', correct: false },
                { text: 'Clasificar los apoyos en intermitente, limitado, extenso y generalizado.', correct: true },
                { text: 'Centrarse únicamente en el CI del individuo.', correct: false },
                { text: 'Eliminar la importancia de los apoyos.', correct: false }
            ],
            explanation: 'El "Modelo Interactivo" supera al Modelo de Déficit al entender que la discapacidad tiene un carácter interactivo. En lugar de centrarse solo en el CI, este modelo pone el foco en "mejorar la adaptación del individuo al contexto". Para ello, introduce la idea de "NECESIDADES DE APOYO" y las clasifica según su intensidad: Intermitente (puntual), Limitado (por un tiempo), Extenso (en algún entorno, no limitado) y Generalizado (en varios entornos, no limitado).'
        },
        {
            question: 'El "Modelo de Participación" (diapositivas 29-30) enfatiza:',
            answers: [
                { text: 'La conducta depende del balance entre competencias y demandas, y la importancia de los apoyos.', correct: true },
                { text: 'El criterio de diagnóstico basado únicamente en el CI.', correct: false },
                { text: 'La intervención médica y asistencial en centros especiales.', correct: false },
                { text: 'La naturaleza episódica del apoyo.', correct: false }
            ],
            explanation: 'El "Modelo de Participación" es una evolución del interactivo y se basa en un enfoque ecológico. Sostiene que la conducta de una persona depende del equilibrio (balance) entre sus competencias (capacidades) y las demandas del entorno (hogar, escuela). Por tanto, enfatiza la importancia de la participación de la persona en sus contextos reales y subraya que la clave de la intervención está en proveer los "Apoyos" necesarios para mejorar el funcionamiento.'
        },
        {
            question: '¿Para qué alumnado se destina la Modalidad de escolarización "A" (Grupo ordinario a tiempo completo)?',
            answers: [
                { text: 'Alumnado con NEE que necesita ACS en todas las áreas.', correct: false },
                { text: 'Alumnado con NEE que precisa AAC (recursos materiales o personal no docente) o ACS solo en áreas no instrumentales.', correct: true },
                { text: 'Alumnado que requiere una ACI y atención permanente.', correct: false },
                { text: 'Alumnado con discapacidad intelectual grave.', correct: false }
            ],
            explanation: 'La Modalidad "A" (Grupo ordinario a tiempo completo) es la más inclusiva. Se destina a alumnado con NEE que puede participar en el grupo ordinario con ayudas específicas. Esto incluye a quien precisa Adaptaciones de Acceso (AAC), ya sea por necesitar recursos materiales (ej. mobiliario) o personal no docente (ej. PTIS). También se incluye alumnado con discapacidad física o sensorial que puede requerir una Adaptación Curricular Significativa (ACS) solo en áreas no instrumentales, sin necesitar intervención directa del PT o AL.'
        },
        {
            question: '¿Cuándo se propone la Modalidad "B" (Grupo ordinario con apoyos variables)?',
            answers: [
                { text: 'Cuando el alumno solo necesita adaptaciones de acceso (AAC).', correct: false },
                { text: 'Cuando el alumno con NEE precisa ACS (con intervención del PT) y/o Programas Específicos.', correct: true },
                { text: 'Cuando las medidas de la modalidad C no han sido suficientes.', correct: false },
                { text: 'Cuando el alumno necesita atención en un Centro Específico.', correct: false }
            ],
            explanation: 'La Modalidad "B" (Grupo ordinario con apoyos en periodos variables) se aplica cuando la Modalidad A no es suficiente. Está destinada al alumnado con NEE que requiere una Adaptación Curricular Significativa (ACS) que debe ser desarrollada con la "intervención directa y continuada del profesorado especializado" (el PT). También se aplica si el alumno requiere Programas Específicos (PE), impartidos por PT o AL, que pueden desarrollarse dentro o fuera del aula ordinaria.'
        },
        {
            question: '¿Qué implica la Modalidad "C" (Aula de Educación Especial en Centro Ordinario)?',
            answers: [
                { text: 'Que el alumno está todo el tiempo en el aula ordinaria.', correct: false },
                { text: 'Que el alumno necesita una atención específica personalizada que no es posible en el aula ordinaria, pero se garantiza la mayor integración posible.', correct: true },
                { text: 'Que el alumno solo necesita adaptaciones de acceso (AAC).', correct: false },
                { text: 'Que el alumno es enviado a un centro que no es ordinario.', correct: false }
            ],
            explanation: 'La Modalidad "C" se ubica en un centro ordinario, pero el alumno tiene como referencia un "Aula de Educación Especial". Se aplica cuando la Modalidad B no da respuesta. Su finalidad es dar una atención "específica personalizada que no es posible en el aula ordinaria" (requiere una ACI o adaptación en grado extremo). Sin embargo, es crucial que se garantice "la mayor integración en actividades comunes y curriculares con el resto del alumnado del centro".'
        },
        {
            question: '¿Cuándo se propone la Modalidad "D" (Centro Específico de Educación Especial)?',
            answers: [
                { text: 'Cuando el alumno solo tiene un desfase de un curso.', correct: false },
                { text: 'Cuando, debido al escaso desarrollo de las habilidades adaptativas, no es posible su adaptación e integración social en un centro escolar ordinario.', correct: true },
                { text: 'Para cualquier alumno con TDAH.', correct: false },
                { text: 'Para alumnado que solo precisa AAC.', correct: false }
            ],
            explanation: 'La Modalidad "D" es la más restrictiva e implica la escolarización en un "Centro Específico de Educación Especial". Se propone cuando el desarrollo de las habilidades adaptativas (autonomía, habilidades sociales) del alumno es tan escaso que "no es posible su adaptación e integración social en un centro escolar ordinario". Requiere medidas educativas y asistenciales extraordinarias que no están disponibles en los centros ordinarios.'
        },
        {
            question: 'Según el Anexo VII, el Profesional Técnico en Integración Social (PTIS) interviene cuando el alumnado requiere:',
            answers: [
                { text: 'Adaptaciones Curriculares Significativas (ACS).', correct: false },
                { text: 'Ayudas o asistencias en desplazamiento, aseo, alimentación, control de esfínteres o supervisión especializada.', correct: true },
                { text: 'Un intérprete de Lengua de Signos Española.', correct: false },
                { text: 'Un programa específico de Audición y Lenguaje.', correct: false }
            ],
            explanation: 'El PTIS es un recurso de personal no docente. Su función es asistencial, no pedagógica. Se propone cuando el alumnado con NEE requiere ayudas concretas para garantizar su acceso y participación. Estas ayudas incluyen asistencia en el desplazamiento, en el aseo personal, en la alimentación, en el control de esfínteres o uso del WC, o cuando se necesita una supervisión especializada y directa.'
        },
        {
            question: 'El Profesional Técnico en Interpretación de Lengua de Signos (ILSE) se propone (solo en educación secundaria) cuando:',
            answers: [
                { text: 'El alumno tiene discapacidad motórica.', correct: false },
                { text: 'El alumno con discapacidad auditiva y su familia han elegido la Lengua de Signos Española como opción comunicativa principal.', correct: true },
                { text: 'El alumno tiene Disfemia (tartamudez) grave.', correct: false },
                { text: 'El alumno tiene Autismo y necesita un sistema de comunicación alternativo.', correct: false }
            ],
            explanation: 'El ILSE (Intérprete de Lengua de Signos Española) es un recurso de personal no docente específico para la Educación Secundaria. Se propone para alumnado con discapacidad auditiva. Un requisito clave es que la familia (o el alumno si es mayor de edad) haya elegido explícitamente la Lengua de Signos Española (LSE) como su opción comunicativa principal. Además, el alumno debe tener un dominio previo suficiente de la LSE para poder seguir la interpretación.'
        },
        {
            question: '¿En qué tipo de centros pueden intervenir los Fisioterapeutas, según el Anexo VI?',
            answers: [
                { text: 'Solo en centros específicos de educación especial.', correct: true },
                { text: 'En cualquier centro ordinario con Modalidad B.', correct: false },
                { text: 'Solo en Educación Infantil.', correct: false },
                { text: 'En todos los centros de Educación Secundaria.', correct: false }
            ],
            explanation: 'El recurso de Fisioterapeuta está muy restringido en el sistema educativo ordinario. Los Anexos VI y VII indican claramente que este recurso de personal no docente se proporciona "solo en centros específicos de educación especial". Se destina a alumnado con discapacidad de tipo motórico que tenga una prescripción médica de rehabilitación para este tipo de intervenciones.'
        },
        {
            question: 'En la clasificación de NEE, los "Retrasos evolutivos graves o profundos" se incluyen dentro de:',
            answers: [
                { text: 'Discapacidad intelectual', correct: false },
                { text: 'Trastornos graves del desarrollo', correct: true },
                { text: 'Trastornos del Espectro Autista', correct: false },
                { text: 'Discapacidad física', correct: false }
            ],
            explanation: 'Los "Trastornos graves del desarrollo" son una categoría de NEE que sirve como un diagnóstico inicial o provisional. Esta categoría se aplica únicamente en la Etapa de Educación Infantil. Incluye tres subgrupos: "Retrasos evolutivos graves o profundos" (afectación en dos o más áreas del desarrollo), "Trastornos graves del desarrollo del lenguaje" (retraso grave solo en lenguaje) y "Trastornos graves del desarrollo psicomotor" (retraso grave solo en esta área).'
        },
        {
            question: 'El "Trastorno negativista desafiante" es una subcategoría de:',
            answers: [
                { text: 'Trastornos del Espectro Autista', correct: false },
                { text: 'Trastornos graves de conducta', correct: true },
                { text: 'Otros trastornos mentales', correct: false },
                { text: 'Discapacidad intelectual', correct: false }
            ],
            explanation: 'La categoría "Trastornos graves de conducta" (TGC) se aplica a patrones de comportamiento inadaptados y persistentes que deterioran el funcionamiento diario. Esta categoría se divide en tres grupos: el "Trastorno disocial" (agresión, violación de normas), el "Trastorno negativista desafiante" (patrón hostil y desafiante, especialmente con la autoridad) y el "Trastorno de comportamiento perturbador no especificado".'
        },
        {
            question: '¿Cómo se define la "Afasia" en la clasificación?',
            answers: [
                { text: 'Un trastorno de la fluidez del habla (disfemia).', correct: false },
                { text: 'Una alteración en la articulación por malformación (disglosia).', correct: false },
                { text: 'Un trastorno del lenguaje (expresión y comprensión) que aparece *después* de que el lenguaje ha sido adquirido, debido a lesiones.', correct: true },
                { text: 'Un déficit en el desarrollo del lenguaje expresivo y/o receptivo (TEL).', correct: false }
            ],
            explanation: 'La Afasia es un tipo de "Trastorno de la comunicación". Su característica principal es que es un trastorno *adquirido*, no evolutivo. Ocurre *después* de que la persona ya había adquirido el lenguaje, y se debe a lesiones en áreas específicas del sistema nervioso central. Afecta tanto a la expresión como a la comprensión del lenguaje. Se diferencia así del Trastorno Específico del Lenguaje (TEL), que es un déficit en el desarrollo.'
        },
        {
            question: 'Una alteración en la articulación producida por anomalías anatómicas o malformaciones en los órganos fonoarticulatorios se denomina:',
            answers: [
                { text: 'Disartria', correct: false },
                { text: 'Disfemia', correct: false },
                { text: 'Afasia', correct: false },
                { text: 'Disglosia', correct: true }
            ],
            explanation: 'Este trastorno del habla se denomina Disglosia. Se incluye en el grupo de "Trastornos del habla", que son alteraciones graves en la articulación o fluidez. La causa de la Disglosia es física y periférica: se debe a anomalías anatómicas o malformaciones en los órganos que usamos para hablar (labios, lengua, paladar, etc.). Se diferencia de la Disartria, cuya causa es neurológica (una lesión cerebral).'
        },
        {
            question: 'Según las diapositivas de actualidad (2024), en las Aulas Específicas de ESO, ¿cuál es la necesidad más frecuente?',
            answers: [
                { text: 'Autismo', correct: false },
                { text: 'Discapacidad Intelectual', correct: true },
                { text: 'Trastornos de conducta', correct: false },
                { text: 'Discapacidad física', correct: false }
            ],
            explanation: 'Los datos de 2024 muestran diferencias en la prevalencia del alumnado en Aulas Específicas (Modalidad C) según la etapa. Mientras que en las Aulas Específicas de Educación Primaria la necesidad más frecuente es el Autismo (42,6%), en las Aulas Específicas de ESO este perfil cambia. En Secundaria, la necesidad más frecuente en esta modalidad es la Discapacidad Intelectual, que alcanza el 63,2%.'
        }
    ]
};

// --- PREGUNTAS DIFÍCILES ---
var questions_hard = {
    'tema1': [ 
        {
            question: 'Según el organigrama del Anexo IX, para que una respuesta educativa sea considerada "Atención Específica", ¿qué se requiere obligatoriamente?',
            answers: [
                { text: 'La presencia de Medidas Específicas y Recursos Específicos (ambos).', correct: true },
                { text: 'Solo Medidas Específicas (sin recursos específicos).', correct: false },
                { text: 'Solo Recursos Específicos (sin medidas específicas).', correct: false },
                { text: 'Medidas Generales y Recursos Generales.', correct: false }
            ],
            explanation: 'El organigrama del Anexo IX define la jerarquía de la respuesta educativa. El alumnado con NEE requiere una "Atención Específica". El gráfico muestra que esta Atención Específica se compone obligatoriamente de la suma de "Medida/s Específica/s" (ej. ACS) más "Recurso/s Específico/s" (ej. PT). El texto lo confirma: "Será obligatoria la necesidad de ambos aspectos para la consideración de atención específica". Si solo hay Medidas Específicas pero sin Recursos Específicos, se considera "Atención Educativa Diferente a la Ordinaria" pero no "Específica".'
        },
        {
            question: '¿Cuál es la diferencia principal entre una Adaptación Curricular Significativa (ACS) y una Adaptación Curricular Individualizada (ACI) según el Anexo VII?',
            answers: [
                { text: 'La ACS es para Primaria y la ACI para Secundaria.', correct: false },
                { text: 'La ACS implica un desfase de 1 curso y la ACI de 2 cursos.', correct: false },
                { text: 'La ACS se aplica en centros ordinarios (Ed. Básica) y la ACI se aplica en modalidad de aula específica o centro específico.', correct: true },
                { text: 'La ACS modifica objetivos y la ACI solo adapta el acceso.', correct: false }
            ],
            explanation: 'Ambas son adaptaciones profundas del currículo, pero se aplican en modalidades de escolarización distintas. La Adaptación Curricular Significativa (ACS) es la medida que se aplica al alumnado con NEE en la Educación Básica (Primaria y ESO) escolarizado en un grupo ordinario (Modalidad B). La Adaptación Curricular Individualizada (ACI), en cambio, es la medida específica para el alumnado escolarizado en Modalidad C (Aula Específica) o Modalidad D (Centro Específico).'
        },
        {
            question: 'El TDAH (Trastorno por déficit de atención con o sin hiperactividad) se clasifica en dos categorías diferentes. ¿Cuál es el criterio para que se considere NEE (apartado 1.9) en lugar de Dificultad de Aprendizaje (apartado 2.4)?',
            answers: [
                { text: 'Si el TDAH es de tipo combinado.', correct: false },
                { text: 'Si el TDAH es de predominio del déficit de atención.', correct: false },
                { text: 'Si precisa "atención específica" (medidas que impliquen recursos específicos, como una ACS).', correct: true },
                { text: 'Si precisa "atención educativa diferente" (medidas específicas que no impliquen recursos específicos, como una ACNS).', correct: false }
            ],
            explanation: 'El TDAH presenta una clasificación dual dependiendo del tipo de apoyo que el alumno requiera. Se considera una Dificultad de Aprendizaje (DEA) (apartado 2.4) si el alumno necesita una "atención educativa diferente", es decir, medidas específicas que *no* implican recursos específicos (como una Adaptación Curricular No Significativa - ACNS). Sin embargo, se clasifica como Necesidad Educativa Especial (NEE) (apartado 1.9) si el alumno requiere "atención específica", lo que implica medidas que *sí* conllevan recursos específicos (como una Adaptación Curricular Significativa - ACS o programas específicos).'
        },
        {
            question: 'Según los criterios de la clasificación, ¿cuándo se considera que un alumno tiene "Baja Visión"?',
            answers: [
                { text: 'Cuando tiene ausencia total de visión.', correct: false },
                { text: 'Cuando la agudeza visual es igual o inferior a 0\'3 (con la mejor corrección) y/o el campo visual es menor o igual a 10 grados.', correct: true },
                { text: 'Cuando la pérdida auditiva es superior a 70 dB.', correct: false },
                { text: 'Cuando el CI es inferior a 70.', correct: false }
            ],
            explanation: 'La categoría de Discapacidad Visual se aplica cuando existen implicaciones importantes en el aprendizaje escolar. El criterio general exige que, con la mejor corrección óptica, la visión en ambos ojos cumpla al menos una de estas dos condiciones: una agudeza visual igual o inferior a 0,3; o un campo visual menor o igual a 10 grados. Si se cumple esto, se clasifica como "Ceguera" (ausencia total de visión) o "Baja visión" (el resto de los casos que cumplen el criterio).'
        },
        {
            question: '¿Qué CI (Cociente Intelectual) presenta el alumnado con "Dificultades de aprendizaje por capacidad intelectual límite"?',
            answers: [
                { text: 'Un CI inferior a 70.', correct: false },
                { text: 'Un CI entre 70 y 80.', correct: true },
                { text: 'Un CI entre 50-55 y 70.', correct: false },
                { text: 'Un CI superior a 95.', correct: false }
            ],
            explanation: 'Esta categoría (2.3) se sitúa justo entre la Discapacidad Intelectual Leve y la media de la población. Se aplica a alumnado que presenta un Cociente Intelectual (CI) en el rango de 70 a 80. Estos alumnos suelen manifestar lentitud en el aprendizaje y bajos rendimientos académicos, pero *no* se consideran alumnado con Discapacidad Intelectual (cuyo CI debe ser de 70 o inferior).'
        },
        {
            question: 'En la Discapacidad Auditiva, ¿qué rango de pérdida de audición define la "Hipoacusia"?',
            answers: [
                { text: 'Pérdida de audición entre 20 y 70 dB.', correct: true },
                { text: 'Pérdida de audición superior a 70 dB.', correct: false },
                { text: 'Pérdida de audición inferior a 20 dB.', correct: false },
                { text: 'Pérdida de audición solo en un oído.', correct: false }
            ],
            explanation: 'La Discapacidad Auditiva (categoría 1.4 de NEE) se define como una pérdida auditiva que implica un déficit importante en la comunicación. Para su clasificación, se divide en dos grupos basados en la intensidad de la pérdida. La "Hipoacusia" corresponde a una pérdida de audición que se sitúa entre los 20 y los 70 decibelios (dB). La "Sordera", en cambio, se define como una pérdida más severa, siendo esta superior a 70 dB.'
        },
        {
            question: 'Para diagnosticar "Dificultades específicas en el aprendizaje de la lectura o dislexia", se requiere un retraso lector de al menos dos desviaciones típicas o un percentil:',
            answers: [
                { text: '50 o menor.', correct: false },
                { text: '75 o menor.', correct: false },
                { text: '25 o menor.', correct: true },
                { text: '95 o menor.', correct: false }
            ],
            explanation: 'Para identificar una Dificultad Específica en la Lectura (Dislexia), la normativa establece un criterio psicométrico claro. El alumno debe mostrar dificultades significativas en la decodificación fonológica o el reconocimiento de palabras. Esta dificultad debe traducirse en un retraso lector de, al menos, dos desviaciones típicas por debajo de la media esperada, o bien, obtener un percentil 25 o inferior en pruebas estandarizadas de lectura.'
        },
        {
            question: 'Un alumno de primaria con NEE necesita una Adaptación Curricular Significativa (ACS) y la intervención directa y continuada del profesorado de PT, preferentemente dentro del grupo de clase. ¿Qué modalidad de escolarización se debería proponer?',
            answers: [
                { text: 'Modalidad A', correct: false },
                { text: 'Modalidad B', correct: true },
                { text: 'Modalidad C', correct: false },
                { text: 'Modalidad D', correct: false }
            ],
            explanation: 'La Modalidad "B" (Grupo ordinario con apoyos variables) es la indicada en este caso. El criterio clave para esta modalidad es la necesidad de una Adaptación Curricular Significativa (ACS) que requiera la "intervención directa y continuada del profesorado especializado" (PT). Esta modalidad permite que el currículo sea adaptado significativamente y que el alumno reciba los apoyos del PT, idealmente dentro del aula ordinaria.'
        },
        {
            question: 'Un alumno de primaria con NEE presenta una afectación tan grave que exige una ACI (Adaptación Curricular Individualizada) y la intervención permanente de recursos especializados en un entorno muy estructurado, pero se busca que comparta espacios y tiempos (ej. recreos) con el resto del alumnado del centro. ¿Qué modalidad es la adecuada?',
            answers: [
                { text: 'Modalidad A', correct: false },
                { text: 'Modalidad B', correct: false },
                { text: 'Modalidad C', correct: true },
                { text: 'Modalidad D', correct: false }
            ],
            explanation: 'Esta descripción corresponde a la Modalidad "C": Aula de Educación Especial en Centro Ordinario. Se aplica cuando el alumno tiene una afectación grave que exige una "adaptación del curriculo en grado extremo (ACI)" y recursos permanentes. La diferencia clave con la Modalidad D es que, al estar en un centro ordinario, se deben garantizar "espacios y tiempos compartidos con el alumnado del centro que favorezcan su integración" (ej. recreos, actividades comunes).'
        },
        {
            question: 'Un alumno con NEE derivadas de discapacidad física solo necesita adaptaciones de acceso (AAC), como mobiliario adaptado y la intervención de un PTIS para el desplazamiento. Puede seguir el currículo (con una ACNS leve) en su aula ordinaria. ¿Qué modalidad le corresponde?',
            answers: [
                { text: 'Modalidad A', correct: true },
                { text: 'Modalidad B', correct: false },
                { text: 'Modalidad C', correct: false },
                { text: 'Modalidad D', correct: false }
            ],
            explanation: 'La Modalidad "A" (Grupo ordinario a tiempo completo) es la adecuada. Los criterios especifican que esta modalidad es para alumnado con NEE que precisa "adaptaciones de acceso (AAC), ya sea por las necesidades de intervención de un profesional no docente (como el PTIS) y/o por precisar recursos materiales específicos (como el mobiliario)". Esta modalidad no requiere la intervención directa y continuada del PT para una ACS, por lo que es la idónea para este caso.'
        },
        {
            question: 'El "Modelo teórico de discapacidad intelectual" de Luckasson y cols. (2002) (Anexo: ModeloFuncionamiento) se considera interaccionista porque el funcionamiento individual depende de la interacción de 5 dimensiones con un elemento mediador clave. ¿Cuál es ese elemento?',
            answers: [
                { text: 'La Conducta Adaptativa', correct: false },
                { text: 'El Contexto', correct: false },
                { text: 'Los Apoyos', correct: true },
                { text: 'Las Capacidades Intelectuales', correct: false }
            ],
            explanation: 'Este modelo (adoptado por la AAMR) entiende la discapacidad como el resultado de la interacción entre la persona y el entorno. El diagrama del modelo muestra cómo las cinco dimensiones (Capacidades intelectuales, Conducta adaptativa, Participación, Salud y Contexto) influyen en el "Funcionamiento Individual". Sin embargo, el elemento que media y modifica esta interacción, mejorando el funcionamiento, son los "Apoyos".'
        },
        {
            question: 'La definición de Retraso Mental de la AAMR (2002) lo caracteriza como limitaciones significativas en el funcionamiento intelectual y en:',
            answers: [
                { text: 'La conducta adaptativa (habilidades conceptuales, sociales y prácticas).', correct: true },
                { text: 'El desarrollo físico y motor.', correct: false },
                { text: 'La salud mental exclusivamente.', correct: false },
                { text: 'El macrosistema y el exosistema.', correct: false }
            ],
            explanation: 'La definición de la AAMR (Asociación Americana sobre Retraso Mental) de 2002, que es la base del modelo actual, es clara. La discapacidad intelectual (término que sustituye a retraso mental) se caracteriza por limitaciones significativas en dos áreas: 1. El funcionamiento intelectual y 2. La conducta adaptativa. Esta conducta adaptativa incluye las habilidades conceptuales, sociales y prácticas que se usan en la vida diaria.'
        },
        {
            question: 'En el modelo de la CIF (Clasificación Internacional del Funcionamiento), ¿cuál es la diferencia entre "Capacidad" y "Desempeño/Realización" (Performance)?',
            answers: [
                { text: '"Capacidad" es la influencia externa (facilitador/barrera) y "Desempeño" es la influencia interna.', correct: false },
                { text: '"Capacidad" es la realización de tareas en un entorno uniforme (sin barreras) y "Desempeño" es la realización de tareas en el entorno real (con barreras o facilitadores).', correct: true },
                { text: '"Capacidad" se refiere al cuerpo (funciones/estructuras) y "Desempeño" a los factores contextuales.', correct: false },
                { text: '"Capacidad" es el aspecto negativo (deficiencia) y "Desempeño" es el aspecto positivo (funcionamiento).', correct: false }
            ],
            explanation: 'La CIF introduce dos calificadores para el componente "Actividades y Participación". "Capacidad" describe lo que una persona puede hacer en un entorno ideal o uniforme, es decir, su habilidad intrínseca sin barreras. "Desempeño/Realización" (Performance) describe lo que esa persona hace realmente en su "entorno real". La diferencia (gap) entre Capacidad y Desempeño muestra el impacto (negativo o positivo) de los factores ambientales (barreras o facilitadores).'
        },
        {
            question: 'El modelo PPCT (Proceso-Persona-Contexto-Tiempo) de Bronfenbrenner (Diapositiva 12) añade una dimensión al modelo ecológico original. ¿Qué enfatiza el componente "Proceso"?',
            answers: [
                { text: 'Las características individuales de la persona.', correct: false },
                { text: 'El paso del tiempo (cronosistema).', correct: false },
                { text: 'Las interacciones continuas, fuertes y significativas que potencian el desarrollo.', correct: true },
                { text: 'Los sistemas ecológicos (micro, meso, etc.).', correct: false }
            ],
            explanation: 'El modelo PPCT es una evolución del modelo ecológico. El componente "Proceso" se refiere a los motores del desarrollo. No son solo las interacciones, sino las interacciones "proximales": aquellas que son continuas, fuertes y significativas (como la relación padre-hijo o profesor-alumno). El modelo sostiene que el desarrollo se potencia cuando una persona (P) se involucra en estas interacciones (Proceso) de forma regular en su contexto (C) a lo largo del tiempo (T).'
        },
        {
            question: 'Según la clasificación de la Junta de Andalucía (Anexo II), ¿qué Trastorno del Espectro Autista se describe como un trastorno (descrito hasta ahora solo en niñas) que aparece entre los 7 meses y 2 años, caracterizado por la pérdida de capacidades manuales adquiridas y desaceleración del perímetro craneal?',
            answers: [
                { text: 'Autismo', correct: false },
                { text: 'Síndrome de Asperger', correct: false },
                { text: 'Trastorno desintegrativo infantil', correct: false },
                { text: 'Síndrome de Rett', correct: true }
            ],
            explanation: 'Esta descripción detalla el "Síndrome de Rett". Es un Trastorno del Espectro Autista (TEA) muy específico. Sus características distintivas son su aparición (generalmente entre los 7 meses y 2 años), su prevalencia (descrito casi exclusivamente en niñas), la pérdida de capacidades manuales que ya se habían adquirido y una notable desaceleración en el crecimiento del perímetro craneal.'
        }
    ]
};


//--- TEMA 4 ---
/**
 * BANCO DE PREGUNTAS - TEMA 4: NEAE (DÉFICITS PSÍQUICOS - TEA)
 * Basado en los documentos:
 * - Presentación TEMA4_TEA.pdf
 * - T3 TEA cap15 Marchesi et al.pdf
 */

// --- PREGUNTAS FÁCILES ---
questions_easy['tema4'] = [
    {
        question: 'Según el DSM-5, ¿cuáles son los dos dominios principales de alteración en el Trastorno del Espectro Autista (TEA)?',
        answers: [
            { text: 'Comunicación social e Intereses restringidos y repetitivos.', correct: true },
            { text: 'Teoría de la Mente y Función Ejecutiva.', correct: false },
            { text: 'Discapacidad Intelectual y Alteraciones sensoriales.', correct: false },
            { text: 'Inflexibilidad mental y Coherencia Central débil.', correct: false }
        ],
        explanation: 'El DSM-5 (F84.0) revolucionó el diagnóstico al agrupar los síntomas del TEA en dos grandes dominios o áreas. El Criterio A se refiere a las "Deficiencias persistentes en la comunicación social y en la interacción social". El Criterio B corresponde a los "Patrones restrictivos y repetitivos de comportamiento, intereses o actividades". Ambos dominios deben estar presentes para el diagnóstico.'
    },
    {
        question: '¿Qué autor describió en 1943 un "síndrome de alteraciones autísticas" y es considerado uno de los pioneros en el estudio del autismo?',
        answers: [
            { text: 'Hans Asperger', correct: false },
            { text: 'Leo Kanner', correct: true },
            { text: 'Lorna Wing', correct: false },
            { text: 'Ángel Rivière', correct: false }
        ],
        explanation: 'Leo Kanner fue un psiquiatra austriaco-estadounidense que en 1943 describió por primera vez 11 casos de niños con lo que él denominó "autismo infantil temprano" o "síndrome de alteraciones autísticas". Sus observaciones sobre la soledad autista y el deseo de invarianza sentaron las bases del estudio del trastorno. Prácticamente al mismo tiempo, Hans Asperger describía casos similares en Europa, aunque su trabajo no fue tan conocido hasta más tarde.'
    },
    {
        question: '¿A qué se refiere la "Teoría de la Mente" (ToM) en el contexto del autismo?',
        answers: [
            { text: 'A la capacidad de organizar la información en sistemas y reglas.', correct: false },
            { text: 'A la dificultad para integrar la información globalmente, centrándose en detalles.', correct: false },
            { text: 'A la capacidad de atribuir estados mentales (pensamientos, deseos, creencias) a otras personas y a uno mismo.', correct: true },
            { text: 'Al déficit primario para establecer vínculos emocionales empáticos.', correct: false }
        ],
        explanation: 'La Teoría de la Mente (ToM) es una teoría explicativa clásica del autismo. Se define como la habilidad cognitiva para percibir y comprender que las otras personas poseen estados internos (creencias, deseos, intenciones) que son diferentes a los propios. En el TEA, se postula que esta capacidad (también llamada "mentalización") está alterada, lo que explica muchas de las dificultades sociales y de comunicación.'
    },
    {
        question: 'En la prueba de "Sally y Anne", ¿dónde buscará Sally la pelota si ha desarrollado la Teoría de la Mente?',
        answers: [
            { text: 'En la caja, porque sabe que Anne la cambió de sitio.', correct: false },
            { text: 'Debajo de la mesa, porque está enfadada.', correct: false },
            { text: 'Le preguntará a Anne dónde está la pelota.', correct: false },
            { text: 'En la cesta, porque es donde ella la dejó y no sabe que Anne la cambió.', correct: true }
        ],
        explanation: 'La prueba de Sally y Anne es un test clásico de "falsa creencia" para evaluar la Teoría de la Mente (Nivel I). Un niño que ha desarrollado la ToM entiende que Sally tiene una *creencia falsa*: ella *cree* que la pelota sigue en la cesta, porque no vio a Anne moverla. Por lo tanto, el niño predecirá correctamente que Sally buscará la pelota en la cesta, que es donde su mente (erróneamente) le dice que está.'
    },
    {
        question: '¿Qué es el ABLLS-R?',
        answers: [
            { text: 'Un modelo de intervención temprana basado en el juego y la emoción (Modelo Denver).', correct: false },
            { text: 'Una herramienta para la evaluación curricular y el seguimiento de habilidades básicas de lenguaje y aprendizaje.', correct: true },
            { text: 'Un cuestionario para que los padres evalúen el procesamiento sensorial de sus hijos.', correct: false },
            { text: 'Una prueba de observación estandarizada para el diagnóstico formal de TEA (ADOS-2).', correct: false }
        ],
        explanation: 'El ABLLS-R (The Assessment of Basic Language and Learning Skills - Revised) es una herramienta de evaluación comportamental y funcional. No es una prueba diagnóstica, sino una herramienta para la evaluación curricular que ayuda a identificar las habilidades que un niño ya posee y las que necesita aprender. Sirve como guía para confeccionar un plan de trabajo y hacer un seguimiento del progreso del niño, especialmente en áreas de lenguaje y aprendizaje.'
    },
    {
        question: '¿Qué es el Modelo Denver (ESDM)?',
        answers: [
            { text: 'Un sistema de comunicación basado en el intercambio de pictogramas (PECS).', correct: false },
            { text: 'Un modelo de intervención temprana (12-48 meses) que incluye áreas como la comunicación, imitación y juego.', correct: true },
            { text: 'Una prueba de cribado para detectar riesgo de TEA en bebés (M-CHAT).', correct: false },
            { text: 'Un programa para estructurar el aula usando agendas visuales (TEACCH).', correct: false }
        ],
        explanation: 'El ESDM (Early Start Denver Model) o Modelo Denver es un modelo de intervención temprana diseñado específicamente para la primera infancia, cubriendo desde los 12 hasta los 48 meses de edad. Su currículo se estructura en 4 niveles de edad y abarca un amplio rango de áreas del desarrollo, como la comunicación (receptiva y expresiva), las habilidades sociales, la imitación, el juego y la autonomía.'
    },
    {
        question: 'Según la teoría de la "Coherencia Central Débil", las personas con TEA tienden a procesar la información de manera:',
        answers: [
            { text: 'Global y contextual, captando el sentido general.', correct: false },
            { text: 'Emocional e intersubjetiva.', correct: false },
            { text: 'Centrada en los detalles y lo local, con dificultad para integrar la información.', correct: true },
            { text: 'Sistemática, buscando reglas y patrones por encima de la empatía.', correct: false }
        ],
        explanation: 'La teoría de la Coherencia Central Débil, propuesta por Uta Frith y Francesca Happé, sugiere un estilo cognitivo particular en el TEA.. Mientras la mayoría de las personas tienden a procesar la información de forma global para extraer un significado (coherencia fuerte), las personas con TEA tendrían una "coherencia central débil". Esto significa que su sistema cognitivo se orienta menos a la coherencia y más al procesamiento de los detalles locales, teniendo dificultades para integrar las partes en un todo.'
    },
    {
        question: '¿Qué teoría explicativa postula que las personas con TEA tienen dificultades en la planificación, inhibición de impulsos y flexibilidad mental, similar a un daño en los lóbulos frontales?',
        answers: [
            { text: 'Teoría de la Mente', correct: false },
            { text: 'Teoría de la Coherencia Central', correct: false },
            { text: 'Teoría de la Intersubjetividad', correct: false },
            { text: 'Teoría de la Disfunción Ejecutiva', correct: true }
        ],
        explanation: 'Esta es la Teoría de la Disfunción Ejecutiva (DE). La función ejecutiva se refiere a un conjunto de habilidades cognitivas de alto nivel (planificación, inhibición, flexibilidad, memoria de trabajo) ligadas a los lóbulos frontales del cerebro. Esta teoría postula que las personas con TEA presentan dificultades equivalentes a un daño en esta área, lo que explicaría su inflexibilidad cognitiva y comportamental, la dificultad en el control de impulsos y las pobres estrategias para resolver problemas.'
    },
    {
        question: 'La intervención basada en el modelo TEACCH se centra principalmente en:',
        answers: [
            { text: 'La estructuración del entorno y el uso de apoyos visuales para hacerlo predecible.', correct: true },
            { text: 'El uso de reforzadores y la enseñanza de conductas mediante ensayos (ABA).', correct: false },
            { text: 'El desarrollo de la conexión emocional a través del juego (DIR/Floortime).', correct: false },
            { text: 'La enseñanza de habilidades sociales en grupo mediante mediadores.', correct: false }
        ],
        explanation: 'El programa TEACCH (Treatment and Education of Autistic related Communication Handicapped) es un pilar en la intervención educativa. Reconociendo las dificultades de anticipación, organización y comprensión del TEA, su estrategia principal es la "enseñanza estructurada". Esto se logra adaptando el entorno para hacerlo comprensible y predecible, principalmente mediante la estructuración física del espacio y el uso intensivo de apoyos visuales (como agendas, pictogramas y secuencias de tareas).'
    },
    {
        question: '¿Qué es el "Análisis Conductual Aplicado" (ABA)?',
        answers: [
            { text: 'Un sistema de comunicación que usa pictogramas para hacer peticiones.', correct: false },
            { text: 'Una metodología de intervención basada en la evidencia que usa la observación y la contingencia de tres términos (A-B-C).', correct: true },
            { text: 'Una teoría que explica el autismo por la falta de conexión emocional.', correct: false },
            { text: 'Una prueba diagnóstica que observa la interacción social del niño.', correct: false }
        ],
        explanation: 'El Análisis Conductual Aplicado (ABA) es una metodología de intervención basada en la evidencia científica. Su enfoque principal es la observación directa y la toma de datos. Se basa en dividir el aprendizaje en "unidades de aprendizaje" pequeñas y utiliza la "contingencia de tres términos": Antecedente (la instrucción o estímulo), Conducta (la respuesta del niño) y Consecuencia (el reforzador o corrección).'
    },
    {
        question: 'En el modelo ABA, ¿qué es el "moldeamiento"?',
        answers: [
            { text: 'Dividir una tarea compleja en pequeños pasos (ej. lavarse las manos).', correct: false },
            { text: 'Retirar las ayudas (físicas o verbales) de forma progresiva.', correct: false },
            { text: 'Reforzar sistemáticamente las pequeñas aproximaciones sucesivas a una conducta objetivo.', correct: true },
            { text: 'Usar un estímulo (ej. una foto) para enseñar una respuesta.', correct: false }
        ],
        explanation: 'El moldeamiento (o "shaping") es una técnica fundamental del ABA. Se utiliza cuando la conducta objetivo (ej. hablar, escribir) aún no existe en el repertorio del niño. La técnica consiste en reforzar sistemáticamente las "aproximaciones sucesivas" a esa conducta. Por ejemplo, se refuerza primero cualquier sonido, luego un balbuceo similar a la palabra, y así sucesivamente, "moldeando" la conducta hasta alcanzar el objetivo final.'
    },
    {
        question: '¿Y qué es el "encadenamiento" en ABA?',
        answers: [
            { text: 'Reforzar solo la conducta objetivo e ignorar las demás.', correct: false },
            { text: 'Usar una agenda visual para mostrar la secuencia del día.', correct: false },
            { text: 'Establecer una secuencia de conductas simples para formar una habilidad compleja (ej. lavarse las manos).', correct: true },
            { text: 'La capacidad de hacer dos tareas a la vez, como escuchar y escribir.', correct: false }
        ],
        explanation: 'El encadenamiento es otra técnica clave del ABA. Se usa para enseñar habilidades complejas que se componen de varios pasos, como lavarse las manos, vestirse o hacer un puzle. Primero, la habilidad se divide en sus componentes más pequeños (análisis de tareas). Luego, se enseña al niño a realizar esos pasos en el orden correcto, "encadenando" una conducta simple con la siguiente, hasta completar la secuencia total.'
    },
    {
        question: '¿Qué es un SAAC?',
        answers: [
            { text: 'Un Sistema Aumentativo y Alternativo de Comunicación.', correct: true },
            { text: 'Una prueba de evaluación de la conducta adaptativa.', correct: false },
            { text: 'Un tipo de apoyo visual para organizar el tiempo (ej. un reloj).', correct: false },
            { text: 'Una teoría cognitiva sobre la inflexibilidad mental.', correct: false }
        ],
        explanation: 'Las siglas SAAC se refieren a los Sistemas Aumentativos y Alternativos de Comunicación. Estos sistemas se utilizan cuando el lenguaje oral no es funcional o está ausente. "Aumentativo" significa que complementa al lenguaje oral existente, y "Alternativo" significa que lo sustituye. Ejemplos de SAAC son el sistema PECS (basado en imágenes) o el Programa de Comunicación Total (que usa signos).'
    },
    {
        question: '¿En qué consiste el sistema de comunicación PECS?',
        answers: [
            { text: 'En enseñar al niño a usar lengua de signos junto con el habla.', correct: false },
            { text: 'En enseñar al niño a intercambiar imágenes (pictogramas) para comunicarse (ej. pedir algo).', correct: true },
            { text: 'En usar un dispositivo electrónico con voz sintetizada.', correct: false },
            { text: 'En escribir historias sociales para explicar cómo actuar.', correct: false }
        ],
        explanation: 'PECS son las siglas de "Picture Exchange Communication System" (Sistema de Comunicación por Intercambio de Imágenes). Es un SAAC muy utilizado en TEA. A diferencia de otros sistemas donde el niño solo señala, el PECS enseña activamente al niño a iniciar la comunicación. El niño aprende a coger un pictograma (una imagen) del objeto que desea y a entregárselo a otra persona para hacer una petición.'
    },
    {
        question: 'Las "Historias Sociales", desarrolladas por Carol Gray, se utilizan para:',
        answers: [
            { text: 'Evaluar el nivel de lectura y escritura del alumno.', correct: false },
            { text: 'Enseñar a dividir una tarea compleja en pasos más pequeños.', correct: false },
            { text: 'Facilitar la comprensión de una situación social concreta o enseñar cómo comportarse en ella.', correct: true },
            { text: 'Hacer un cribado de posibles síntomas de TEA.', correct: false }
        ],
        explanation: 'Las Historias Sociales son una estrategia de intervención social muy conocida. Son narraciones cortas y personalizadas, creadas por Carol Gray, que describen una situación social, habilidad o concepto. Su objetivo es facilitar la comprensión de situaciones sociales (que suelen ser confusas para las personas con TEA) y enseñar de forma explícita las claves sociales y las conductas esperadas en ese contexto.'
    },
    {
        question: '¿Cuál de estas estrategias se utiliza para ayudar a un alumno con TEA a manejar la inflexibilidad cognitiva y la dificultad para anticipar?',
        answers: [
            { text: 'El moldeamiento de conductas.', correct: false },
            { text: 'La prueba de falsas creencias de Sally y Anne.', correct: false },
            { text: 'El Modelo Denver (ESDM).', correct: false },
            { text: 'El uso de horarios visuales y agendas con pictogramas.', correct: true }
        ],
        explanation: 'Una de las características centrales del TEA es la inflexibilidad cognitiva y la dificultad con los cambios o transiciones. Para prevenir la ansiedad que esto genera, la estrategia más eficaz es la estructuración del entorno. El uso de horarios visuales, agendas con pictogramas o relojes visuales permite al alumno "ver" lo que va a pasar y en qué orden. Esto hace que el mundo sea más predecible y reduce su necesidad de rigidez.'
    },
    {
        question: '¿Qué es el M-CHAT?',
        answers: [
            { text: 'Una herramienta de cribado para detectar riesgo de TEA entre los 18 y 30 meses.', correct: true },
            { text: 'La prueba diagnóstica de observación que se usa en los hospitales (ADOS).', correct: false },
            { text: 'Un programa de intervención basado en el análisis de conducta (ABA).', correct: false },
            { text: 'Un cuestionario para medir la inteligencia no verbal.', correct: false }
        ],
        explanation: 'El M-CHAT (Modified Checklist for Autism in Toddlers) es la herramienta de detección o cribado de TEA más recomendada a nivel internacional. No es una prueba diagnóstica, sino un cuestionario breve que rellenan los padres. Su objetivo es identificar señales de riesgo de TEA en niños pequeños, específicamente en la franja de edad de 18 a 30 meses, para poder derivar a una evaluación diagnóstica más completa si es necesario.'
    },
    {
        question: '¿Qué es el ADOS-2?',
        answers: [
            { text: 'Una entrevista que se hace a los padres sobre el desarrollo del niño.', correct: false },
            { text: 'Una prueba estandarizada de observación para evaluar los síntomas de TEA.', correct: true },
            { text: 'Un cuestionario de cribado que se pasa en la consulta del pediatra.', correct: false },
            { text: 'Un programa para enseñar habilidades sociales a través del juego.', correct: false }
        ],
        explanation: 'El ADOS-2 (Autism Diagnostic Observation Schedule) es considerada una de las pruebas "gold standard" para el diagnóstico de TEA. A diferencia del M-CHAT (cribado) o el ADI-R (entrevista a padres), el ADOS-2 es una evaluación basada en la observación directa y estandarizada. El evaluador propone una serie de juegos y actividades diseñadas para provocar la aparición de conductas sociales y comunicativas, que luego se codifican para valorar la presencia de síntomas de autismo.'
    },
    {
        question: '¿Qué es el ADI-R?',
        answers: [
            { text: 'Una prueba de observación directa del niño mediante juegos.', correct: false },
            { text: 'Un cuestionario breve para detectar el riesgo de TEA en la escuela.', correct: false },
            { text: 'Una entrevista semiestructurada que se realiza a los padres o cuidadores.', correct: true },
            { text: 'Un modelo de intervención para estructurar el entorno (TEACCH).', correct: false }
        ],
        explanation: 'El ADI-R (Autism Diagnostic Interview-Revised) es la otra prueba "gold standard" para el diagnóstico de TEA, y se suele usar junto al ADOS-2. No es una prueba que se le pasa al niño, sino una larga entrevista semiestructurada que se realiza a los padres o cuidadores principales. Su objetivo es recoger información detallada sobre la historia del desarrollo del niño y la presencia de síntomas de autismo a lo largo de su vida.'
    },
    {
        question: '¿Qué es la "ecolalia"?',
        answers: [
            { text: 'La dificultad para comprender las emociones de los demás.', correct: false },
            { text: 'Un movimiento motor repetitivo, como el aleteo de manos.', correct: false },
            { text: 'Un interés muy intenso y absorbente por un tema específico.', correct: false },
            { text: 'La repetición (inmediata o retardada) de palabras o frases escuchadas.', correct: true }
        ],
        explanation: 'La ecolalia es una característica del habla frecuente en el TEA. Consiste en la repetición de palabras o frases que el niño ha escuchado. Puede ser "ecolalia inmediata" (repetir lo que se acaba de oír) o "ecolalia retardada" (repetir frases oídas tiempo atrás, como anuncios o diálogos de películas, a menudo fuera de contexto). Es un ejemplo del criterio B1 (habla estereotipada o repetitiva).'
    },
    {
        question: 'Un niño con TEA que insiste en tomar siempre el mismo camino al colegio y se angustia mucho si hay un pequeño cambio en su rutina, ¿qué criterio del DSM-5 manifiesta?',
        answers: [
            { text: 'B1: Movimientos estereotipados.', correct: false },
            { text: 'A1: Deficiencias en la reciprocidad socioemocional.', correct: false },
            { text: 'B4: Hiper- o hiporreactividad sensorial.', correct: false },
            { text: 'B2: Insistencia en la monotonía o inflexibilidad de rutinas.', correct: true }
        ],
        explanation: 'Este es un ejemplo clásico del criterio B2 del DSM-5. Este criterio describe la "insistencia en la monotonía, excesiva inflexibilidad de rutinas o patrones ritualizados". La "gran angustia frente a cambios pequeños", las "dificultades con las transiciones" o la "necesidad de tomar el mismo camino... cada día" son manifestaciones típicas de esta rigidez mental y comportamental.'
    },
    {
        question: 'Según el DSM-5, ¿las alteraciones del TEA deben estar presentes en las primeras fases del desarrollo?',
        answers: [
            { text: 'No, pueden aparecer en cualquier momento de la vida, incluso en la adultez.', correct: false },
            { text: 'Sí, deben estar presentes en las primeras fases del desarrollo.', correct: true },
            { text: 'Solo si el autismo está asociado a Discapacidad Intelectual.', correct: false },
            { text: 'No, solo se diagnostica si los síntomas aparecen después de los 5 años.', correct: false }
        ],
        explanation: 'Este es el Criterio C del DSM-5. El TEA es un trastorno del neurodesarrollo, lo que significa que sus bases están presentes desde el inicio de la vida. El criterio C especifica que "Los síntomas deben de estar presentes en las primeras fases del período de desarrollo". Sin embargo, aclara que pueden no ser evidentes hasta que la demanda social (ej. en el colegio) supera las capacidades del niño, o pueden estar enmascarados por estrategias aprendidas.'
    },
    {
        question: 'Un niño con TEA que no inicia interacciones sociales y no comparte sus intereses o emociones con los demás, ¿qué criterio del DSM-5 manifiesta?',
        answers: [
            { text: 'A2: Deficiencias en las conductas comunicativas no verbales.', correct: false },
            { text: 'A1: Deficiencias en la reciprocidad socioemocional.', correct: true },
            { text: 'A3: Deficiencias en el desarrollo de las relaciones.', correct: false },
            { text: 'B4: Hiper- o hiporreactividad sensorial.', correct: false }
        ],
        explanation: 'Esta es la definición del criterio A1 del DSM-5. Este criterio se refiere a las "deficiencias en la reciprocidad socioemocional". Se manifiesta como un fracaso en la conversación normal de ida y vuelta, una "disposición reducida por compartir intereses, emociones y afecto", o directamente un "fallo para iniciar la interacción social o responder a ella".'
    },
    {
        question: '¿Qué autor propuso 12 dimensiones del desarrollo alteradas en el autismo, agrupadas en Social, Comunicación, Anticipación y Simbolización?',
        answers: [
            { text: 'Leo Kanner', correct: false },
            { text: 'Lorna Wing', correct: false },
            { text: 'Ángel Rivière', correct: true },
            { text: 'Peter Hobson', correct: false }
        ],
        explanation: 'Fue el psicólogo español Ángel Rivière quien propuso un modelo descriptivo del autismo basado en 12 dimensiones del desarrollo. Estas dimensiones se agrupan en cuatro áreas principales: 1. Trastornos de la Relación Social (Social), 2. Trastornos de la Comunicación y el Lenguaje, 3. Trastornos de la Anticipación y la Flexibilidad, y 4. Trastornos de la Simbolización.'
    },
    {
        question: '¿Qué es el "Apoyo Conductual Positivo" (ACP)?',
        answers: [
            { text: 'Un sistema que utiliza castigos para eliminar conductas no deseadas.', correct: false },
            { text: 'Una técnica de moldeamiento para enseñar el habla.', correct: false },
            { text: 'Un programa de mediación entre iguales para fomentar la amistad.', correct: false },
            { text: 'Un enfoque que busca comprender la función de las conductas problemáticas y prevenirlas, enseñando habilidades alternativas.', correct: true }
        ],
        explanation: 'El Apoyo Conductual Positivo (ACP) es el enfoque recomendado para manejar dificultades de comportamiento. A diferencia de los enfoques punitivos, el ACP es proactivo. Se centra en entender *por qué* ocurre una conducta (cuál es su "función") para así poder prevenirla. Esto se logra modificando el entorno y, fundamentalmente, enseñando a la persona habilidades de autorregulación y formas de comunicación más apropiadas para expresar sus necesidades.'
    },
    {
        question: '¿El DSM-5 mantiene el "Síndrome de Asperger" como un diagnóstico separado?',
        answers: [
            { text: 'No, lo ha eliminado como categoría diagnóstica y lo ha integrado dentro del "Trastorno del Espectro Autista".', correct: true },
            { text: 'Sí, lo mantiene como un diagnóstico separado del autismo.', correct: false },
            { text: 'Sí, pero ahora se llama "Trastorno de la Comunicación Social".', correct: false },
            { text: 'No, lo ha eliminado y lo ha sustituido por el "Síndrome de Rett".', correct: false }
        ],
        explanation: 'Este fue uno de los cambios más significativos del DSM-5. La investigación no pudo demostrar diferencias cualitativas claras entre el Trastorno Autista, el Síndrome de Asperger y el TGD-No Especificado. Se concluyó que eran, en esencia, el mismo trastorno con diferentes grados de severidad. Por lo tanto, el DSM-5 eliminó estas etiquetas y las unificó bajo un único diagnóstico: "Trastorno del Espectro del Autismo".'
    },
    {
        question: '¿Cuál de las siguientes es una técnica ABA para enseñar habilidades de discriminación visual?',
        answers: [
            { text: 'Historias sociales', correct: false },
            { text: 'Emparejar objetos o imágenes (igualar a la muestra).', correct: true },
            { text: 'Prueba de Sally y Anne', correct: false },
            { text: 'Moldeamiento de sonidos vocales.', correct: false }
        ],
        explanation: 'El entrenamiento en discriminación es una técnica central de ABA. En el ámbito visual, esto a menudo implica tareas de "igualar a la muestra". Al niño se le presenta un estímulo (la muestra, ej. un pictograma de uvas) y debe seleccionar el estímulo idéntico de entre un grupo de opciones. Esto enseña al niño a discriminar visualmente, una habilidad fundamental para el aprendizaje posterior, como la lectura o las matemáticas.'
    },
    {
        question: 'La "Teoría de la Intersubjetividad" de Peter Hobson sugiere que el déficit primario en el autismo es:',
        answers: [
            { text: 'Una alteración en los lóbulos frontales (Disfunción Ejecutiva).', correct: false },
            { text: 'Un estilo cognitivo centrado en los detalles (Coherencia Central Débil).', correct: false },
            { text: 'Una dificultad innata para establecer vínculos emocionales empáticos y compartir experiencias.', correct: true },
            { text: 'Un fallo en el módulo cerebral de la Teoría de la Mente.', correct: false }
        ],
        explanation: 'La Teoría de la Intersubjetividad de Hobson se opone a las teorías puramente cognitivas (como la ToM). Hobson plantea que el déficit central del autismo es de naturaleza afectiva y está presente desde el nacimiento. Es una dificultad innata para "compartir intersubjetivamente experiencias" y conectar con las emociones y actitudes corporales de los demás. Según esta teoría, la comprensión de los estados mentales (ToM) falla *porque* esta conexión emocional primaria está alterada.'
    },
    {
        question: '¿Qué es el "Perfil Sensorial-2"?',
        answers: [
            { text: 'Una lista de intereses restringidos del alumno.', correct: false },
            { text: 'Un currículo de intervención para niños de 12 a 48 meses.', correct: false },
            { text: 'Una herramienta estandarizada que evalúa los patrones de procesamiento sensorial del niño en la vida cotidiana.', correct: false },
            { text: 'Una herramienta estandarizada que evalúa los patrones de procesamiento sensorial del niño en la vida cotidiana.', correct: true }
        ],
        explanation: 'El Perfil Sensorial-2 es un instrumento de evaluación estandarizado, generalmente completado por padres o profesores (mediante cuestionarios). Su objetivo es evaluar cómo el niño procesa los estímulos sensoriales (auditivos, visuales, táctiles, etc.) en su vida diaria. Ayuda a determinar si el procesamiento sensorial del niño favorece o dificulta su participación en las actividades, identificando patrones como la búsqueda sensorial, la evitación o la sensibilidad.'
    },
    {
        question: '¿Qué es el CAST?',
        answers: [
            { text: 'Un programa de estructuración del aula (TEACCH).', correct: false },
            { text: 'Un modelo de intervención temprana (Modelo Denver).', correct: false },
            { text: 'Una entrevista diagnóstica para padres (ADI-R).', correct: false },
            { text: 'Una escala de cribado de TEA para niños en edad escolar (4-11 años).', correct: true }
        ],
        explanation: 'El CAST (Test de Espectro Autista en la Infancia) es una herramienta de detección o cribado de TEA. A diferencia del M-CHAT, que es para niños de 18-30 meses, el CAST se utiliza para la detección en niños más mayores, en edad escolar. La franja de edad recomendada para su uso es entre los 4 y los 11 años, cuando se sospecha que un niño puede tener TEA pero no ha sido detectado previamente.'
    },
    {
        question: 'Un niño con TEA que alinea coches de juguete en lugar de usarlos para jugar simbólicamente, ¿qué criterio del DSM-5 manifiesta?',
        answers: [
            { text: 'A3: Deficiencias en el desarrollo de las relaciones.', correct: false },
            { text: 'B4: Hiper- o hiporreactividad sensorial.', correct: false },
            { text: 'B1: Movimientos, utilización de objetos o habla estereotipados o repetitivos.', correct: true },
            { text: 'A1: Deficiencias en la reciprocidad socioemocional.', correct: false }
        ],
        explanation: 'Este es un ejemplo del criterio B1 del DSM-5. Este criterio incluye no solo movimientos motores (aleteo), sino también la "utilización de objetos... estereotipada o repetitiva". La "alineación de los juguetes" es uno de los ejemplos ilustrativos que ofrece el propio manual. En lugar de usar el objeto para su función simbólica (jugar a carreras), el niño se centra en una propiedad perceptiva (la línea) de forma repetitiva.'
    },
    {
        question: '¿Qué teoría explicativa postula que los bebés con TEA no ven reforzadas sus interacciones sociales, lo que altera el desarrollo del "cerebro social"?',
        answers: [
            { text: 'Teoría de la Coherencia Central.', correct: false },
            { text: 'Teoría de la Disfunción Ejecutiva.', correct: false },
            { text: 'Teoría de la Intersubjetividad.', correct: false },
            { text: 'Teoría de la Motivación Social.', correct: true }
        ],
        explanation: 'Esta es la Teoría de la Motivación Social, asociada a autores como Dawson, Mundy y Klin. Postula que el origen del TEA puede ser una alteración en el sistema de recompensa cerebral. Esta disfunción provoca que los estímulos sociales (caras, voces) no sean intrínsecamente reforzantes para el bebé. Al no ser motivantes, el bebé les presta menos atención, interactúa menos y, como consecuencia, las áreas cerebrales que deberían especializarse en el procesamiento social (el "cerebro social") no se desarrollan de forma típica.'
    },
    {
        question: 'Un niño con TEA que utiliza la mano de un adulto como si fuera una herramienta (ej. llevando la mano del adulto al bote que no puede abrir) está mostrando un déficit en:',
        answers: [
            { text: 'Coherencia Central.', correct: false },
            { text: 'Insistencia en la monotonía (Criterio B2).', correct: false },
            { text: 'Conductas comunicativas no verbales (Criterio A2).', correct: true },
            { text: 'Hiperreactividad sensorial (Criterio B4).', correct: false }
        ],
        explanation: 'El uso de conductas comunicativas no verbales en la interacción social (Criterio A2) está alterado en el TEA. Esto incluye el uso de gestos para regular la interacción. Mientras un niño con desarrollo típico señalaría el bote (un gesto declarativo o imperativo), el uso de la mano del adulto como una "herramienta" (llevarla pasivamente al objeto) es una forma atípica de comunicación instrumental y refleja una deficiencia en la comprensión y el uso de gestos sociales integrados.'
    },
    {
        question: '¿Cuál de estos niveles de severidad del DSM-5 describe a una persona que "inicia muy pocas interacciones y responde mínimamente", requiriendo un "apoyo muy sustancial"?',
        answers: [
            { text: 'Nivel 1 (Requiere apoyo)', correct: false },
            { text: 'Nivel 2 (Requiere apoyo sustancial)', correct: false },
            { text: 'Nivel 4 (Dependencia total)', correct: false },
            { text: 'Nivel 3 (Requiere un apoyo muy sustancial)', correct: true }
        ],
        explanation: 'El DSM-5 introduce tres niveles de severidad para especificar la intensidad de los apoyos necesarios. El Nivel 3 es el más alto y se define como "Requiere un apoyo muy sustancial". En el área de comunicación social, describe a personas con "déficits severos" que "inicia[n] muy pocas interacciones y responde[n] mínimamente a los intentos de relación de otros", causando alteraciones severas en el funcionamiento.'
    },
    {
        question: '¿Qué es el "Fenotipo Autista Ampliado" (FAP)?',
        answers: [
            { text: 'Un tipo de autismo severo (Nivel 3) con Discapacidad Intelectual.', correct: false },
            { text: 'El conjunto de síntomas que se miden con la prueba ADOS-2.', correct: false },
            { text: 'La presencia de síntomas subClínicos de TEA (ej. rigidez, dificultades sociales leves) en familiares de personas con autismo.', correct: true },
            { text: 'El aumento del volumen cerebral que se detecta en los primeros años de vida.', correct: false }
        ],
        explanation: 'El Fenotipo Autista Ampliado (FAP), o "Broad Autism Phenotype" (BAP) en inglés, es un concepto clave en la investigación genética del TEA. Se refiere a la observación de que los familiares de primer grado (padres, hermanos) de una persona con TEA, aunque no cumplan los criterios para el trastorno, a menudo presentan rasgos o síntomas "subclínicos" del autismo. Estos rasgos pueden incluir una ligera rigidez de pensamiento, ciertas dificultades en la pragmática del lenguaje o menor sociabilidad.'
    }
];

// --- PREGUNTAS MEDIAS ---
questions_medium['tema4'] = [
    {
        question: '¿Cuál es la principal diferencia entre la Teoría de la Mente (ToM) y la Teoría de la Intersubjetividad de Hobson?',
        answers: [
            { text: 'La ToM postula un déficit cognitivo (metarrepresentación) y la Intersubjetividad un déficit afectivo-emocional primario.', correct: true },
            { text: 'La ToM se centra en la inflexibilidad y la Intersubjetividad en los rituales.', correct: false },
            { text: 'La ToM se aplica solo a adultos y la Intersubjetividad solo a bebés.', correct: false },
            { text: 'La ToM explica el procesamiento de detalles (Coherencia Central) y la Intersubjetividad explica la Función Ejecutiva.', correct: false }
        ],
        explanation: 'Ambas teorías intentan explicar el núcleo del autismo, pero desde ángulos opuestos. La Teoría de la Mente (Baron-Cohen, Leslie) es una teoría "cognitiva"; postula que el problema central es un fallo en un mecanismo para *comprender* los estados mentales (un déficit en metarrepresentación). En cambio, la Teoría Intersubjetiva (Hobson) es "afectiva"; postula que el déficit es *previo* a lo cognitivo. Es una incapacidad innata para *sentir* y *conectar* emocionalmente con otros, y de este fallo afectivo primario derivarían después las dificultades cognitivas.'
    },
    {
        question: 'En el DSM-5, para recibir un diagnóstico de TEA, ¿es necesario que el Criterio E (no se explica mejor por DI) se cumpla siempre?',
        answers: [
            { text: 'Sí, si un niño tiene Discapacidad Intelectual (DI) no puede tener TEA.', correct: false },
            { text: 'No, el DSM-5 establece que la DI y el TEA con frecuencia coinciden y se pueden diagnosticar ambos.', correct: true },
            { text: 'Sí, el DSM-5 prohíbe el diagnóstico comórbido de TEA y DI.', correct: false },
            { text: 'No, el TEA solo se puede diagnosticar si la DI es de grado leve.', correct: false }
        ],
        explanation: 'El Criterio E del DSM-5 es clave y a menudo se malinterpreta. No excluye la Discapacidad Intelectual (DI), sino que aclara que el TEA y la DI "con frecuencia coinciden" (comorbilidad). Lo que el criterio exige es que, para hacer este diagnóstico doble, las "deficiencias en la comunicación social han de estar por debajo de lo previsto para el nivel general de desarrollo" del niño. Es decir, el niño es menos social de lo que se esperaría incluso para su nivel de DI.'
    },
    {
        question: '¿Qué teoría explicativa daría una mejor respuesta a por qué un niño con TEA es capaz de memorizar listas de paradas de metro (interés restringido) pero es incapaz de planificar los pasos para hacer la cama?',
        answers: [
            { text: 'Teoría de la Mente.', correct: false },
            { text: 'Intersubjetividad Primaria.', correct: false },
            { text: 'Hiperreactividad sensorial.', correct: false },
            { text: 'Disfunción Ejecutiva.', correct: true }
        ],
        explanation: 'Esta discrepancia entre una habilidad de memoria (sistematización) y una de organización de la conducta se explica bien por la Disfunción Ejecutiva. La Función Ejecutiva (FE) incluye habilidades como la "planificación". Hacer la cama requiere planificar una meta, organizar una secuencia de acciones y monitorizarla. La memorización de listas, aunque impresionante, no requiere esta planificación flexible. Por tanto, el niño muestra un déficit en FE (planificación) a pesar de tener buena memoria.'
    },
    {
        question: 'Según los textos, ¿qué alteración neurobiológica se considera el "hallazgo más claro y consistente" en la estructura cerebral de personas con TEA?',
        answers: [
            { text: 'Una reducción del volumen cerebral, especialmente en la amígdala.', correct: false },
            { text: 'La ausencia total del cuerpo calloso.', correct: false },
            { text: 'Una lesión específica en el lóbulo temporal.', correct: false },
            { text: 'Un incremento en el volumen cerebral total (sustancia gris y blanca) en los primeros años de vida.', correct: true }
        ],
        explanation: 'A nivel estructural, el hallazgo más repetido es un "incremento en el volumen cerebral". Este aumento es más notable en los primeros años de vida y luego tiende a reducirse con la edad. Involucra tanto a la sustancia gris como a la blanca, aunque la contribución de la sustancia blanca (las conexiones) parece ser mayor. Esto se relaciona con teorías de una conectividad atípica (más conexiones locales, menos a larga distancia).'
    },
    {
        question: 'La "Prueba de los Smarties" (o Lacasitos) donde se muestra un tubo que contiene lápices en lugar de golosinas, está diseñada para evaluar:',
        answers: [
            { text: 'La Teoría de la Mente (comprensión de falsas creencias).', correct: true },
            { text: 'La coherencia central (ver el tubo o los lápices).', correct: false },
            { text: 'La flexibilidad cognitiva (aceptar el cambio).', correct: false },
            { text: 'La hiperreactividad sensorial (interés por el objeto).', correct: false }
        ],
        explanation: 'La tarea de los Smarties, diseñada por Perner, es otra prueba clásica de falsa creencia (Nivel I), similar a la de Sally y Anne. Evalúa si el niño puede diferenciar su propio conocimiento (sabe que hay lápices) del conocimiento de otra persona que no ha visto el interior. Un niño sin ToM dirá que el nuevo niño pensará que hay "lápices" (porque él lo sabe), mientras que un niño con ToM entenderá la falsa creencia del otro y dirá "Smarties".'
    },
    {
        question: '¿Qué es la "mediación entre iguales" o "Círculo de Amigos"?',
        answers: [
            { text: 'Un grupo de terapia solo para adultos con TEA.', correct: false },
            { text: 'Un programa donde compañeros sin discapacidad reciben formación para interactuar y apoyar a sus compañeros con TEA.', correct: true },
            { text: 'Una técnica de ABA para enseñar a pedir ayuda.', correct: false },
            { text: 'Un tipo de agenda visual para organizar el recreo.', correct: false }
        ],
        explanation: 'La mediación entre iguales, como el "Círculo de Amigos", es una estrategia de intervención social muy valorada. Consiste en formar y entrenar a compañeros de clase sin discapacidad. Estos compañeros "mediadores" aprenden a interactuar activamente con sus compañeros con TEA, especialmente en entornos menos estructurados como el patio, ayudándoles a participar en juegos e interacciones sociales. Esta técnica ha demostrado ser muy beneficiosa para mejorar la red social del alumno con TEA.'
    },
    {
        question: 'En la evaluación del autismo, ¿cuál es el objetivo de los 4 bloques (Historia Clínica, Datos Biomédicos, Áreas de Competencias, Perfil de Capacidad)?',
        answers: [
            { text: 'Determinar únicamente el CI del alumno.', correct: false },
            { text: 'Decidir el tipo de medicación que necesita.', correct: false },
            { text: 'Obtener una visión integral del alumno, combinando su historial, estado físico, habilidades y funcionamiento.', correct: true },
            { text: 'Cumplimentar el cuestionario M-CHAT.', correct: false }
        ],
        explanation: 'La evaluación del desarrollo en autismo es un proceso complejo que va más allá de una sola prueba. El modelo de 4 bloques busca una visión integral. La "Historia Clínica" recoge los antecedentes y el motivo de consulta. Los "Datos Biomédicos" analizan el estado físico y pruebas médicas. "Áreas o Competencias" mide habilidades específicas (comunicación, inteligencia). Y el "Perfil de Capacidad" describe el funcionamiento en áreas como lenguaje, cognición y desarrollo socioemocional.'
    },
    {
        question: '¿Cuál es la principal diferencia entre el Programa de Comunicación Total (Schaeffer) y el PECS?',
        answers: [
            { text: 'PECS es para niños y Comunicación Total para adultos.', correct: false },
            { text: 'PECS es una teoría (ToM) y Comunicación Total es una intervención (ABA).', correct: false },
            { text: 'PECS es para la comunicación receptiva y Comunicación Total para la expresiva.', correct: false },
            { text: 'PECS se basa en el intercambio de imágenes y Comunicación Total en enseñar signos junto a la voz.', correct: true }
        ],
        explanation: 'Ambos son Sistemas Aumentativos/Alternativos de Comunicación (SAAC) que parten de los intereses del niño y buscan la comunicación funcional. La diferencia radica en la modalidad: el PECS (Picture Exchange Communication System) enseña al niño a comunicarse entregando pictogramas o imágenes. En cambio, el Programa de Comunicación Total (desarrollado por Schaeffer) se centra en enseñar el uso de signos (lenguaje de signos) de forma simultánea a las vocalizaciones o el habla.'
    },
    {
        question: '¿Por qué la investigación actual se centra en estudiar a los hermanos de niños con TEA?',
        answers: [
            { text: 'Porque tienen un riesgo genético mucho más alto (cerca del 19%) de desarrollar también el trastorno.', correct: true },
            { text: 'Porque el TEA es causado por el entorno familiar y la crianza.', correct: false },
            { text: 'Porque se ha demostrado que el 100% de los hermanos también tendrán TEA.', correct: false },
            { text: 'Porque es más fácil acceder a ellos para realizar pruebas médicas.', correct: false }
        ],
        explanation: 'La investigación sobre el origen del autismo se centra en los "bebés-hermanos" (baby-sibs) debido a la fuerte carga genética del trastorno. Mientras que en la población general la prevalencia es baja (cerca del 1%), los hermanos de un niño con TEA tienen una probabilidad mucho mayor de tenerlo también, estimada en un 18.7%. Estudiarlos desde el nacimiento permite observar los primeros signos del desarrollo atípico, incluso antes de que el diagnóstico sea claro.'
    },
    {
        question: '¿Qué es un "aula estable" o "aula preferente" para alumnos con TEA?',
        answers: [
            { text: 'Un centro de educación especial al que solo asisten alumnos con TEA.', correct: false },
            { text: 'Una modalidad de escolarización en un centro ordinario, donde el alumno tiene un aula de referencia especializada pero participa en actividades con el resto.', correct: true },
            { text: 'Una sala de relajación sensorial para momentos de crisis.', correct: false },
            { text: 'Un programa de intervención en el domicilio del alumno.', correct: false }
        ],
        explanation: 'Esta modalidad de escolarización (equivalente a la Modalidad C en Andalucía) es una opción para la inclusión de alumnos con TEA en centros ordinarios. El alumno está matriculado en el centro ordinario, pero su grupo de referencia es un aula pequeña y especializada (el "aula estable" o "preferente"). Desde esta aula, el alumno recibe los apoyos intensivos que necesita (ACI, PT/AL), pero se fomenta su participación en el resto de actividades del centro (recreos, asignaturas no troncales, etc.) con su grupo de edad.'
    },
    {
        question: '¿Qué relación hay entre el TEA y la Discapacidad Intelectual (DI), según los estudios epidemiológicos?',
        answers: [
            { text: 'Todas las personas con TEA tienen Discapacidad Intelectual.', correct: false },
            { text: 'La DI y el TEA son mutuamente excluyentes; no pueden ocurrir juntos.', correct: false },
            { text: 'La DI es la principal alteración comórbida (asociada) al TEA, afectando a un alto porcentaje de personas.', correct: true },
            { text: 'Menos del 5% de las personas con TEA tienen Discapacidad Intelectual.', correct: false }
        ],
        explanation: 'La Discapacidad Intelectual (DI) no es parte del TEA, pero es la alteración psicológica que más frecuentemente se presenta asociada a él (comorbilidad). Los estudios epidemiológicos muestran cifras altas de comorbilidad. Por ejemplo, se estima que, de media, el 70% de las personas diagnosticadas con el "trastorno autista" clásico (más severo) y alrededor del 44% de las personas con un TGD (más amplio) también tienen Discapacidad Intelectual.'
    },
    {
        question: '¿Qué relación hay entre el TEA y la epilepsia?',
        answers: [
            { text: 'La epilepsia es la causa principal del TEA.', correct: false },
            { text: 'La epilepsia solo aparece en personas con Síndrome de Asperger.', correct: false },
            { text: 'No hay ninguna relación conocida entre ambas.', correct: false },
            { text: 'La prevalencia de epilepsia en personas con TEA es mucho más alta (10-20%) que en la población general (0.5%).', correct: true }
        ],
        explanation: 'Además de la DI, otra alteración médica asociada (comórbida) frecuente en el TEA es la epilepsia. Mientras que en la población general la prevalencia de la epilepsia es muy baja (cerca del 0.5%), en las personas con TEA esta cifra es significativamente más alta. Se estima que la prevalencia de epilepsia en la población con TEA se sitúa en torno al 10-20%.'
    },
    {
        question: '¿Qué indica la investigación sobre la ratio de género (hombres/mujeres) en el TEA?',
        answers: [
            { text: 'Es más frecuente en hombres que en mujeres (ratio aprox. 4:1).', correct: true },
            { text: 'Es más frecuente en mujeres que en hombres (ratio 1:4).', correct: false },
            { text: 'Es igual de frecuente en hombres que en mujeres (ratio 1:1).', correct: false },
            { text: 'Solo afecta a los hombres.', correct: false }
        ],
        explanation: 'El TEA es considerablemente más frecuente en hombres que en mujeres. La ratio media hombre/mujer para el conjunto de los TGD (Trastornos Generalizados del Desarrollo) se sitúa en 4.9 hombres por cada mujer (cercano a 4:1). Esta proporción varía según el CI; a medida que el CI disminuye (mayor discapacidad intelectual), la proporción de mujeres aumenta. Esto sugiere que las mujeres con TEA suelen tener, en términos generales, una mayor alteración funcional que los hombres.'
    },
    {
        question: 'Según los textos, ¿el origen del TEA está relacionado con el entorno familiar o la crianza?',
        answers: [
            { text: 'Sí, las teorías antiguas de las "madres nevera" han sido confirmadas.', correct: false },
            { text: 'No, no cabe duda de que el origen es biológico y el entorno familiar no tiene ningún papel causal.', correct: true },
            { text: 'Sí, es una combinación de factores genéticos y un estilo de crianza distante.', correct: false },
            { text: 'No, la única causa demostrada es la exposición a vacunas.', correct: false }
        ],
        explanation: 'Durante un tiempo existieron teorías psicógenas (como la de las "madres nevera") que culpaban a la crianza. Hoy, la evidencia científica ha refutado completamente esas ideas. Los estudios neurobiológicos, y especialmente los genéticos (como los de gemelos), demuestran de forma indudable que el origen del TEA es biológico. El entorno familiar no tiene "ningún papel causal en su origen". (Además, la investigación muestra con "total claridad" que las vacunas NO causan TEA).'
    },
    {
        question: '¿Qué es el "Programa de Comunicación Total" de Schaeffer?',
        answers: [
            { text: 'Un sistema que enseña a los niños a intercambiar pictogramas (PECS).', correct: false },
            { text: 'Un programa de intervención temprana (Modelo Denver).', correct: false },
            { text: 'Un programa que enseña a usar lengua de signos junto con vocalizaciones para fomentar el habla.', correct: true },
            { text: 'Un programa de estructuración del entorno (TEACCH).', correct: false }
        ],
        explanation: 'El Programa de Comunicación Total (desarrollado por Schaeffer y sus colaboradores) es un SAAC (Sistema Aumentativo/Alternativo de Comunicación). A diferencia del PECS, que usa imágenes, este programa se basa en el uso de signos (lenguaje de signos). La estrategia central es enseñar los signos simultáneamente a las vocalizaciones (habla), con el objetivo final de promover el desarrollo del lenguaje oral y la comunicación funcional.'
    },
    {
        question: 'En la evaluación del desarrollo, ¿cuál es la diferencia entre una "escala formal" y una "escala comportamental (funcional)"?',
        answers: [
            { text: 'Las formales miden el CI y las funcionales miden la Teoría de la Mente.', correct: false },
            { text: 'Las formales las aplica un médico y las funcionales un profesor.', correct: false },
            { text: 'Las formales son para adultos y las funcionales para niños.', correct: false },
            { text: 'Las formales comparan al niño con lo "normal" para su edad y las funcionales listan conductas observables y sus condiciones.', correct: true }
        ],
        explanation: 'La evaluación del desarrollo puede usar dos tipos de escalas. Las "escalas de desarrollo formal" (ej. escalas de CI) comparan al niño con la norma; recogen conductas "normales" para una edad, pero no informan sobre las condiciones en que se dan. Las "escalas comportamentales (funcionales)" (ej. ABLLS-R) no buscan un diagnóstico, sino que proporcionan un listado de conductas observables, estructuradas por áreas (motora, verbal, autonomía), e incluyen las condiciones en que deben observarse, siendo más útiles para planificar la intervención.'
    },
    {
        question: 'Según el DSM-5, ¿qué diagnóstico debe considerarse para una persona con déficits marcados en comunicación social, pero que NO cumple criterios de patrones restrictivos y repetitivos?',
        answers: [
            { text: 'Síndrome de Asperger.', correct: false },
            { text: 'Discapacidad Intelectual.', correct: false },
            { text: 'Trastorno del Lenguaje Expresivo.', correct: false },
            { text: 'Trastorno de la Comunicación Social (Pragmática).', correct: true }
        ],
        explanation: 'Este es un punto clave de la reclasificación del DSM-5. Al volverse más exigente y requerir al menos dos síntomas del Criterio B (patrones repetitivos), muchas personas que antes tenían TGD-No Especificado se quedaban fuera. Para ellas, el DSM-5 creó una nueva categoría: "Trastorno de la Comunicación Social (Pragmática)". Esta etiqueta se aplica a quienes tienen "marcados déficits en comunicación social", pero *no* presentan los patrones restrictivos o repetitivos del TEA.'
    },
    {
        question: '¿Qué es el "cerebro extremo masculino", según la teoría de Baron-Cohen?',
        answers: [
            { text: 'Un déficit en la conexión emocional primaria (Intersubjetividad).', correct: false },
            { text: 'Un estilo cognitivo que muestra una marcada tendencia a la "sistematización" en detrimento de la "empatización".', correct: true },
            { text: 'Una alteración en los lóbulos frontales que impide la planificación.', correct: false },
            { text: 'Un procesamiento de la información centrado en los detalles (Coherencia Central Débil).', correct: false }
        ],
        explanation: 'La Teoría del Cerebro Extremo Masculino es la evolución de la Teoría de la Mente de Baron-Cohen. Postula que el sistema cognitivo se basa en dos procesos: la "empatización" (comprender emociones y estados mentales) y la "sistematización" (extraer reglas y analizar sistemas). Según esta teoría, las personas con autismo tienen un desequilibrio extremo: una marcada tendencia a la sistematización, pero un déficit severo en la empatización. Este perfil (sistematizador > empatizador) es, según el autor, más típico en hombres.'
    },
    {
        question: '¿Cuál es la finalidad de la educación según Tamarit (2005), en el contexto del TEA?',
        answers: [
            { text: 'Reducir los síntomas clínicos del autismo.', correct: false },
            { text: 'Formar ciudadanos satisfechos, independientes y que participen en su comunidad.', correct: true },
            { text: 'Lograr que el alumno alcance los objetivos académicos del currículo ordinario.', correct: false },
            { text: 'Enseñar habilidades de obediencia y seguimiento de instrucciones.', correct: false }
        ],
        explanation: 'El texto propone una visión de la educación que va más allá de lo académico o clínico. Citando a Tamarit (2005), la finalidad de la educación para alumnos con TEA debe ser "formar ciudadanos satisfechos con su vida, que deciden sobre los aspectos que les conciernen, que llevan una vida lo más independiente posible y que participan de la actividad social de su comunidad". Esto implica un enfoque global centrado en la calidad de vida y los resultados personales, no solo en los contenidos académicos.'
    },
    {
        question: '¿Qué es el "modelado en vídeo"?',
        answers: [
            { text: 'Una estrategia de intervención social donde se graba al alumno y luego se analiza su conducta.', correct: false },
            { text: 'Un tipo de evaluación diagnóstica (ADOS-2).', correct: false },
            { text: 'Una forma de agenda visual para el fin de semana.', correct: false },
            { text: 'Una estrategia de intervención social donde el alumno ve una grabación de una conducta (ej. saludar) que luego debe imitar.', correct: true }
        ],
        explanation: 'El modelado en vídeo (o "video modeling") es una estrategia de intervención basada en la evidencia, especialmente útil para enseñar habilidades sociales. La técnica consiste en que el alumno observe un vídeo corto donde un modelo (un igual o un adulto) realiza la conducta deseada de forma correcta (por ejemplo, unirse a un juego, saludar). Posteriormente, se le pide al alumno que imite esa conducta. Es una forma de "modelado" que aprovecha el interés visual frecuente en el TEA.'
    },
    {
        question: '¿Cuál es la principal crítica que recibió el DSM-5 por su redefinición del TEA?',
        answers: [
            { text: 'Por unificar el autismo y el TDAH en la misma categoría.', correct: false },
            { text: 'Por eliminar las alteraciones sensoriales como criterio.', correct: false },
            { text: 'Por ser demasiado laxo y diagnosticar a demasiadas personas.', correct: false },
            { text: 'Por eliminar el Síndrome de Asperger y ser más exigente en los criterios del Criterio B (conductas repetitivas).', correct: true }
        ],
        explanation: 'Los cambios del DSM-5 generaron controversia. Las dos críticas principales fueron: primero, la "eliminación del síndrome de Asperger como categoria diagnóstica independiente", lo cual afectó a la identidad de muchas personas. Y segundo, el aumento de la exigencia en el Criterio B (patrones restrictivos y repetitivos), que pasó a "elevar a dos el número de síntomas exigidos". Esto provocó que muchas personas (especialmente las que antes tenían TGD-NE) no cumplieran los nuevos criterios.'
    },
    {
        question: '¿Qué es la "comorbilidad"?',
        answers: [
            { text: 'La necesidad de apoyo Nivel 3 (muy sustancial).', correct: false },
            { text: 'La presencia de dos o más trastornos o alteraciones en la misma persona (ej. TEA y DI).', correct: true },
            { text: 'La teoría de que el autismo es causado por factores genéticos.', correct: false },
            { text: 'El proceso de mejorar el desarrollo social y comunicativo.', correct: false }
        ],
        explanation: 'La comorbilidad es un término médico y psicológico que se refiere a la presencia de uno o más trastornos o enfermedades adicionales que coexisten con un diagnóstico primario. En el TEA, esto es muy frecuente. Las comorbilidades más comunes son la Discapacidad Intelectual (DI), el TDAH, los trastornos de ansiedad, el TOC o la epilepsia. El DSM-5 permite especificar estas comorbilidades.'
    },
    {
        question: '¿En qué consiste el Criterio A3 del DSM-5 para el diagnóstico de TEA?',
        answers: [
            { text: 'Deficiencias en la reciprocidad socioemocional (ej. no iniciar interacciones).', correct: false },
            { text: 'Deficiencias en las conductas comunicativas no verbales (ej. poco contacto visual).', correct: false },
            { text: 'Deficiencias en el desarrollo, mantenimiento y comprensión de las relaciones.', correct: true },
            { text: 'Insistencia en la monotonía y rutinas inflexibles.', correct: false }
        ],
        explanation: 'El Criterio A (Comunicación e Interacción Social) se divide en tres subcriterios (A1, A2, A3) que deben cumplirse. El Criterio A3 se centra específicamente en las "deficiencias en el desarrollo, mantenimiento y comprensión de las relaciones". Esto se manifiesta en dificultades para ajustar el comportamiento a diferentes contextos sociales, problemas para compartir juegos imaginativos o hacer amigos, o una aparente ausencia de interés por otras personas.'
    },
    {
        question: '¿Qué son las "estereotipias" motoras?',
        answers: [
            { text: 'La necesidad de seguir siempre la misma rutina.', correct: false },
            { text: 'Movimientos repetitivos como el aleteo de manos, balanceo o giros.', correct: true },
            { text: 'El interés absorbente por un tema como los dinosaurios.', correct: false },
            { text: 'La repetición de frases oídas (ecolalia).', correct: false }
        ],
        explanation: 'Las estereotipias motoras son un ejemplo del Criterio B1 del DSM-5. Se refieren a "movimientos... estereotipados o repetitivos". Los ejemplos más comunes en el TEA incluyen el aleteo o agitación de manos, el balanceo del cuerpo, dar vueltas sobre uno mismo o caminar de puntillas.'
    }
];

// --- Elementos del DOM ---
var mainMenu = document.getElementById('main-menu');
var difficultySelector = document.getElementById('difficulty-selector');
var quizMain = document.getElementById('quiz-main');

var topicButtons = document.querySelectorAll('.topic-btn');
var btnBackToTopics = document.getElementById('btn-back-to-topics');

var questionContainer = document.getElementById('question-container');
var questionText = document.getElementById('question-text');
var answerButtonsElement = document.getElementById('answer-buttons');

var statsBar = document.querySelector('.stats-bar'); 
var quizFooter = document.querySelector('.quiz-footer');
var controlsDiv = document.querySelector('.controls');
var prevButton = document.getElementById('prev-btn');
var menuButton = document.getElementById('menu-btn');
var nextButton = document.getElementById('next-btn');

var scoreText = document.getElementById('score-text');
var errorsText = document.getElementById('errors-text'); 

var explanationBox = document.getElementById('explanation-box');
var explanationHeader = document.getElementById('explanation-header');
var explanationText = document.getElementById('explanation-text');

var btnEasy = document.getElementById('btn-easy');
var btnMedium = document.getElementById('btn-medium');
var btnHard = document.getElementById('btn-hard');

var endGameControls = document.getElementById('end-game-controls');
var resultText = document.getElementById('result-text');
var restartButton = document.getElementById('restart-btn');

var difficultyTitle = document.getElementById('difficulty-title');
var quizTitle = document.getElementById('quiz-title');


// --- Variables del Quiz ---
var selectedTheme = ''; 
var selectedThemeName = ''; 
var questionsBank = []; 
var shuffledQuestions, currentQuestionIndex;
var score = 0;
var errors = 0; 
var totalQuestions = 0; 
var scoreHistory = {}; 

// --- Funciones del Quiz ---

// PASO 1: Seleccionar Tema
function selectTheme(theme, themeName) {
    selectedTheme = theme;
    selectedThemeName = themeName;
    difficultyTitle.innerHTML = "Seleccionar Dificultad<br><span style='font-size: 0.7em; color: #666;'>(" + themeName + ")</span>";
    
    mainMenu.classList.add('hide');
    difficultySelector.classList.remove('hide');
}

// PASO 2: Iniciar Quiz (seleccionar dificultad)
function startQuiz(difficulty) {
    if (difficulty === 'easy') {
        questionsBank = questions_easy[selectedTheme];
        totalQuestions = 35;
    } else if (difficulty === 'medium') {
        questionsBank = questions_medium[selectedTheme];
        totalQuestions = 30;
    } else { // 'hard'
        questionsBank = questions_hard[selectedTheme];
        totalQuestions = 20; // Ajustado al número de preguntas difíciles
    }

    difficultySelector.classList.add('hide');
    endGameControls.classList.add('hide');
    quizMain.classList.remove('hide');
    quizFooter.classList.remove('hide');
    statsBar.classList.remove('hide'); 

    // Resetear estadísticas
    score = 0;
    errors = 0;
    scoreHistory = {};
    updateStats(); 
    
    quizTitle.innerText = selectedThemeName;
    
    shuffledQuestions = questionsBank.sort(function() { return Math.random() - 0.5 });
    shuffledQuestions.forEach(function(q) {
        q.isAnswered = false;
        q.userAnswerIndex = null;
    });

    currentQuestionIndex = 0;
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}

// Muestra una pregunta y sus respuestas
function showQuestion(question) {
    resetState();
    questionText.innerText = (currentQuestionIndex + 1) + ". " + question.question;

    // --- Visibilidad de Botones de Navegación ---
    if (currentQuestionIndex > 0) {
        prevButton.classList.remove('invisible');
    } else {
        prevButton.classList.add('invisible');
    }
    
    if (question.isAnswered) {
        if (shuffledQuestions.length > currentQuestionIndex + 1) {
            nextButton.innerText = "Siguiente";
        } else {
            nextButton.innerText = "Finalizar Quiz";
        }
        nextButton.classList.remove('invisible');
    } else {
        nextButton.classList.add('invisible');
    }
    // --- Fin Visibilidad ---

    // Crear botones de respuesta
    question.answers.forEach(function(answer, index) {
        var button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        button.dataset.index = index;
        
        if (answer.correct) {
            button.dataset.correct = true;
        }
        
        if (!question.isAnswered) {
             button.addEventListener('click', selectAnswer);
        }
       
        answerButtonsElement.appendChild(button);
    });

    // Si la pregunta YA ha sido respondida (al navegar atrás/adelante)
    if (question.isAnswered) {
        var selectedButton = answerButtonsElement.children[question.userAnswerIndex];
        var correct = selectedButton.dataset.correct === "true";
        
        if (correct) {
            explanationHeader.innerText = "¡Correcto!";
            explanationHeader.className = "correct";
        } else {
            explanationHeader.innerText = "Incorrecto";
            explanationHeader.className = "wrong";
        }
        explanationText.innerHTML = question.explanation;
        explanationBox.classList.remove('hide');

        for (var i = 0; i < answerButtonsElement.children.length; i++) {
            var btn = answerButtonsElement.children[i];
            btn.disabled = true; 
            setStatusClass(btn, btn.dataset.correct === "true"); 
        }
    }
}

// Resetea el estado entre preguntas
function resetState() {
    explanationBox.classList.add('hide');
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

// Se ejecuta al hacer clic en una respuesta (SOLO la primera vez)
function selectAnswer(e) {
    var selectedButton = e.target;
    var correct = selectedButton.dataset.correct === "true";
    var selectedIndex = parseInt(selectedButton.dataset.index);

    var currentQuestion = shuffledQuestions[currentQuestionIndex];
    var firstAttempt = !currentQuestion.isAnswered;
    
    currentQuestion.isAnswered = true;
    currentQuestion.userAnswerIndex = selectedIndex;

    if (correct) {
        scoreHistory[currentQuestionIndex] = 1;
        explanationHeader.innerText = "¡Correcto!";
        explanationHeader.className = "correct";
    } else {
        scoreHistory[currentQuestionIndex] = 0;
        explanationHeader.innerText = "Incorrecto";
        explanationHeader.className = "wrong";
        if (firstAttempt) { 
            errors++;
        }
    }
    recalculateScore(); 
    updateStats(); 

    explanationText.innerHTML = currentQuestion.explanation;
    explanationBox.classList.remove('hide');

    for (var i = 0; i < answerButtonsElement.children.length; i++) {
        var button = answerButtonsElement.children[i];
        button.disabled = true; 
        setStatusClass(button, button.dataset.correct === "true");
    }

    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.innerText = "Siguiente";
    } else {
        nextButton.innerText = "Finalizar Quiz";
    }
    nextButton.classList.remove('invisible'); 
}

// Pone la clase 'correct' o 'wrong' a los botones
function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
        element.classList.add('correct');
    } else {
        if (element.disabled) { 
             var answeredIndex = shuffledQuestions[currentQuestionIndex].userAnswerIndex;
             if (parseInt(element.dataset.index) === answeredIndex && !correct) {
                 element.classList.add('wrong');
             }
        }
    }
}

// Limpia las clases de estado
function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
}

// Recalcula el score total
function recalculateScore() {
    score = 0;
    for (var key in scoreHistory) {
        score += scoreHistory[key];
    }
}

// Actualiza el texto de los contadores
function updateStats() {
    scoreText.innerText = 'Puntuación: ' + score + ' / ' + totalQuestions;
    errorsText.innerText = 'Errores: ' + errors;
}

// --- Funciones de Navegación ---
function showNextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < shuffledQuestions.length) {
        showQuestion(shuffledQuestions[currentQuestionIndex]);
    } else {
        endQuiz();
    }
}

function showPrevQuestion() {
    currentQuestionIndex--;
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}

// Finaliza el quiz y muestra resultados
function endQuiz() {
    // Oculta los elementos del quiz
    questionContainer.classList.add('hide');
    answerButtonsElement.classList.add('hide');
    quizFooter.classList.add('hide');
    statsBar.classList.add('hide'); 
    explanationBox.classList.add('hide');
    quizMain.classList.add('hide');
    
    // Asegura que otros menús estén ocultos
    difficultySelector.classList.add('hide');
    
    // Muestra el contenedor principal del quiz (que ahora solo mostrará el header y los resultados)
    quizMain.classList.remove('hide');
    
    // Oculta el título del header del quiz
    document.getElementById('quiz-header').classList.add('hide');
    
    // Calcula y muestra los resultados
    var finalScore = (score / questionsBank.length) * 10;
    resultText.innerHTML = '<h2>¡Quiz completado!</h2><p>Tu puntuación final es: ' + score + ' de ' + questionsBank.length + '.</p><p>Total de errores (al primer intento): ' + errors + '</p><h3>(' + finalScore.toFixed(1) + '/10)</h3>';
    
    // Muestra los controles de fin de juego
    endGameControls.classList.remove('hide');
}

// Vuelve al menú de DIFICULTAD (botón en-juego)
function showDifficultyMenu() {
    quizMain.classList.add('hide');
    quizFooter.classList.add('hide'); 
    statsBar.classList.add('hide'); 
    
    // Resetea la visibilidad de los elementos del quiz para la próxima vez
    document.getElementById('quiz-header').classList.remove('hide');
    questionContainer.classList.remove('hide');
    answerButtonsElement.classList.remove('hide');
    
    difficultySelector.classList.remove('hide');
}

// Vuelve al menú de TEMAS (botón al final o en dificultad)
function showMainMenu() {
    quizMain.classList.add('hide');
    endGameControls.classList.add('hide');
    difficultySelector.classList.add('hide');
    statsBar.classList.add('hide');
    
    // Resetea la visibilidad de los elementos del quiz para la próxima vez
    document.getElementById('quiz-header').classList.remove('hide');
    questionContainer.classList.remove('hide');
    answerButtonsElement.classList.remove('hide');
    
    mainMenu.classList.remove('hide');
}

// --- Event Listeners (Versión compatible) ---

// Menú Principal (Temas)
topicButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        if (button.disabled) return;
        var theme = button.dataset.theme;
        var themeName = button.innerText.split(' (')[0]; 
        selectTheme(theme, themeName);
    });
});

// Menú Dificultad
btnEasy.addEventListener('click', function() { startQuiz('easy'); });
btnMedium.addEventListener('click', function() { startQuiz('medium'); });
btnHard.addEventListener('click', function() { startQuiz('hard'); });
btnBackToTopics.addEventListener('click', showMainMenu);

// Controles del Quiz
nextButton.addEventListener('click', showNextQuestion);
prevButton.addEventListener('click', showPrevQuestion);
menuButton.addEventListener('click', showDifficultyMenu); 
restartButton.addEventListener('click', showMainMenu);