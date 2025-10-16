/* script.js
  - Genera las tarjetas de la galería a partir del array `people`
  - Controla el modal con la biografía
  - Controla el menú responsivo (hamburguesa)
*/

const people = [
  {id: 'p1',name:'Eva Perón',years:'1919 – 1952',img:'img/eva-peron.jpg',quote:'Donde hay una necesidad, nace un derecho.',bio:'Eva María Duarte, conocida como Evita, nació el 7 de mayo de 1919 en Los Toldos, Buenos Aires, en una familia humilde. Desde joven soñó con ser actriz y se mudó a Buenos Aires a los 15 años, trabajando en teatro, cine y radio. En 1944 conoció a Juan Domingo Perón, con quien compartía ideales de justicia social, y se casaron en 1945. Tras la elección de Perón como presidente en 1946, Eva se convirtió en una figura clave de su gobierno. Fundó la Fundación Eva Perón, que construyó hospitales, escuelas y hogares, y ayudó a los más necesitados. Impulsó la Ley del Voto Femenino de 1947 y creó el Partido Peronista Femenino, promoviendo la participación política de las mujeres. Evita era admirada por su carisma, entrega y cercanía con el pueblo. Falleció de cáncer el 26 de julio de 1952, a los 33 años, dejando un legado de lucha por los derechos sociales, la igualdad de género y el amor hacia los más humildes. Su vida inspiró libros, películas y obras de teatro.'},
  {id: 'p2',name:'Chaplin',years:'1889 – 1977',img:'img/chaplin.jpg',quote:'El tiempo es el mejor autor: siempre encuentra un final perfecto.',bio:'Chaplin era un britanico que nacio el 16 abril 1889 y empezo su carrera siendo actor, humorista, compositor, productor, guionista, director y escritor,el debutó en el cine en 1914 y rápidamente se convirtió en una estrella gracias a su personaje de Charlot, un vagabundo con modales refinados. Sus películas combinaban slapstick con pathos y a menudo contenían temas sociales y políticos. Algunas de sus películas más destacadas son La quimera del oro (1925), Luces de la ciudad (1931), Tiempos modernos (1936) y El gran dictador (1940). La mayoría de las personas (ahora y durante su vida) creían que Chaplin tenía ojos marrones porque solo lo habían visto en blanco y negro con maquillaje de ojos negro. De hecho, eran muy azules. Chaplin comentó en su autobiografía que las personas que lo conocían por primera vez siempre se sorprendían por sus ojos azules. Y su futura esposa, Oona Chaplin, le escribió a una amiga de la infancia en 1942: "Acabo de conocer a Charlie Chaplin. ¡Qué ojos azules tiene!". '},
  {id: 'p3',name:'Frida Kahlo',years:'1907 – 1954',img:'img/frida-kahlo.jpg',quote:'Pinto mi propia realidad.',bio:'Frida Kahlo nació el 6 de julio de 1907 en Coyoacán, México. Fue una destacada pintora conocida por sus autorretratos y por reflejar en su arte el dolor físico y emocional que vivió a lo largo de su vida. A los 18 años sufrió un grave accidente de autobús que marcó su salud para siempre, pero también la llevó a dedicarse plenamente a la pintura. Su obra combina elementos del surrealismo, el folclore mexicano y temas personales como el amor, el sufrimiento y la identidad. Estuvo casada con el también pintor Diego Rivera, con quien tuvo una relación intensa y complicada. Frida se convirtió en un símbolo de fuerza, libertad y autenticidad. Murió el 13 de julio de 1954, a los 47 años, dejando un legado artístico y cultural que sigue inspirando al mundo..'},
  {id: 'p4',name:'Michel Faraday',years:'1791 – 1867',img:'img/michel-faraday.jpg',quote:'La fuerza no viene de la capacidad corporal sino de la voluntad del alma.',bio:'Michael Faraday (22 de septiembre de 1791 – 25 de agosto de 1867) fue un físico y químico inglés, uno de los científicos más influyentes del siglo XIX. Comenzó su carrera como químico, escribiendo un manual práctico, descubriendo compuestos como el benceno y licuando por primera vez un gas considerado “permanente”. Su mayor aporte fue en electricidad y magnetismo: generó por primera vez corriente eléctrica a partir de un campo magnético, inventó el motor eléctrico y la dinamo, y descubrió el diamagnetismo y el efecto del magnetismo sobre la luz. Sus experimentos proporcionaron la base para que James Clerk Maxwell desarrollara la teoría clásica del electromagnetismo, dejando un legado duradero en la ciencia.'},
  {id: 'p5',name:'Ricando Anival Fort',years:'1968 – 2013',img:'img/ricardo-fort.jpg',quote:'Seguir tu vocación es el primer paso para vivir una vida que realmente te pertenece.',bio:'Ricardo Aníbal Fort fue hijo de Carlos Augusto Fort, dueño de la fábrica de chocolates Felfort, y de Marta Campa. Aunque su familia esperaba que continuara con el negocio, él eligió un camino distinto: el arte. Desde joven mostró interés por la música, el canto y la actuación, y decidió seguir su vocación pese a las presiones familiares. Viajó a Estados Unidos para formarse y buscar oportunidades, pero fue en Argentina donde construyó su personaje público: extravagante, mediático y auténtico. Entre 2008 y 2012 alcanzó gran popularidad gracias a sus apariciones en televisión y su estilo de vida llamativo. Su frase “yo no manejo la fábrica de chocolate, yo manejo mi vida” se convirtió en símbolo de su independencia y forma de ver la vida. Ricardo Fort dejó una huella profunda en la cultura argentina: representó la libertad de ser uno mismo, la autenticidad y el valor de seguir la vocación sin dejarse dominar por las expectativas ajenas.'},
  {id: 'p6',name:'Noelia Elizabeth Romero',years:'1989 – Actualidad',img:'img/noelia-romero.jpg',quote:'Mamá, sos mi mayor motivación y el corazón de todos mis sueños. - Tu hija',bio:'Hija de Orlinda Benítez, esposa de Andrés Gabriel Luna y madre de Luna Magali Anahí (2004), Luna Evelin Melina (2007), Luna Mateo Andrés (2010), Luna Guadalupe Belén (2012) y Luna Gabriel Dante (2015). Mujer morena, de cabello oscuro y mirada cálida, amable, bondadosa y generosa. Su presencia transmite cercanía y confianza. Desde joven demostró fortaleza y dedicación: inició su educación primaria en la institución pública N°46 y parte de su educación secundaria en la institución Media N°24, completándola más tarde en otra institución pública, mientras criaba a sus dos primeras hijas. Gracias al apoyo de su pareja, en 2020 se recibió como Profesora de Educación Primaria, ya con cuatro hijos, y posteriormente se graduó como Psicóloga Social. Noelia es un modelo a seguir; su amor, valentía y fe inspiran a nunca rendirse y a perseguir los sueños. Su vida demuestra que los sacrificios y la dedicación pueden abrir caminos y motivar a otros.'},
  {id: 'p7',name:'Ludwig Van Beethoven',years:'1920 – 1958',img:'img/Beethoven.jpg',quote:'La música debe hacer brotar fuego en el corazón del hombre y lágrimas en los ojos de la mujer.',bio:'Ludwig van Beethoven, nacido el 16 de diciembre de 1770 en Bonn, Alemania, fue uno de los compositores más influyentes de la historia y un genio del piano. Su obra transformó la música clásica y abrió el camino hacia el Romanticismo. Desde niño mostró un talento excepcional, instruido por su padre para ser prodigio. A los 12 años ya componía y tocaba en público. Se formó en Bonn y luego en Viena con maestros como Joseph Haydn, desarrollando un estilo propio, poderoso y emocional. Entre sus obras más famosas están las nueve sinfonías, conciertos para piano y sonatas como Claro de Luna y Patética. La Novena Sinfonía incluye el célebre Himno a la Alegría. A los 28 años comenzó a perder la audición, y con el tiempo quedó completamente sordo, pero siguió componiendo obras llenas de fuerza y belleza, demostrando su pasión y determinación. Para Beethoven, la música fue su razón de vivir.'},
  {id: 'p8',name:'Hermanos Wrights',years:'Wilbur 1867 – 1912/Wrigh 1871 – 1948',img:'img/hermanos.jpg',quote:'Volar no fue cuestión de suerte, fue cuestion de creer y no rendirse. "Orville Wrighr". Los sueños grandes solo se cumplen cuando uno se anima a intentarlo. "Wilbur Wright".',bio:'Los hermanos Wright fueron pionetos de la aviación moderna. Antes de crear su avión, trabajaron en una imprenta y luego en un taller de bicicletas, donde aprendieron sobre mecánica y equilibrio. Con esos conocimientos, comenzaron sus experimentos con planeadores. El 17 de diciembre de 1903, en Kitty Hawk, Carolina del Norte, lograron el primer vuelo exxitoso: Orville pilotó durante 12 segundos y recorrió 36 metros, marcando un gran avance para la humanidad. A pesar de las criticas, su perseverancia, inteligencia y confianza los llevaron a perfeccionar sus inventos y demostrar que el vuelo humano era posible. Hoy se los recuerda como loz creadores del primer avión y simbolo de innovación y superación, inspirando a ingenieros, pilotos y soñadores en todo el mundo.'},
  {id: 'p9',name:'Santos Borre',years:'1995 – Actualidad',img:'img/santos-borre.jpg',quote:'La simplicidad es la máxima sofisticación.',bio:'Rafael Santos Borré nació el 15 de septiembre de 1995 en Barranquilla, Colombia. Desde niño mostró una gran pasión por el fútbol, jugando en las calles de su barrio. Se formó en el Deportivo Cali, donde debutó en 2013. Luego pasó por el Atlético de Madrid y el Villarreal, pero su gran consolidación llegó en River Plate, donde fue figura y ganó la Copa Libertadores 2018. Más tarde continuó su carrera en Eintracht Frankfurt, convirtiéndose en el primer colombiano en anotar en una final de Europa League, título que ganó en 2022. También jugó en el Werder Bremen y en el Internacional de Porto Alegre. Es reconocido por su esfuerzo, humildad, liderazgo y mentalidad competitiva.'},
  {id: 'p10',name:'Jane Goodball',years:'1934 – 2025',img:'img/jane-goodball.jpg',quote:'El mayor peligro para nuestro futuro es la indiferencia.',bio:'Jane Goodall nació el 3 de abril de 1934 en Reino Unido y falleció el 1 de octubre de 2025. Fue una reconocida primatóloga, etóloga y ambientalista británica, famosa por sus estudios sobre el comportamiento de los chimpancés en Tanzania. Comenzó como voluntaria, sin formación universitaria, observando a estos animales en su hábitat natural. Con paciencia y dedicación, descubrió que los chimpancés usan herramientas y tienen comportamientos sociales complejos, cambiando para siempre la manera en que el mundo entiende a los animales. Además, fundó el Instituto Jane Goodall y el programa Roots & Shoots, que promueven la educación ambiental, la conservación y el respeto por la naturaleza. Su vida fue un ejemplo de compromiso, empatía y amor por el planeta.'},
  {id: 'p11',name:'Saul Villarroel',years:'1996 – Actualidad',img:'img/saul.jpg',quote:'"Siempre conta hasta 3".',bio:'Saul nacio el 27/04/1996   alguien que a su corta edad tuvo que madurar y ayudar a sus papás y cuidar de sus hermanos pequeños, saul desde chico siempre fue travioso que si lo ven tiene marcas de aventura en su cabeza o cara, saul siempre fue alguien tranquilo, trabajador y de un muy buen corazón el en la segundaría siempre fue un buen estudiante, solo que en su último año tuvo un problema con su salud debido a que se puso mal de la cabeza por los estudios, mis papás intuían que era el colegio porque mi hermano no quería ir al colegio y era muy raro porque mi hermano siempre fue alguien sereno y nunca tuvo problemas con sus estudios pero creo que el tanto estudiar lo estreso o capaz era otra cosa decían mis papás cuestion que mi hermano no tuvo problemas para terminar sus estudios porque siempre fue un chico estudioso y logró terminar bien la segundaría y logro estar bien el mismo, al paso mi hermano a sus 22 años se recibió de policía de provincia y tiene una pareja estable.'},
  {id: 'p12',name:'Sabrina Annlynn Carpenter',years:'1999 – Actualidad',img:'img/sabrina-carpenter.jpg',quote:'Aunque haya vida en el universo que lo entienda, nuestra tarea es descubrirlo.',bio:'Sabrina Annlynn Carpenter nació el 11 de mayo de 1999 en Quakertown, Pensilvania, y creció en East Greenville. Es hija de David y Elizabeth Carpenter y tiene tres hermanas mayores: Sarah, Shannon y Cayla. Es sobrina de la actriz Nancy Cartwright, voz de Bart Simpson. Comenzó su carrera a los 10 años publicando videos musicales en YouTube. A los 12 debutó en televisión en Law & Order: SVU, y se consolidó como figura pública interpretando a Maya Hart en Girl Meets World (2014-2017). También ha participado en cine y televisión, destacándose en The Hate U Give, Tall Girl, Work It, Clouds y el musical de Broadway Mean Girls. Su trayectoria refleja constancia, creatividad y evolución, consolidándose como un fenómeno global del pop y la actuación.'},
  {id: 'p13',name:'Juana Azurduy',years:'1780 – 1862',img:'img/juana-azurduy.jpg',quote:'No hay patria sin libertad, ni libertad sin sacrificio.',bio:'Nació el 12 de julio de 1780 en Chuquisaca (hoy Sucre, Bolivia). Fue militar y patriota revolucionaria, destacada líder guerrillera en las guerras por la independencia del Alto Perú y del Río de la Plata. Hija de una mestiza y un hacendado, aprendió tareas de campo e idiomas originarios como quichua y aymara. Quedó huérfana joven y fue criada por familiares y en conventos. En 1805 se casó con Miguel Asencio Padilla, con quien tuvo cinco hijos. Ambos se unieron a la revolución de Chuquisaca (1809) y luego combatieron al imperio español en el grupo “Los Leales”. Por su valentía y liderazgo, fue nombrada teniente coronel en 1816 y recibió un sable honorífico del ejército de Buenos Aires. Murió el 25 de mayo de 1862 en Chuquisaca. Hoy es considerada heroína de la independencia latinoamericana, y en Argentina y Bolivia se le rinde homenaje con monumentos, escuelas y avenidas que llevan su nombre.'},
  {id: 'p14',name:'Diana Frances Spencer',years:'1961 – 1997',img:'img/diana-spencer.jpg',quote:'Todos necesitamos expresar amor, y cuando lo hacemos, ayudamos a sanar el mundo.',bio:'Nació en una familia noble británica y fue la cuarta de cinco hijos. Desde joven mostró empatía y vocación de ayuda, trabajando como maestra jardinera y niñera antes de casarse con el Príncipe Carlos en 1981, convirtiéndose en la Princesa de Gales. Usó su posición para ayudar a los más necesitados, apoyando causas como la lucha contra el VIH/SIDA, la eliminación de minas antipersonales y la atención a niños y enfermos. Su sencillez y cercanía le valieron el apodo de “la princesa del pueblo”. Murió en un accidente automovilístico en París, dejando un legado humanitario que continúa a través de sus hijos, William y Harry. Su vida inspira por su empatía, solidaridad y vocación de servicio.'},
  {id: 'p15',name:'Nikola Tesla',years:'1856 – 1943',img:'img/nikolas-tesla.jpg',quote:'El presente es de ellos; el futuro, por el cual realmente he trabajado, es mío.',bio:'Nikola Tesla nació el 10 de julio de 1856 en Smiljan (actual Croacia). Desde niño mostró una gran inteligencia e imaginación, influenciado por su madre inventora. Estudió ingeniería eléctrica en Europa y en 1884 emigró a Estados Unidos, donde trabajó con Thomas Edison. Durante la “Guerra de las Corrientes”, defendió la corriente alterna (AC), que resultó más eficiente y permitió llevar electricidad a grandes distancias. También soñó con la transmisión inalámbrica de energía e información, anticipando la radio, el radar y la energía sin cables. Su torre Wardenclyffe representó su idea de brindar energía gratuita al mundo, pero no pudo terminarla por falta de recursos. Murió en Nueva York en 1943, sin reconocimiento, aunque hoy es considerado uno de los grandes genios de la historia, recordado por demostrar que los límites solo existen hasta donde llega nuestra imaginación.'},
  {id: 'p16',name:'Louis Pasteur',years:'1822 – 1895',img:'img/louis-pasteur.jpg',quote:'La suerte favorece solo a la mente preparada.',bio:'Louis Pasteur nació el 27 de diciembre de 1822 en Dole, Francia. Desde joven mostró interés por la ciencia, especialmente por la química y la biología. Estudió en la Escuela Normal Superior de París, donde comenzó a realizar investigaciones que más tarde cambiarían el rumbo de la medicina y la microbiología. Pasteur descubrió que muchos microorganismos eran responsables de enfermedades y de la descomposición de los alimentos. Gracias a sus estudios, desarrolló el proceso de pasteurización, que consiste en calentar los líquidos para eliminar bacterias dañinas. Además, creó vacunas contra enfermedades como la rabia y el ántrax, salvando miles de vidas. Murió el 28 de septiembre de 1895 en Marnes-la-Coquette, Francia. Su legado científico marcó un antes y un después en la historia de la medicina y la higiene. Hoy es recordado como uno de los científicos más importantes del mundo, y su trabajo sentó las bases de la microbiología moderna.'},
  {id: 'p17',name:'Jorge Luis Borges',years:'1899 – 1986',img:'img/borges.jpg',quote:'Uno está enamorado cuando se da cuenta de que otra persona es única.',bio:'Nació el 24 de agosto de 1899 en Buenos Aires, Argentina, en una familia rodeada de libros que fomentó su amor por la lectura. Durante su adolescencia vivió en Europa, donde estudió en Suiza y España, aprendiendo idiomas y formándose en literatura y filosofía. A su regreso a Argentina se dedicó plenamente a la literatura, trabajando como bibliotecario, profesor y conferencista. Exploró temas como el tiempo, los sueños, los laberintos, la identidad y el infinito. Entre sus obras más destacadas están “Ficciones” (1944) y “El Aleph” (1949), que lo convirtieron en una figura clave de la literatura universal. Aunque quedó ciego en su madurez, continuó escribiendo y dando conferencias. Recibió numerosos premios, incluyendo el Premio Miguel de Cervantes (1979). Falleció el 14 de junio de 1986 en Ginebra, Suiza, dejando un legado que influye profundamente en la literatura contemporánea.'},
  {id: 'p18',name:'Taylor Alison Swift',years:'1989 – actualidad',img:'img/swift.jpg',quote:'La gente te va a juzgar de todos modods, así que más te vale que hagas lo que quieras.',bio:'Nació el 13 de diciembre de 1989 en Reading, Pensilvania, EE. UU. Desde niña mostró talento para la música y la composición. A los 14 años se mudó a Nashville para dedicarse profesionalmente al country, lanzando su álbum debut Taylor Swift en 2006 y alcanzando la fama mundial con Fearless (2008). Con discos como Red, 1989 y Reputation, Taylor evolucionó del country al pop, creando éxitos globales y consolidándose como una figura influyente. Ganó múltiples Grammy, incluyendo Álbum del Año, y enfrentó conflictos mediáticos que marcaron su vida y su música. En los últimos años lanzó Lover, Folklore y Evermore, regrabó sus discos antiguos como Taylor’s Version y comenzó The Eras Tour en 2023, la gira más taquillera de la historia. Hoy es una de las artistas más reconocidas del siglo XXI, admirada por su talento, independencia y cercanía con sus fans.'},
  {id: 'p19',name:'Thomas Alva Edison',years:'1847 – 1931',img:'img/edison.jpg',quote:'No fracasé, solo descubrí 10,000 maneras que no funcionaron.',bio:'Thomas Edison fue un inventor y empresario estadounidense considerado uno de los más importantes de la historia. Patentó más de mil inventos, entre ellos la bombilla eléctrica práctica, el fonógrafo y la cámara de cine. .'}
];

// === GENERAR TARJETAS ===
const cardsContainer = document.getElementById('cards');

function createCard(person) {
  const card = document.createElement('article');
  card.className = 'card';
  card.innerHTML = `
    <div class="thumb">
      <img src="${person.img}" alt="Foto de ${person.name}" loading="lazy" />
    </div>
    <div class="card-body">
      <h4 class="name">${person.name}</h4>
      <p class="role">${person.years}</p>
      <button class="more" data-id="${person.id}">Más información</button>
    </div>
  `;
  return card;
}

function renderCards() {
  cardsContainer.innerHTML = ''; // Limpiar antes de renderizar
  people.forEach(person => {
    const card = createCard(person);
    cardsContainer.appendChild(card);
  });
}

renderCards();

// === MODAL ===
const modal = document.getElementById('modal');
const modalClose = document.getElementById('modalClose');
const modalBack = document.getElementById('modalBack');
const modalImage = document.getElementById('modalImage');
const modalName = document.getElementById('modalName');
const modalYears = document.getElementById('modalYears');
const modalBio = document.getElementById('modalBio');
const modalQuote = document.getElementById('modalQuote');

function openModal(person) {
  modalImage.src = person.img;
  modalImage.alt = `Foto de ${person.name}`;
  modalName.textContent = person.name;
  modalYears.textContent = person.years;
  modalBio.textContent = person.bio;
  modalQuote.textContent = person.quote;
  modal.setAttribute('aria-hidden', 'false');
  modalClose.focus();
}

function closeModal() {
  modal.setAttribute('aria-hidden', 'true');
}

cardsContainer.addEventListener('click', (e) => {
  const btn = e.target.closest('.more');
  if (!btn) return;
  const id = btn.dataset.id;
  const person = people.find(p => p.id === id);
  if (person) openModal(person);
});

modalClose.addEventListener('click', closeModal);
modalBack.addEventListener('click', closeModal);

window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});

// === LAZY LOAD DE IMÁGENES ===
if ('loading' in HTMLImageElement.prototype) {
  document.querySelectorAll('img').forEach(img => img.loading = 'lazy');
}

// === MENÚ RESPONSIVO (hamburguesa) ===
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.main-nav');

if (hamburger && nav) {
  hamburger.addEventListener('click', () => {
    nav.classList.toggle('active'); // Mostrar/ocultar menú
    hamburger.classList.toggle('open'); // opcional: animación de icono
  });

  // Cerrar menú al hacer click en un enlace
  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('active');
      hamburger.classList.remove('open');
    });
  });
}

