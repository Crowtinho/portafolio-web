const experiences = [
  {
    type: "work",
    title: "Senior Backend Developer",
    company: "TechCorp Solutions",
    location: "Madrid, España",
    period: "2022 - Presente",
    description: "Lidero el desarrollo de microservicios para plataforma de e-commerce. Implementé arquitectura hexagonal y optimicé rendimiento de APIs en un 40%.",
    technologies: ["Java 17", "Spring Boot", "Docker", "AWS", "PostgreSQL"],
    achievements: [
      "Redujo tiempo de respuesta de APIs en 40%",
      "Implementó sistema de cache con Redis",
      "Lideró migración a microservicios"
    ]
  },
  {
    type: "work",
    title: "Backend Developer",
    company: "StartupTech",
    location: "Barcelona, España",
    period: "2020 - 2022",
    description: "Desarrollo de APIs REST para aplicación fintech. Trabajé en equipo ágil implementando funcionalidades de pagos y gestión de usuarios.",
    technologies: ["Java 11", "Spring Boot", "MySQL", "JUnit", "Maven"],
    achievements: [
      "Desarrolló módulo de pagos seguro",
      "Implementó autenticación JWT",
      "Escribió 90%+ de cobertura de tests"
    ]
  },
  {
    type: "work",
    title: "Junior Java Developer",
    company: "DevSolutions",
    location: "Valencia, España",
    period: "2019 - 2020",
    description: "Desarrollo de aplicaciones web empresariales. Participé en refactoring de legacy code y implementación de nuevas funcionalidades.",
    technologies: ["Java 8", "Spring MVC", "Hibernate", "MySQL"],
    achievements: [
      "Refactorizó código legacy",
      "Implementó nuevas funcionalidades",
      "Mejoró documentación técnica"
    ]
  },
  {
    type: "education",
    title: "Ingeniería en Informática",
    company: "Universidad Politécnica de Valencia",
    location: "Valencia, España",
    period: "2015 - 2019",
    description: "Grado en Ingeniería Informática con especialización en Desarrollo de Software. Proyecto final: Sistema de gestión hospitalaria con Java y Spring.",
    technologies: ["Java", "C++", "Python", "SQL", "Algoritmos"],
    achievements: [
      "Graduado con Magna Cum Laude",
      "Proyecto final calificado con 9.5/10",
      "Participé en competencias de programación"
    ]
  }
];

const container = document.getElementById("experience-list");

experiences.forEach((exp, index) => {
  const badgeColor = exp.type === "work" ? "var(--electric-blue)" : "var(--lime-green)";
  const icon = exp.type === "work" ? "bi-building" : "bi-mortarboard";

  const techList = exp.technologies.map(tech => `<span class="badge bg-light text-dark border">${tech}</span>`).join(" ");
  const achievementsList = exp.achievements.map(ach => `<li>${ach}</li>`).join("");

  container.innerHTML += `
    <div class="timeline-item row">
      <div class="timeline-badge" style="background-color:${badgeColor}">
        <i class="bi ${icon}"></i>
      </div>
      <div class="timeline-content card shadow-sm p-3">
        <h5>${exp.title}</h5>
        <p class="text-primary fw-semibold"><i class="bi bi-building"></i> ${exp.company}</p>
        <small class="text-muted"><i class="bi bi-calendar"></i> ${exp.period} | <i class="bi bi-geo-alt"></i> ${exp.location}</small>
        <p class="mt-2">${exp.description}</p>
        <h6 class="mt-3">Tecnologías utilizadas:</h6>
        ${techList}
        <h6 class="mt-3">Principales logros:</h6>
        <ul>${achievementsList}</ul>
      </div>
    </div>
  `;
});
