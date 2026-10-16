/* ============================================================
   WEB PROFILE - SCRIPT
   Alvaro Molina · UniEspinal · Técnico Profesional en Programación Web
   Two dictionaries (ES and EN) with exactly the same keys.
   ============================================================ */

const ES = {
  "nav.home":      "INICIO",
  "nav.about":     "SOBRE MÍ",
  "nav.skills":    "HABILIDADES",
  "nav.resume":    "FORMACIÓN",
  "nav.portfolio": "PROYECTOS",
  "nav.contact":   "CONTACTO",

  "hero.role": "Desarrollador Web · Soporte Técnico",

  "about.title":          "Sobre Mí",
  "about.text":           "Soy estudiante de desarrollo web y me apasiona crear aplicaciones web limpias, adaptables (responsive) e intuitivas. Me encanta transformar ideas de diseño en código funcional y aprender continuamente sobre tecnologías web modernas. Actualmente, busco una oportunidad de prácticas donde pueda contribuir a proyectos reales y crecer como desarrollador.",
  "about.infoTitle":      "Información",
  "about.labelLocation":  "Ubicación",
  "about.valueLocation":  "Girardot, Colombia",
  "about.labelEmail":     "Correo",
  "about.labelLanguages": "Idiomas",
  "about.valueLanguages": "Español (nativo) · Inglés (B1)",
  "about.labelStatus":    "Disponibilidad",
  "about.valueStatus":    "Abierto a prácticas",
  "about.interestsTitle": "Intereses",

  "interest.1": "CÓDIGO",
  "interest.2": "SOPORTE",
  "interest.3": "LECTURA",
  "interest.4": "JUEGOS",

  "skills.title":        "Habilidades",
  "skills.technical":    "Habilidades técnicas",
  "skills.professional": "Habilidades profesionales",
  "skill.support":       "Soporte al usuario",
  "skill.teamwork":      "Trabajo en equipo",
  "skill.problem":       "Resolución de problemas",
  "skill.english":       "Inglés técnico",

  "resume.title":      "Formación y experiencia",
  "resume.education":  "Formación",
  "resume.experience": "Experiencia",

  "edu.1.title": "Técnico Profesional en Programación Web",
  "edu.1.date":  "2025 - 2027",
  "edu.1.text":  "Centrado en el desarrollo web frontend y backend, la gestión de bases de datos y la creación de aplicaciones web responsivas.",

  "exp.1.title": "Proyecto académico · Desarrollador web",
  "exp.1.text":  "Desarrollé FINANCE-MOVIL con Laravel y PHP, con la base de datos MySQL en phpMyAdmin: una aplicación donde los usuarios definen metas de ahorro, con inicio de sesión separado para estudiantes y administradores y bloqueo de la cuenta tras 3 intentos fallidos.",

  "portfolio.title": "Proyectos",
  "project.1.title": "FINANCE-MOVIL",
  "project.1.text":  "Aplicación web de finanzas personales para definir metas de ahorro, con acceso para estudiantes y administradores.",
  "project.1.tech":  "Laravel · PHP · MySQL (phpMyAdmin) · HTML · CSS",

  "contact.title":         "Contacto",
  "contact.intro":         "¿Tienes un proyecto o una vacante de prácticas? Escríbeme.",
  "contact.emailLabel":    "Correo",

  "footer.note": "Alvaro Molina · Técnico Profesional en Programación Web · UniEspinal"
};


const EN = {
  "nav.home":      "HOME",
  "nav.about":     "ABOUT",
  "nav.skills":    "SKILLS",
  "nav.resume":    "RESUME",
  "nav.portfolio": "PROJECTS",
  "nav.contact":   "CONTACT",

  "hero.role": "Web Developer · Technical Support",

  "about.title":          "About Me",
  "about.text":           "I am a web development student who enjoys building clean, responsive and user-friendly web applications. I like turning design ideas into working code and learning modern web technologies every day. I am currently looking for an internship where I can contribute to real projects and grow as a developer.",
  "about.infoTitle":      "Information",
  "about.labelLocation":  "Location",
  "about.valueLocation":  "Girardot, Colombia",
  "about.labelEmail":     "Email",
  "about.labelLanguages": "Languages",
  "about.valueLanguages": "Spanish (native) · English (B1)",
  "about.labelStatus":    "Availability",
  "about.valueStatus":    "Open to internships",
  "about.interestsTitle": "Interests",

  "interest.1": "CODE",
  "interest.2": "SUPPORT",
  "interest.3": "READING",
  "interest.4": "GAMING",

  "skills.title":        "Skills",
  "skills.technical":    "Technical skills",
  "skills.professional": "Professional skills",
  "skill.support":       "User support",
  "skill.teamwork":      "Teamwork",
  "skill.problem":       "Problem solving",
  "skill.english":       "Technical English",

  "resume.title":      "Education and experience",
  "resume.education":  "Education",
  "resume.experience": "Experience",

  "edu.1.title": "Professional Technician in Web Programming",
  "edu.1.date":  "2025 - 2027",
  "edu.1.text":  "Studying frontend and backend web development, database management, and how to build responsive web applications.",

  "exp.1.title": "Academic project · Web developer",
  "exp.1.text":  "Built FINANCE-MOVIL with Laravel and PHP, using a MySQL database managed in phpMyAdmin: an app where users set savings goals, with separate student and admin logins and an account lock after 3 failed sign-in attempts.",

  "portfolio.title": "Projects",
  "project.1.title": "FINANCE-MOVIL",
  "project.1.text":  "Personal finance web app for setting savings goals, with access for students and administrators.",
  "project.1.tech":  "Laravel · PHP · MySQL (phpMyAdmin) · HTML · CSS",

  "contact.title":         "Contact",
  "contact.intro":         "Have a project or an internship opening? Send me a message.",
  "contact.emailLabel":    "Email",

  "footer.note": "Alvaro Molina · Professional Technician in Web Programming · UniEspinal"
};


/* ============================================================
   LANGUAGE SWITCHER
   ============================================================ */

const DICCIONARIOS = { es: ES, en: EN };
let idiomaActual = "es";

function aplicarIdioma(idioma) {
  const textos = DICCIONARIOS[idioma];
  if (!textos) return;

  document.querySelectorAll("[data-i18n]").forEach(elemento => {
    const clave = elemento.getAttribute("data-i18n");
    if (textos[clave] !== undefined) {
      elemento.textContent = textos[clave];
    } else {
      console.warn("Missing translation key:", clave);
    }
  });

  document.documentElement.lang = idioma;

  const boton = document.getElementById("btn-idioma");
  if (boton) {
    const otro = idioma === "es" ? "en" : "es";
    boton.innerHTML =
      '<span class="idioma-activo">'   + idioma.toUpperCase() + '</span>' +
      '<span class="idioma-sep">/</span>' +
      '<span class="idioma-inactivo">' + otro.toUpperCase()   + '</span>';
    boton.setAttribute("aria-label",
      idioma === "es" ? "Switch to English" : "Cambiar a español");
  }

  idiomaActual = idioma;
}

function cambiarIdioma() {
  aplicarIdioma(idiomaActual === "es" ? "en" : "es");
}


/* ============================================================
   RESPONSIVE MENU
   ============================================================ */

let menuVisible = false;

function mostrarOcultarMenu() {
  const nav = document.getElementById("nav");
  menuVisible = !menuVisible;
  nav.className = menuVisible ? "responsive" : "";
}

function cerrarMenu() {
  document.getElementById("nav").className = "";
  menuVisible = false;
}


/* ============================================================
   SKILL BARS
   ============================================================ */

function animarHabilidades() {
  const barras = document.querySelectorAll(".progreso");

  const mostrar = barra => {
    const porcentaje = barra.getAttribute("data-percent") || "0";
    barra.style.width = porcentaje + "%";
    const etiqueta = barra.querySelector("span");
    if (etiqueta) etiqueta.textContent = porcentaje + "%";
  };

  if (!("IntersectionObserver" in window)) {
    barras.forEach(mostrar);
    return;
  }

  const observador = new IntersectionObserver((entradas, obs) => {
    entradas.forEach(entrada => {
      if (entrada.isIntersecting) {
        mostrar(entrada.target);
        obs.unobserve(entrada.target);
      }
    });
  }, { threshold: 0.4 });

  barras.forEach(barra => observador.observe(barra));
}


/* ============================================================
   START
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {
  aplicarIdioma("es");
  animarHabilidades();
});
