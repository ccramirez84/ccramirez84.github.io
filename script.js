const skills = [
  "Data Analysis", "Power BI", "Python", "SQL", "Excel Avanzado",
  "KPIs", "Data Visualization", "ETL", "Predictive Analytics",
  "Logistics Analytics", "Git", "GitHub", "Statistics", "Business Analysis"
];

const experience = [
  {
    role: "Líder Operativo",
    where: "La Tablaza | Monterojo",
    when: "Sep 2021 – Dic 2025",
    bullets: [
      "Análisis de datos operativos y logísticos para optimización del transporte.",
      "Diseño y seguimiento de KPIs logísticos (OTIF) con cumplimiento cercano al 95%.",
      "Dashboards en Power BI para monitoreo del desempeño operativo.",
      "Análisis predictivo de demanda para inventarios y reducción de quiebres.",
      "Automatización de reportes con Excel avanzado y Power BI."
    ]
  },
  {
    role: "Analista Logístico",
    where: "La Estrella | MillaSiete",
    when: "Jul 2020 – Sep 2021",
    bullets: [
      "Modelos de optimización de rutas para flota de 24 vehículos.",
      "Análisis de seguimiento satelital para eficiencia y reducción de costos.",
      "Reportes analíticos para capacidad operativa y desempeño logístico."
    ]
  },
  {
    role: "Analista Logístico",
    where: "Medellín | TYC",
    when: "Dic 2017 – Jun 2020",
    bullets: [
      "Análisis de grandes volúmenes de datos GPS para optimización de transporte.",
      "Dashboards en Power BI para seguimiento de despachos.",
      "Identificación de patrones y cuellos de botella para mejora continua."
    ]
  },
  {
    role: "Analista de Software",
    where: "Medellín | Savia TIC",
    when: "Sep 2015 – Nov 2017",
    bullets: [
      "Análisis de requerimientos funcionales y no funcionales.",
      "Apoyo a validación de datos y pruebas de calidad.",
      "Documentación técnica y soporte a equipos de desarrollo."
    ]
  },
  {
    role: "Coordinador de Operaciones",
    where: "Envia – Colvanes",
    when: "Jun 2013 – Sep 2015",
    bullets: [
      "Seguimiento a indicadores de desempeño y productividad.",
      "Gestión de equipos operativos de hasta 120 personas."
    ]
  },
  {
    role: "Coordinador de Operaciones",
    where: "Transporte Marítimo",
    when: "Feb 2006 – Feb 2013",
    bullets: [
      "Supervisión de operaciones logísticas y control de indicadores.",
      "Elaboración de reportes de gestión para la toma de decisiones."
    ]
  }
];

const projects = [
  {
    name: "analisis-de-datos-de-perdida-de-clientes",
    desc: "Python/Jupyter: limpieza de datos, análisis exploratorio y visualización.",
    tags: ["Python", "Jupyter", "EDA"],
    url: "https://github.com/ccramirez84/analisis-de-datos-de-perdida-de-clientes"
  },
  {
    name: "LogisticsShippingRates",
    desc: "Análisis de costos logísticos para apoyar decisiones de negocio.",
    tags: ["Python", "Logistics", "Analytics"],
    url: "https://github.com/ccramirez84/LogisticsShippingRates"
  },
  {
    name: "Proyecto-ciencia-de-datos",
    desc: "Estadística, correlación y modelos predictivos.",
    tags: ["Data Science", "Estadística", "Modelos"],
    url: "https://github.com/ccramirez84/Proyecto-ciencia-de-datos"
  },
  {
    name: "devops-capstone-project",
    desc: "Proyecto de DevOps (capstone).",
    tags: ["Python", "DevOps", "CI/CD"],
    url: "https://github.com/ccramirez84/devops-capstone-project"
  },
  {
    name: "ci-cd-final-project",
    desc: "Proyecto final CI/CD.",
    tags: ["Python", "CI/CD"],
    url: "https://github.com/ccramirez84/ci-cd-final-project"
  },
  {
    name: "tdd-bdd-final-project",
    desc: "Proyecto final de TDD/BDD.",
    tags: ["Python", "TDD", "BDD"],
    url: "https://github.com/ccramirez84/tdd-bdd-final-project"
  }
];

const certifications = [
  {
    title: "Ciencia de Datos",
    org: "Universidad de los Andes",
    details: [
      "Programa finalizado",
      "Modelos predictivos en Python",
      "Análisis exploratorio y estadístico de datos",
      "Integración y transformación de datos (ETL)"
    ]
  },
  {
    title: "Desarrollo de Software (en curso)",
    org: "Formación técnica / tecnológica",
    details: [
      "Fundamentos de programación",
      "Estructuras de datos y lógica",
      "Buenas prácticas de desarrollo",
      "Control de versiones con Git y GitHub"
    ]
  },
  {
    title: "Análisis de Datos con Power BI",
    org: "Microsoft",
    details: [
      "Power Query",
      "Modelado de datos",
      "Visualización y dashboards ejecutivos"
    ]
  },
  {
    title: "Fundamentos de Ingeniería de Datos",
    org: "IBM",
    details: [
      "ETL con Python (Pandas, NumPy)",
      "SQL y bases de datos relacionales",
      "Procesamiento de datos estructurados"
    ]
  },
  {
    title: "Fundamentos IBM DevOps, nube y Agile",
    org: "IBM",
    details: [
      "Principios DevOps",
      "CI/CD",
      "Metodologías ágiles"
    ]
  }
];


// ---------- Render ----------
document.getElementById("year").textContent = new Date().getFullYear();

// Skills
const skillsWrap = document.getElementById("skillsChips");
skills.forEach(s => {
  const el = document.createElement("span");
  el.className = "chip";
  el.textContent = s;
  skillsWrap.appendChild(el);
});

// Experience timeline
const tl = document.getElementById("timeline");
experience.forEach(job => {
  const card = document.createElement("div");
  card.className = "card item";
  card.innerHTML = `
    <div class="item-top">
      <div class="role">${job.role}</div>
      <div class="when">${job.when}</div>
    </div>
    <div class="where">${job.where}</div>
    <ul>${job.bullets.map(b => `<li>${b}</li>`).join("")}</ul>
  `;
  tl.appendChild(card);
});

// Projects render + filters
const projectsWrap = document.getElementById("projects");
const search = document.getElementById("search");
const tagSelect = document.getElementById("tag");

const allTags = Array.from(new Set(projects.flatMap(p => p.tags))).sort();
allTags.forEach(t => {
  const o = document.createElement("option");
  o.value = t;
  o.textContent = t;
  tagSelect.appendChild(o);
});

function renderProjects() {
  const q = (search.value || "").toLowerCase().trim();
  const tag = tagSelect.value;

  projectsWrap.innerHTML = "";
  const filtered = projects.filter(p => {
    const matchesQ = !q || (p.name.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q));
    const matchesTag = tag === "all" || p.tags.includes(tag);
    return matchesQ && matchesTag;
  });

  filtered.forEach(p => {
    const el = document.createElement("div");
    el.className = "card project";
    el.innerHTML = `
      <h3>${p.name}</h3>
      <p>${p.desc}</p>
      <div class="tags">${p.tags.map(t => `<span class="tag">${t}</span>`).join("")}</div>
      <a target="_blank" rel="noreferrer" href="${p.url}">Ver repositorio →</a>
    `;
    projectsWrap.appendChild(el);
  });

  if (!filtered.length) {
    const empty = document.createElement("div");
    empty.className = "card";
    empty.innerHTML = `<p class="note">No hay resultados con ese filtro.</p>`;
    projectsWrap.appendChild(empty);
  }
}

search.addEventListener("input", renderProjects);
tagSelect.addEventListener("change", renderProjects);
renderProjects();

// Certifications
const certsWrap = document.getElementById("certs");
certifications.forEach(c => {
  const el = document.createElement("div");
  el.className = "card";
  el.innerHTML = `
    <h3 class="card-title">${c.title}</h3>
    <p class="note">${c.org}</p>
    <ul class="bullets">${c.details.map(d => `<li>${d}</li>`).join("")}</ul>
  `;
  certsWrap.appendChild(el);
});

// Mobile nav
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");
navToggle?.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

// Theme toggle (persist)
const themeBtn = document.getElementById("themeBtn");
const saved = localStorage.getItem("theme");
if (saved) document.documentElement.setAttribute("data-theme", saved);

themeBtn?.addEventListener("click", () => {
  const current = document.documentElement.getAttribute("data-theme");
  const next = current === "light" ? "dark" : "light";
  document.documentElement.setAttribute("data-theme", next);
  localStorage.setItem("theme", next);
});

