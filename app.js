/**
 * TABÚ - Palabra Secreta
 * El juego de describir sin decir
 */

// ============================================
// PALABRAS CON SUS PALABRAS PROHIBIDAS
// ============================================

const WORDS = [
    // ANIMALES
    { word: 'Perro', forbidden: ['animal', 'mascota', 'ladrar', 'hueso', 'cola'] },
    { word: 'Gato', forbidden: ['animal', 'mascota', 'maullar', 'ratón', 'felino'] },
    { word: 'Elefante', forbidden: ['grande', 'trompa', 'África', 'gris', 'colmillos'] },
    { word: 'León', forbidden: ['rey', 'selva', 'melena', 'rugir', 'felino'] },
    { word: 'Delfín', forbidden: ['mar', 'agua', 'nadar', 'inteligente', 'mamífero'] },
    { word: 'Tiburón', forbidden: ['mar', 'peligroso', 'dientes', 'agua', 'aleta'] },
    { word: 'Mariposa', forbidden: ['insecto', 'volar', 'alas', 'colores', 'oruga'] },
    { word: 'Serpiente', forbidden: ['reptil', 'veneno', 'arrastrarse', 'escamas', 'largo'] },
    { word: 'Caballo', forbidden: ['animal', 'montar', 'galopar', 'cola', 'granja'] },
    { word: 'Mono', forbidden: ['animal', 'plátano', 'árbol', 'selva', 'cola'] },
    { word: 'Pingüino', forbidden: ['ave', 'frío', 'hielo', 'blanco', 'negro'] },
    { word: 'Jirafa', forbidden: ['cuello', 'alto', 'África', 'manchas', 'animal'] },
    { word: 'Oso', forbidden: ['animal', 'bosque', 'grande', 'peludo', 'hibernar'] },
    { word: 'Cocodrilo', forbidden: ['reptil', 'agua', 'dientes', 'verde', 'río'] },
    { word: 'Águila', forbidden: ['ave', 'volar', 'pico', 'cazar', 'altura'] },
    { word: 'Tortuga', forbidden: ['lento', 'caparazón', 'reptil', 'agua', 'viejo'] },
    { word: 'Abeja', forbidden: ['insecto', 'miel', 'picar', 'flor', 'zumbar'] },
    { word: 'Pulpo', forbidden: ['mar', 'tentáculos', 'ocho', 'agua', 'tinta'] },
    { word: 'Canguro', forbidden: ['Australia', 'saltar', 'bolsa', 'animal', 'bebé'] },
    { word: 'Araña', forbidden: ['insecto', 'telaraña', 'ocho', 'patas', 'veneno'] },

    // COMIDA
    { word: 'Pizza', forbidden: ['Italia', 'queso', 'tomate', 'redonda', 'horno'] },
    { word: 'Hamburguesa', forbidden: ['carne', 'pan', 'McDonald', 'comida', 'rápida'] },
    { word: 'Helado', forbidden: ['frío', 'dulce', 'verano', 'sabor', 'cono'] },
    { word: 'Chocolate', forbidden: ['dulce', 'marrón', 'cacao', 'postre', 'bombón'] },
    { word: 'Sushi', forbidden: ['Japón', 'arroz', 'pescado', 'alga', 'crudo'] },
    { word: 'Paella', forbidden: ['arroz', 'España', 'marisco', 'Valencia', 'sartén'] },
    { word: 'Tortilla', forbidden: ['huevo', 'patata', 'española', 'redonda', 'freír'] },
    { word: 'Tacos', forbidden: ['México', 'carne', 'tortilla', 'salsa', 'picante'] },
    { word: 'Pasta', forbidden: ['Italia', 'espagueti', 'salsa', 'hervir', 'tomate'] },
    { word: 'Ensalada', forbidden: ['lechuga', 'verde', 'verdura', 'sano', 'aliño'] },
    { word: 'Croissant', forbidden: ['Francia', 'desayuno', 'mantequilla', 'hojaldre', 'cuerno'] },
    { word: 'Churros', forbidden: ['chocolate', 'freír', 'dulce', 'desayuno', 'aceite'] },
    { word: 'Sopa', forbidden: ['líquido', 'cuchara', 'caliente', 'caldo', 'verdura'] },
    { word: 'Bocadillo', forbidden: ['pan', 'jamón', 'queso', 'sándwich', 'comer'] },
    { word: 'Manzana', forbidden: ['fruta', 'roja', 'verde', 'árbol', 'Adán'] },
    { word: 'Plátano', forbidden: ['fruta', 'amarillo', 'mono', 'tropical', 'potasio'] },
    { word: 'Naranja', forbidden: ['fruta', 'color', 'zumo', 'vitamina', 'cítrico'] },
    { word: 'Sandía', forbidden: ['fruta', 'verde', 'rojo', 'verano', 'semillas'] },
    { word: 'Café', forbidden: ['beber', 'mañana', 'negro', 'despierto', 'taza'] },
    { word: 'Cerveza', forbidden: ['alcohol', 'beber', 'bar', 'rubia', 'espuma'] },

    // OBJETOS
    { word: 'Teléfono', forbidden: ['llamar', 'móvil', 'pantalla', 'comunicar', 'WhatsApp'] },
    { word: 'Televisión', forbidden: ['ver', 'pantalla', 'canal', 'mando', 'programa'] },
    { word: 'Ordenador', forbidden: ['pantalla', 'teclado', 'internet', 'ratón', 'PC'] },
    { word: 'Coche', forbidden: ['ruedas', 'conducir', 'motor', 'vehículo', 'gasolina'] },
    { word: 'Bicicleta', forbidden: ['pedales', 'ruedas', 'montar', 'cadena', 'dos'] },
    { word: 'Reloj', forbidden: ['hora', 'tiempo', 'agujas', 'muñeca', 'segundos'] },
    { word: 'Gafas', forbidden: ['ojos', 'ver', 'cristales', 'sol', 'montura'] },
    { word: 'Paraguas', forbidden: ['lluvia', 'agua', 'abrir', 'mojarse', 'tela'] },
    { word: 'Llave', forbidden: ['puerta', 'abrir', 'cerrar', 'cerradura', 'metal'] },
    { word: 'Cama', forbidden: ['dormir', 'colchón', 'almohada', 'sábanas', 'descansar'] },
    { word: 'Silla', forbidden: ['sentar', 'patas', 'mueble', 'madera', 'mesa'] },
    { word: 'Mesa', forbidden: ['mueble', 'patas', 'comer', 'madera', 'encima'] },
    { word: 'Lámpara', forbidden: ['luz', 'bombilla', 'iluminar', 'encender', 'apagar'] },
    { word: 'Espejo', forbidden: ['reflejar', 'cristal', 'ver', 'imagen', 'baño'] },
    { word: 'Nevera', forbidden: ['frío', 'cocina', 'comida', 'congelar', 'electrodoméstico'] },
    { word: 'Lavadora', forbidden: ['ropa', 'lavar', 'agua', 'centrifugar', 'detergente'] },
    { word: 'Libro', forbidden: ['leer', 'páginas', 'historia', 'autor', 'biblioteca'] },
    { word: 'Bolígrafo', forbidden: ['escribir', 'tinta', 'papel', 'lápiz', 'punta'] },
    { word: 'Tijeras', forbidden: ['cortar', 'papel', 'metal', 'dos', 'hojas'] },
    { word: 'Toalla', forbidden: ['secar', 'baño', 'agua', 'ducha', 'playa'] },

    // LUGARES
    { word: 'Playa', forbidden: ['mar', 'arena', 'sol', 'verano', 'agua'] },
    { word: 'Hospital', forbidden: ['médico', 'enfermo', 'salud', 'doctor', 'enfermera'] },
    { word: 'Colegio', forbidden: ['estudiar', 'profesor', 'niños', 'clase', 'aprender'] },
    { word: 'Supermercado', forbidden: ['comprar', 'tienda', 'comida', 'carrito', 'productos'] },
    { word: 'Cine', forbidden: ['película', 'palomitas', 'pantalla', 'ver', 'butaca'] },
    { word: 'Parque', forbidden: ['árboles', 'niños', 'jugar', 'verde', 'banco'] },
    { word: 'Aeropuerto', forbidden: ['avión', 'volar', 'viaje', 'maleta', 'pasaporte'] },
    { word: 'Restaurante', forbidden: ['comer', 'comida', 'camarero', 'mesa', 'menú'] },
    { word: 'Biblioteca', forbidden: ['libros', 'leer', 'silencio', 'estudiar', 'estantería'] },
    { word: 'Gimnasio', forbidden: ['ejercicio', 'deporte', 'pesas', 'sudar', 'músculo'] },
    { word: 'Museo', forbidden: ['arte', 'cuadros', 'historia', 'exposición', 'cultura'] },
    { word: 'Zoo', forbidden: ['animales', 'jaulas', 'visitar', 'niños', 'elefante'] },
    { word: 'Banco', forbidden: ['dinero', 'cuenta', 'tarjeta', 'cajero', 'ahorrar'] },
    { word: 'Farmacia', forbidden: ['medicinas', 'enfermo', 'pastillas', 'receta', 'salud'] },
    { word: 'Hotel', forbidden: ['dormir', 'habitación', 'viajar', 'recepción', 'vacaciones'] },
    { word: 'Estadio', forbidden: ['fútbol', 'deporte', 'gente', 'partido', 'equipo'] },
    { word: 'Iglesia', forbidden: ['religión', 'Dios', 'rezar', 'misa', 'cura'] },
    { word: 'Discoteca', forbidden: ['bailar', 'música', 'noche', 'fiesta', 'DJ'] },
    { word: 'Montaña', forbidden: ['alto', 'escalar', 'nieve', 'pico', 'subir'] },
    { word: 'Piscina', forbidden: ['nadar', 'agua', 'verano', 'bañador', 'cloro'] },

    // DEPORTES
    { word: 'Fútbol', forbidden: ['balón', 'gol', 'portero', 'equipo', 'campo'] },
    { word: 'Baloncesto', forbidden: ['canasta', 'balón', 'NBA', 'equipo', 'aro'] },
    { word: 'Tenis', forbidden: ['raqueta', 'pelota', 'red', 'Nadal', 'pista'] },
    { word: 'Natación', forbidden: ['agua', 'nadar', 'piscina', 'brazada', 'estilo'] },
    { word: 'Ciclismo', forbidden: ['bicicleta', 'pedales', 'Tour', 'ruedas', 'carrera'] },
    { word: 'Golf', forbidden: ['palo', 'hoyo', 'pelota', 'césped', 'campo'] },
    { word: 'Boxeo', forbidden: ['pelea', 'guantes', 'ring', 'golpe', 'knockout'] },
    { word: 'Esquí', forbidden: ['nieve', 'montaña', 'bajar', 'pista', 'frío'] },
    { word: 'Surf', forbidden: ['ola', 'mar', 'tabla', 'playa', 'agua'] },
    { word: 'Yoga', forbidden: ['relajación', 'postura', 'meditar', 'estirar', 'respirar'] },
    { word: 'Karate', forbidden: ['lucha', 'arte', 'marcial', 'cinturón', 'patada'] },
    { word: 'Ajedrez', forbidden: ['rey', 'tablero', 'piezas', 'jaque', 'mate'] },
    { word: 'Voleibol', forbidden: ['red', 'balón', 'equipo', 'playa', 'remate'] },
    { word: 'Atletismo', forbidden: ['correr', 'saltar', 'pista', 'carrera', 'Olimpiadas'] },
    { word: 'Béisbol', forbidden: ['bate', 'pelota', 'base', 'lanzar', 'guante'] },

    // PROFESIONES
    { word: 'Médico', forbidden: ['hospital', 'enfermo', 'salud', 'doctor', 'curar'] },
    { word: 'Profesor', forbidden: ['enseñar', 'colegio', 'clase', 'alumno', 'estudiar'] },
    { word: 'Policía', forbidden: ['ley', 'delito', 'uniforme', 'orden', 'arrestar'] },
    { word: 'Bombero', forbidden: ['fuego', 'incendio', 'apagar', 'manguera', 'rescate'] },
    { word: 'Cocinero', forbidden: ['cocina', 'comida', 'chef', 'restaurante', 'cocinar'] },
    { word: 'Piloto', forbidden: ['avión', 'volar', 'cielo', 'cabina', 'aterrizar'] },
    { word: 'Astronauta', forbidden: ['espacio', 'cohete', 'luna', 'NASA', 'traje'] },
    { word: 'Actor', forbidden: ['película', 'teatro', 'actuar', 'papel', 'cine'] },
    { word: 'Cantante', forbidden: ['cantar', 'música', 'voz', 'canción', 'concierto'] },
    { word: 'Futbolista', forbidden: ['fútbol', 'balón', 'gol', 'equipo', 'jugar'] },
    { word: 'Abogado', forbidden: ['ley', 'juicio', 'defensa', 'cliente', 'tribunal'] },
    { word: 'Arquitecto', forbidden: ['edificio', 'diseñar', 'plano', 'construir', 'casa'] },
    { word: 'Dentista', forbidden: ['dientes', 'boca', 'muela', 'dolor', 'caries'] },
    { word: 'Veterinario', forbidden: ['animal', 'mascota', 'perro', 'gato', 'curar'] },
    { word: 'Periodista', forbidden: ['noticias', 'periódico', 'informar', 'entrevista', 'escribir'] },

    // ENTRETENIMIENTO
    { word: 'Netflix', forbidden: ['series', 'películas', 'ver', 'streaming', 'plataforma'] },
    { word: 'Spotify', forbidden: ['música', 'canciones', 'escuchar', 'playlist', 'app'] },
    { word: 'Instagram', forbidden: ['fotos', 'red', 'social', 'stories', 'seguir'] },
    { word: 'TikTok', forbidden: ['videos', 'cortos', 'baile', 'viral', 'red'] },
    { word: 'YouTube', forbidden: ['videos', 'ver', 'canal', 'suscribir', 'Google'] },
    { word: 'WhatsApp', forbidden: ['mensajes', 'chat', 'grupo', 'llamar', 'verde'] },
    { word: 'PlayStation', forbidden: ['videojuegos', 'Sony', 'consola', 'jugar', 'mando'] },
    { word: 'Nintendo', forbidden: ['videojuegos', 'Mario', 'consola', 'Switch', 'Zelda'] },
    { word: 'Minecraft', forbidden: ['bloques', 'construir', 'juego', 'pixeles', 'creeper'] },
    { word: 'Fortnite', forbidden: ['juego', 'Battle', 'Royale', 'construir', 'disparar'] },

    // MARCAS Y EMPRESAS
    { word: 'Apple', forbidden: ['iPhone', 'Mac', 'Steve', 'manzana', 'tecnología'] },
    { word: 'Google', forbidden: ['buscar', 'internet', 'buscador', 'Android', 'Chrome'] },
    { word: 'Amazon', forbidden: ['comprar', 'online', 'paquetes', 'envío', 'tienda'] },
    { word: 'McDonald\'s', forbidden: ['hamburguesa', 'comida', 'rápida', 'patatas', 'Happy'] },
    { word: 'Coca-Cola', forbidden: ['refresco', 'bebida', 'rojo', 'beber', 'gas'] },
    { word: 'Nike', forbidden: ['deporte', 'zapatillas', 'logo', 'ropa', 'Just'] },
    { word: 'Adidas', forbidden: ['deporte', 'zapatillas', 'rayas', 'ropa', 'tres'] },
    { word: 'IKEA', forbidden: ['muebles', 'Suecia', 'montar', 'tienda', 'barato'] },
    { word: 'Zara', forbidden: ['ropa', 'moda', 'tienda', 'España', 'Inditex'] },
    { word: 'Ferrari', forbidden: ['coche', 'rojo', 'rápido', 'lujo', 'Italia'] },

    // PELÍCULAS Y SERIES
    { word: 'Harry Potter', forbidden: ['magia', 'varita', 'Hogwarts', 'mago', 'película'] },
    { word: 'Star Wars', forbidden: ['espacio', 'Jedi', 'sable', 'galaxia', 'Darth'] },
    { word: 'El Rey León', forbidden: ['Simba', 'África', 'Mufasa', 'Disney', 'sabana'] },
    { word: 'Frozen', forbidden: ['Elsa', 'hielo', 'Disney', 'princesa', 'nieve'] },
    { word: 'Titanic', forbidden: ['barco', 'hundir', 'iceberg', 'Jack', 'Rose'] },
    { word: 'Los Simpsons', forbidden: ['amarillos', 'Homer', 'Springfield', 'dibujos', 'familia'] },
    { word: 'Friends', forbidden: ['amigos', 'sofá', 'café', 'Nueva York', 'serie'] },
    { word: 'Stranger Things', forbidden: ['Netflix', 'Once', 'monstruo', 'años 80', 'niños'] },
    { word: 'La Casa de Papel', forbidden: ['atraco', 'máscara', 'Dalí', 'Profesor', 'banco'] },
    { word: 'Juego de Tronos', forbidden: ['dragones', 'trono', 'reinos', 'HBO', 'invierno'] },

    // MÚSICA
    { word: 'Guitarra', forbidden: ['cuerdas', 'tocar', 'música', 'instrumento', 'eléctrica'] },
    { word: 'Piano', forbidden: ['teclas', 'negro', 'blanco', 'instrumento', 'música'] },
    { word: 'Batería', forbidden: ['golpear', 'ritmo', 'baquetas', 'instrumento', 'música'] },
    { word: 'Violín', forbidden: ['cuerdas', 'arco', 'clásica', 'instrumento', 'orquesta'] },
    { word: 'Flauta', forbidden: ['soplar', 'viento', 'instrumento', 'música', 'agujeros'] },
    { word: 'Micrófono', forbidden: ['cantar', 'voz', 'hablar', 'amplificar', 'sonido'] },
    { word: 'DJ', forbidden: ['música', 'mezclar', 'discoteca', 'fiesta', 'platos'] },
    { word: 'Concierto', forbidden: ['música', 'cantar', 'escenario', 'público', 'banda'] },
    { word: 'Karaoke', forbidden: ['cantar', 'letra', 'micrófono', 'música', 'pantalla'] },
    { word: 'Reggaetón', forbidden: ['música', 'bailar', 'latino', 'perreo', 'ritmo'] },

    // NATURALEZA
    { word: 'Sol', forbidden: ['luz', 'calor', 'día', 'amarillo', 'estrella'] },
    { word: 'Luna', forbidden: ['noche', 'cielo', 'blanca', 'satélite', 'llena'] },
    { word: 'Estrella', forbidden: ['cielo', 'noche', 'brillar', 'luz', 'espacio'] },
    { word: 'Arcoíris', forbidden: ['colores', 'lluvia', 'sol', 'cielo', 'siete'] },
    { word: 'Volcán', forbidden: ['lava', 'erupción', 'montaña', 'fuego', 'ceniza'] },
    { word: 'Río', forbidden: ['agua', 'corriente', 'fluir', 'peces', 'orilla'] },
    { word: 'Cascada', forbidden: ['agua', 'caer', 'río', 'salto', 'naturaleza'] },
    { word: 'Bosque', forbidden: ['árboles', 'verde', 'naturaleza', 'animales', 'plantas'] },
    { word: 'Desierto', forbidden: ['arena', 'calor', 'seco', 'camello', 'oasis'] },
    { word: 'Isla', forbidden: ['mar', 'agua', 'rodeada', 'playa', 'tropical'] },
    { word: 'Terremoto', forbidden: ['temblar', 'tierra', 'desastre', 'edificios', 'escala'] },
    { word: 'Tornado', forbidden: ['viento', 'girar', 'destruir', 'aire', 'tormenta'] },
    { word: 'Nieve', forbidden: ['blanca', 'frío', 'invierno', 'copos', 'esquiar'] },
    { word: 'Rayo', forbidden: ['tormenta', 'luz', 'trueno', 'electricidad', 'cielo'] },
    { word: 'Flor', forbidden: ['planta', 'pétalos', 'oler', 'jardín', 'bonita'] },

    // CUERPO HUMANO
    { word: 'Corazón', forbidden: ['latir', 'amor', 'sangre', 'órgano', 'pecho'] },
    { word: 'Cerebro', forbidden: ['cabeza', 'pensar', 'inteligencia', 'órgano', 'mente'] },
    { word: 'Ojo', forbidden: ['ver', 'mirar', 'cara', 'pupila', 'párpado'] },
    { word: 'Nariz', forbidden: ['oler', 'cara', 'respirar', 'mocos', 'aire'] },
    { word: 'Oreja', forbidden: ['oír', 'escuchar', 'cabeza', 'sonido', 'lóbulo'] },
    { word: 'Lengua', forbidden: ['boca', 'sabor', 'hablar', 'lamer', 'gusto'] },
    { word: 'Diente', forbidden: ['boca', 'morder', 'masticar', 'dentista', 'blanco'] },
    { word: 'Mano', forbidden: ['dedos', 'tocar', 'agarrar', 'brazo', 'uñas'] },
    { word: 'Pie', forbidden: ['caminar', 'dedos', 'zapato', 'pierna', 'andar'] },
    { word: 'Cabeza', forbidden: ['cara', 'pelo', 'cerebro', 'pensar', 'cuello'] },

    // ROPA
    { word: 'Camiseta', forbidden: ['ropa', 'vestir', 'manga', 'torso', 'algodón'] },
    { word: 'Pantalón', forbidden: ['ropa', 'piernas', 'vestir', 'vaquero', 'bolsillos'] },
    { word: 'Zapatos', forbidden: ['pies', 'calzar', 'caminar', 'cordones', 'suela'] },
    { word: 'Gorra', forbidden: ['cabeza', 'sol', 'visera', 'béisbol', 'llevar'] },
    { word: 'Bufanda', forbidden: ['cuello', 'frío', 'invierno', 'abrigar', 'lana'] },
    { word: 'Guantes', forbidden: ['manos', 'frío', 'dedos', 'invierno', 'proteger'] },
    { word: 'Cinturón', forbidden: ['pantalón', 'cintura', 'sujetar', 'hebilla', 'cuero'] },
    { word: 'Corbata', forbidden: ['cuello', 'camisa', 'formal', 'trabajo', 'nudo'] },
    { word: 'Vestido', forbidden: ['ropa', 'mujer', 'falda', 'elegante', 'vestir'] },
    { word: 'Bikini', forbidden: ['playa', 'nadar', 'verano', 'dos', 'piezas'] },

    // EMOCIONES Y CONCEPTOS
    { word: 'Amor', forbidden: ['corazón', 'querer', 'sentimiento', 'pareja', 'romántico'] },
    { word: 'Miedo', forbidden: ['susto', 'terror', 'asustar', 'sentimiento', 'pánico'] },
    { word: 'Felicidad', forbidden: ['alegría', 'contento', 'sonrisa', 'feliz', 'sentimiento'] },
    { word: 'Tristeza', forbidden: ['llorar', 'triste', 'pena', 'lágrimas', 'sentimiento'] },
    { word: 'Suerte', forbidden: ['fortuna', 'trébol', 'bueno', 'casualidad', 'lotería'] },
    { word: 'Sueño', forbidden: ['dormir', 'noche', 'cama', 'soñar', 'descansar'] },
    { word: 'Tiempo', forbidden: ['reloj', 'hora', 'minutos', 'segundos', 'pasar'] },
    { word: 'Dinero', forbidden: ['euros', 'comprar', 'billete', 'moneda', 'rico'] },
    { word: 'Trabajo', forbidden: ['oficina', 'empleo', 'jefe', 'sueldo', 'laborar'] },
    { word: 'Vacaciones', forbidden: ['descanso', 'viajar', 'verano', 'playa', 'días'] },

    // FESTIVIDADES
    { word: 'Navidad', forbidden: ['diciembre', 'regalos', 'árbol', 'Papá Noel', 'familia'] },
    { word: 'Halloween', forbidden: ['octubre', 'miedo', 'calabaza', 'disfraz', 'brujas'] },
    { word: 'Cumpleaños', forbidden: ['celebrar', 'velas', 'tarta', 'regalos', 'años'] },
    { word: 'Boda', forbidden: ['casarse', 'novios', 'anillos', 'vestido', 'fiesta'] },
    { word: 'Carnaval', forbidden: ['disfraces', 'fiesta', 'desfile', 'máscaras', 'febrero'] },
    { word: 'Año Nuevo', forbidden: ['enero', 'uvas', 'campanadas', 'fiesta', 'celebrar'] },
    { word: 'San Valentín', forbidden: ['amor', 'febrero', 'corazón', 'pareja', 'flores'] },
    { word: 'Semana Santa', forbidden: ['Pascua', 'procesión', 'religión', 'abril', 'huevos'] },
    { word: 'Reyes Magos', forbidden: ['enero', 'regalos', 'niños', 'tres', 'roscón'] },
    { word: 'Nochevieja', forbidden: ['diciembre', 'año', 'uvas', 'fiesta', 'campanadas'] },

    // PAÍSES Y CIUDADES
    { word: 'España', forbidden: ['Madrid', 'país', 'español', 'Europa', 'toros'] },
    { word: 'Francia', forbidden: ['París', 'francés', 'Europa', 'torre', 'Eiffel'] },
    { word: 'Italia', forbidden: ['Roma', 'pizza', 'pasta', 'Europa', 'italiano'] },
    { word: 'Japón', forbidden: ['Tokio', 'sushi', 'asiático', 'samurái', 'anime'] },
    { word: 'México', forbidden: ['tacos', 'mexicano', 'América', 'azteca', 'tequila'] },
    { word: 'Estados Unidos', forbidden: ['América', 'Trump', 'dólar', 'inglés', 'USA'] },
    { word: 'Londres', forbidden: ['Inglaterra', 'Big Ben', 'ciudad', 'Reino Unido', 'inglés'] },
    { word: 'Nueva York', forbidden: ['América', 'ciudad', 'Estatua', 'Libertad', 'Manhattan'] },
    { word: 'Barcelona', forbidden: ['España', 'ciudad', 'Gaudí', 'playa', 'Cataluña'] },
    { word: 'París', forbidden: ['Francia', 'Eiffel', 'ciudad', 'amor', 'francés'] },

    // TRANSPORTE
    { word: 'Avión', forbidden: ['volar', 'cielo', 'alas', 'aeropuerto', 'piloto'] },
    { word: 'Barco', forbidden: ['mar', 'agua', 'navegar', 'capitán', 'puerto'] },
    { word: 'Tren', forbidden: ['vías', 'estación', 'vagón', 'rápido', 'locomotora'] },
    { word: 'Autobús', forbidden: ['transporte', 'parada', 'pasajeros', 'conductor', 'público'] },
    { word: 'Moto', forbidden: ['ruedas', 'casco', 'dos', 'conducir', 'rápido'] },
    { word: 'Helicóptero', forbidden: ['volar', 'hélice', 'cielo', 'aire', 'piloto'] },
    { word: 'Taxi', forbidden: ['coche', 'conductor', 'pagar', 'amarillo', 'ciudad'] },
    { word: 'Metro', forbidden: ['subterráneo', 'estación', 'tren', 'ciudad', 'túnel'] },
    { word: 'Patinete', forbidden: ['ruedas', 'eléctrico', 'montar', 'scooter', 'ciudad'] },
    { word: 'Cohete', forbidden: ['espacio', 'volar', 'NASA', 'astronauta', 'luna'] },

    // TECNOLOGÍA
    { word: 'Robot', forbidden: ['máquina', 'metal', 'inteligencia', 'artificial', 'autómata'] },
    { word: 'Dron', forbidden: ['volar', 'cámara', 'control', 'remoto', 'aire'] },
    { word: 'Wifi', forbidden: ['internet', 'conexión', 'inalámbrico', 'red', 'contraseña'] },
    { word: 'Bluetooth', forbidden: ['inalámbrico', 'conexión', 'auriculares', 'azul', 'diente'] },
    { word: 'Selfie', forbidden: ['foto', 'móvil', 'cámara', 'frontal', 'uno mismo'] },
    { word: 'Emoji', forbidden: ['cara', 'símbolo', 'mensaje', 'WhatsApp', 'amarillo'] },
    { word: 'Hashtag', forbidden: ['símbolo', 'Twitter', 'etiqueta', 'redes', 'almohadilla'] },
    { word: 'Password', forbidden: ['contraseña', 'secreto', 'acceso', 'seguridad', 'clave'] },
    { word: 'USB', forbidden: ['pendrive', 'memoria', 'ordenador', 'conectar', 'datos'] },
    { word: 'Auriculares', forbidden: ['música', 'orejas', 'escuchar', 'cable', 'sonido'] }
];

// ============================================
// ESTADO DEL JUEGO
// ============================================

const gameState = {
    teams: 2,
    pointsToWin: 10,
    timePerTurn: 60,
    scores: [],
    currentTeam: 0,
    currentTurnScore: 0,
    usedWords: [],
    currentWord: null,
    timeRemaining: 60,
    timerInterval: null,
    isPlaying: false
};

// ============================================
// AUDIO
// ============================================

let audioContext = null;
let isMuted = false;

function initAudio() {
    if (!audioContext) {
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (audioContext.state === 'suspended') {
        audioContext.resume();
    }
}

function playSound(type) {
    if (isMuted || !audioContext) return;

    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    switch (type) {
        case 'correct':
            oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
            oscillator.frequency.setValueAtTime(1000, audioContext.currentTime + 0.1);
            gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
            gainNode.gain.exponentialDecayTo(0.01, audioContext.currentTime + 0.2);
            oscillator.start();
            oscillator.stop(audioContext.currentTime + 0.2);
            break;
        case 'wrong':
            oscillator.frequency.setValueAtTime(300, audioContext.currentTime);
            oscillator.frequency.setValueAtTime(200, audioContext.currentTime + 0.1);
            gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
            gainNode.gain.exponentialDecayTo(0.01, audioContext.currentTime + 0.2);
            oscillator.start();
            oscillator.stop(audioContext.currentTime + 0.2);
            break;
        case 'tick':
            oscillator.frequency.setValueAtTime(600, audioContext.currentTime);
            gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
            gainNode.gain.exponentialDecayTo(0.01, audioContext.currentTime + 0.05);
            oscillator.start();
            oscillator.stop(audioContext.currentTime + 0.05);
            break;
        case 'timeup':
            oscillator.type = 'sawtooth';
            oscillator.frequency.setValueAtTime(400, audioContext.currentTime);
            oscillator.frequency.setValueAtTime(300, audioContext.currentTime + 0.2);
            oscillator.frequency.setValueAtTime(200, audioContext.currentTime + 0.4);
            gainNode.gain.setValueAtTime(0.4, audioContext.currentTime);
            gainNode.gain.exponentialDecayTo(0.01, audioContext.currentTime + 0.6);
            oscillator.start();
            oscillator.stop(audioContext.currentTime + 0.6);
            break;
        case 'win':
            [0, 0.15, 0.3, 0.45].forEach((delay, i) => {
                const osc = audioContext.createOscillator();
                const gain = audioContext.createGain();
                osc.connect(gain);
                gain.connect(audioContext.destination);
                osc.frequency.setValueAtTime([523, 659, 784, 1047][i], audioContext.currentTime + delay);
                gain.gain.setValueAtTime(0.2, audioContext.currentTime + delay);
                gain.gain.exponentialDecayTo(0.01, audioContext.currentTime + delay + 0.15);
                osc.start(audioContext.currentTime + delay);
                osc.stop(audioContext.currentTime + delay + 0.15);
            });
            break;
    }
}

// Polyfill para exponentialDecayTo
if (typeof GainNode !== 'undefined' && !GainNode.prototype.exponentialDecayTo) {
    AudioParam.prototype.exponentialDecayTo = function(value, endTime) {
        this.exponentialRampToValueAtTime(Math.max(value, 0.0001), endTime);
    };
}

// ============================================
// NAVEGACIÓN
// ============================================

function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    document.getElementById(screenId).classList.add('active');
}

// ============================================
// CONFIGURACIÓN
// ============================================

function updateConfigDisplay() {
    document.getElementById('teamsValue').textContent = gameState.teams;
    document.getElementById('pointsValue').textContent = gameState.pointsToWin;
    document.getElementById('timeValue').textContent = gameState.timePerTurn;

    document.getElementById('summaryTeams').textContent = gameState.teams;
    document.getElementById('summaryPoints').textContent = gameState.pointsToWin;
    document.getElementById('summaryTime').textContent = gameState.timePerTurn;
}

// ============================================
// JUEGO
// ============================================

function initGame() {
    gameState.scores = Array(gameState.teams).fill(0);
    gameState.currentTeam = 0;
    gameState.usedWords = [];
    gameState.currentTurnScore = 0;
    showTurnScreen();
}

function showTurnScreen() {
    // Mostrar puntuaciones
    const scoresContainer = document.getElementById('turnScores');
    scoresContainer.innerHTML = gameState.scores.map((score, i) => `
        <div class="score-chip ${i === gameState.currentTeam ? 'active' : ''}">
            <span>Equipo ${i + 1}</span>
            <span class="score-value">${score}</span>
        </div>
    `).join('');

    document.getElementById('turnTeamName').textContent = `Equipo ${gameState.currentTeam + 1}`;
    showScreen('screenTurn');
}

function startTurn() {
    gameState.currentTurnScore = 0;
    gameState.timeRemaining = gameState.timePerTurn;
    gameState.isPlaying = true;

    document.getElementById('gameTeamName').textContent = `Equipo ${gameState.currentTeam + 1}`;
    document.getElementById('currentTurnScore').textContent = '0';

    showNextWord();
    startTimer();
    showScreen('screenGame');
}

function showNextWord() {
    // Obtener palabra no usada
    const availableWords = WORDS.filter(w => !gameState.usedWords.includes(w.word));

    if (availableWords.length === 0) {
        gameState.usedWords = [];
        return showNextWord();
    }

    const wordObj = availableWords[Math.floor(Math.random() * availableWords.length)];
    gameState.currentWord = wordObj;
    gameState.usedWords.push(wordObj.word);

    // Mostrar en pantalla
    document.getElementById('wordMain').textContent = wordObj.word;
    const forbiddenList = document.getElementById('forbiddenList');
    forbiddenList.innerHTML = wordObj.forbidden.map(f => `<li>${f}</li>`).join('');

    // Animación
    const card = document.getElementById('wordCard');
    card.style.animation = 'none';
    card.offsetHeight;
    card.style.animation = 'fadeInUp 0.3s ease';
}

function startTimer() {
    updateTimerDisplay();

    gameState.timerInterval = setInterval(() => {
        gameState.timeRemaining--;
        updateTimerDisplay();

        if (gameState.timeRemaining <= 10) {
            playSound('tick');
        }

        if (gameState.timeRemaining <= 0) {
            endTurn();
        }
    }, 1000);
}

function updateTimerDisplay() {
    const timerValue = document.getElementById('timerValue');
    const timerProgress = document.getElementById('timerProgressSmall');

    timerValue.textContent = gameState.timeRemaining;

    // Actualizar círculo de progreso
    const circumference = 2 * Math.PI * 16;
    const progress = (gameState.timeRemaining / gameState.timePerTurn) * circumference;
    timerProgress.style.strokeDashoffset = circumference - progress;

    // Colores según tiempo restante
    timerProgress.classList.remove('warning', 'danger');
    if (gameState.timeRemaining <= 10) {
        timerProgress.classList.add('danger');
    } else if (gameState.timeRemaining <= 20) {
        timerProgress.classList.add('warning');
    }
}

function handleCorrect() {
    if (!gameState.isPlaying) return;

    playSound('correct');
    gameState.currentTurnScore++;
    document.getElementById('currentTurnScore').textContent = gameState.currentTurnScore;
    showNextWord();
}

function handleWrong() {
    if (!gameState.isPlaying) return;

    playSound('wrong');
    showNextWord();
}

function endTurn() {
    gameState.isPlaying = false;
    clearInterval(gameState.timerInterval);
    playSound('timeup');

    // Actualizar puntuación del equipo
    gameState.scores[gameState.currentTeam] += gameState.currentTurnScore;

    // Verificar victoria
    if (gameState.scores[gameState.currentTeam] >= gameState.pointsToWin) {
        showWinner();
        return;
    }

    // Mostrar resultado del turno
    showTurnResult();
}

function showTurnResult() {
    document.getElementById('resultTeamName').textContent = `Equipo ${gameState.currentTeam + 1}`;
    document.getElementById('resultPoints').textContent = `+${gameState.currentTurnScore}`;
    document.getElementById('resultTotal').textContent = gameState.scores[gameState.currentTeam];
    document.getElementById('resultGoal').textContent = gameState.pointsToWin;

    showScreen('screenTurnResult');
}

function nextTurn() {
    gameState.currentTeam = (gameState.currentTeam + 1) % gameState.teams;
    showTurnScreen();
}

function showWinner() {
    playSound('win');

    const winnerTeam = gameState.currentTeam;
    document.getElementById('winnerTeamName').textContent = `Equipo ${winnerTeam + 1}`;
    document.getElementById('winnerScore').textContent = gameState.scores[winnerTeam];

    // Mostrar todas las puntuaciones finales
    const finalScores = document.getElementById('finalScores');
    finalScores.innerHTML = gameState.scores
        .map((score, i) => `
            <div class="final-score-item ${i === winnerTeam ? 'winner' : ''}">
                <span>Equipo ${i + 1}</span>
                <span>${score}</span>
            </div>
        `)
        .join('');

    showScreen('screenWinner');
}

function resetGame() {
    clearInterval(gameState.timerInterval);
    gameState.isPlaying = false;
    gameState.usedWords = [];
    showScreen('screenHome');
}

// ============================================
// EVENT LISTENERS
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    // Splash screen
    const splash = document.getElementById('splashScreen');
    let splashDismissed = false;

    function hideSplash() {
        if (splashDismissed) return;
        splashDismissed = true;
        splash.classList.add('hidden');
    }

    if (splash) {
        ['click', 'touchstart', 'touchend'].forEach(eventType => {
            splash.addEventListener(eventType, (e) => {
                if (splashDismissed) return;
                e.preventDefault();
                e.stopPropagation();
                initAudio();
                hideSplash();
            }, { passive: false });
        });
    }

    // Volver a mostrar splash al volver a la app
    document.addEventListener('visibilitychange', () => {
        if (document.visibilityState === 'visible' && splash) {
            splashDismissed = false;
            splash.classList.remove('hidden');
        }
    });

    // Navegación
    document.getElementById('btnStart').addEventListener('click', () => {
        showScreen('screenConfig');
    });

    document.getElementById('btnBackConfig').addEventListener('click', () => {
        showScreen('screenHome');
    });

    // Configuración - Equipos
    document.getElementById('btnTeamsMinus').addEventListener('click', () => {
        if (gameState.teams > 2) {
            gameState.teams--;
            updateConfigDisplay();
        }
    });

    document.getElementById('btnTeamsPlus').addEventListener('click', () => {
        if (gameState.teams < 6) {
            gameState.teams++;
            updateConfigDisplay();
        }
    });

    // Configuración - Puntos
    document.getElementById('btnPointsMinus').addEventListener('click', () => {
        if (gameState.pointsToWin > 5) {
            gameState.pointsToWin -= 5;
            updateConfigDisplay();
        }
    });

    document.getElementById('btnPointsPlus').addEventListener('click', () => {
        if (gameState.pointsToWin < 50) {
            gameState.pointsToWin += 5;
            updateConfigDisplay();
        }
    });

    // Configuración - Tiempo
    document.getElementById('btnTimeMinus').addEventListener('click', () => {
        if (gameState.timePerTurn > 30) {
            gameState.timePerTurn -= 15;
            updateConfigDisplay();
        }
    });

    document.getElementById('btnTimePlus').addEventListener('click', () => {
        if (gameState.timePerTurn < 120) {
            gameState.timePerTurn += 15;
            updateConfigDisplay();
        }
    });

    // Comenzar juego
    document.getElementById('btnStartGame').addEventListener('click', () => {
        initGame();
    });

    // Turno
    document.getElementById('btnReady').addEventListener('click', () => {
        startTurn();
    });

    // Acciones del juego
    document.getElementById('btnCorrect').addEventListener('click', handleCorrect);
    document.getElementById('btnWrong').addEventListener('click', handleWrong);

    // Siguiente turno
    document.getElementById('btnNextTurn').addEventListener('click', nextTurn);

    // Jugar de nuevo
    document.getElementById('btnPlayAgain').addEventListener('click', () => {
        initGame();
    });

    document.getElementById('btnBackHome').addEventListener('click', resetGame);

    // Modal de reglas
    document.getElementById('btnRules').addEventListener('click', () => {
        document.getElementById('modalRules').classList.add('active');
    });

    document.getElementById('closeRules').addEventListener('click', () => {
        document.getElementById('modalRules').classList.remove('active');
    });

    document.querySelector('#modalRules .modal-overlay').addEventListener('click', () => {
        document.getElementById('modalRules').classList.remove('active');
    });

    // Inicializar display
    updateConfigDisplay();
});

// Registrar Service Worker
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('sw.js').catch(() => {});
    });
}
