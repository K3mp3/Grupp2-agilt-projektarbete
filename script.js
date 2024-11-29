document.querySelectorAll(".nav-ul li").forEach(menuItem => {
  menuItem.addEventListener("click", function () {
    const targetClass = this.className.replace("nav-", ""); // Ta bort "nav-" för att hitta motsvarande sektion
    const targetSection = document.querySelector(`.${targetClass}`); // Matcha sektionen med klassen
    
    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: "smooth", // Smidig scrollning
        block: "start"      // Scrollar till sektionens början
      });
    }
  });
});