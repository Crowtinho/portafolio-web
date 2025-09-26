function loadTemplate(id, url, callback) {
    fetch(url)
        .then(response => {
            if (!response.ok) throw new Error(`Error ${response.status} al cargar ${url}`);
            return response.text();
        })
        .then(html => {
            const container = document.getElementById(id);
            if (!container) throw new Error(`No se encontró el elemento con id="${id}"`);
            container.innerHTML = html;

            // Ejecuta el callback solo después de cargar el HTML
            if (typeof callback === "function") {
                callback(container);
            }
        })
        .catch(err => console.error(err));
}

// Cargar navbar y añadir lógica de modo oscuro después de que exista en el DOM
loadTemplate("navbar", "components/navbar.html", () => {
    const toggleBtn = document.getElementById("darkModeButton");

    if (!toggleBtn) {
        console.warn("No se encontró el botón de modo oscuro en el navbar");
        return;
    }

    const icon = toggleBtn.querySelector("i");

    // Activar modo oscuro si estaba guardado
    // if (localStorage.getItem("dark-mode") === "enabled") {
    //     document.body.classList.add("dark-mode");
    //     icon.classList.replace("bi-moon", "bi-sun");
    // }
    const darkPref = localStorage.getItem("dark-mode"); 
    if (darkPref === "enabled" || darkPref === null) { 
        document.body.classList.add("dark-mode");
        icon.classList.replace("bi-moon", "bi-sun");
    }

    toggleBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        const isDark = document.body.classList.contains("dark-mode");
        
        // Cambiar ícono
        icon.classList.toggle("bi-moon", !isDark);
        icon.classList.toggle("bi-sun", isDark);

        // Guardar preferencia
        localStorage.setItem("dark-mode", isDark ? "enabled" : "disabled");
    });
});

// Cargar el resto de componentes
loadTemplate("hero", "components/hero.html");
loadTemplate("about", "components/about.html");
loadTemplate("projects", "components/projects.html");
loadTemplate("skills", "components/skills.html");
// loadTemplate("experience", "components/experience.html");
loadTemplate("contact", "components/contact.html");
loadTemplate("footer", "components/footer.html");
