function loadTemplate(id, url, callback) {
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error ${response.status} al cargar ${url}`);
            }
            return response.text();
        })
        .then(html => {
            const container = document.getElementById(id);
            if (!container) {
                throw new Error(`No se encontró el elemento con id="${id}"`);
            }

            container.innerHTML = html;

            // Ejecuta el callback si existe
            if (typeof callback === "function") {
                callback(container);
            }
        })
        .catch(err => console.error(err));
}

loadTemplate("navbar", "components/navbar.html");
loadTemplate("hero", "components/heroV2.html");
loadTemplate("about", "components/about.html");
loadTemplate("projects", "components/projects.html");
loadTemplate("skills", "components/skills.html");
loadTemplate("experience", "components/experience.html");
loadTemplate("contact", "components/contact.html");
loadTemplate("footer", "components/footer.html");


// // Cargar navbar y luego agregar un listener
// loadTemplate("navbar", "components/navbar.html", (el) => {
//     console.log("Navbar cargado:", el);

//     // Ejemplo: agregar evento al botón "contacto"
//     const btnContacto = el.querySelector("#btnContacto");
//     if (btnContacto) {
//         btnContacto.addEventListener("click", () => {
//             alert("Hiciste clic en Contacto");
//         });
//     }
// });

// // Cargar footer sin callback
// loadTemplate("footer", "components/footer.html");
