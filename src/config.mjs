// =====================================================================
//  DATOS DE LA EMPRESA — EL ÚNICO ARCHIVO QUE TIENES QUE RELLENAR
// ---------------------------------------------------------------------
//  Cambia aquí tu teléfono, email, nombre, dirección y dominio.
//  Toda la web (cabecera, botones, pie, formulario, Google, etc.)
//  se actualiza sola a partir de estos datos.
//
//  Lo que está entre corchetes [ ... ] es un HUECO que debes sustituir.
// =====================================================================

export const EMPRESA = {
  // --- Identidad de marca (lo que ve el cliente) ---
  nombre: 'Grupo Ignífugo',                      // ← CONFIRMA el nombre comercial exacto
  claim: 'Especialistas en protección pasiva contra incendios',

  // --- Teléfono (¡el canal nº1 de este sector!) ---
  // telefonoMostrar = como se ve;  telefonoLink = solo dígitos con prefijo país (para "llamar")
  telefonoMostrar: '936 942 426',
  telefonoLink: '34936942426',

  // --- Email de presupuestos ---
  // ⚠️ Recomendación: un email corporativo (@tudominio.com) da más confianza
  //    que @gmail y es un plus para posicionar frente a la competencia.
  email: 'grupoignifugo@gmail.com',

  // --- WhatsApp (muy usado para enviar planos) ---
  // Déjalo VACÍO ('') si no tienes un MÓVIL con WhatsApp: los botones de
  // WhatsApp se ocultan solos. Un fijo (93...) no vale para WhatsApp.
  whatsapp: '',                                  // p. ej. '34600123456'

  // --- Ubicación / SEO local (ficha de Google) ---
  direccion: '[Dirección]',                      // calle y número (recomendable para el SEO local)
  ciudad: 'Barcelona',
  provincia: 'Barcelona',
  cp: '[CP]',                                    // p. ej. '08014'
  zonaCobertura: 'Barcelona ciudad, área metropolitana y provincia',
  horario: 'Lunes a viernes, 8:00 – 18:00 h',

  // --- Dominio (para las URLs y el sitemap) ---
  dominio: 'https://proteccionpasivabarcelona.com',

  // --- Imagen de marca (opcional). Sube el archivo a la carpeta /public.
  //     Si lo dejas vacío, no se añade el logo a la ficha de Google (evita un 404).
  logo: '',                                      // p. ej. '/logo.png'

  // --- Datos legales / confianza (rellénalos cuando los tengas) ---
  razonSocial: 'Grupo Ignífugo S.L.',
  cif: '[CIF]',
  habilitacionPCI: '[Nº de habilitación PCI]',   // empresa instaladora/mantenedora de PCI (RIPCI, RD 513/2017)
  seguroRC: '800.000 €',                          // cobertura del seguro de responsabilidad civil

  // --- Cifras de prueba social ---
  // ⚠️ IMPORTANTE: pon aquí tus datos REALES. Publicar cifras u obras
  //    inventadas es un riesgo legal (publicidad engañosa) en un sector regulado.
  anosExperiencia: '15',
  m2Ejecutados: '250.000',
  numObras: '400',

  // --- Envío del formulario (opcional) ---
  // Si dejas esto vacío, el formulario abre el correo del cliente ya
  // rellenado hacia tu email (funciona sin programar nada).
  // Si pones aquí la URL de tu Google Apps Script, enviará los leads ahí.
  formEndpoint: '',
};
