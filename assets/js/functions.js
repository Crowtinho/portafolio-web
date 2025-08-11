function scrollToSection(selector) {
    const element = document.querySelector(selector);
    if (element) {
        element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'  // <-- esta línea adicional
        });
    }
}
