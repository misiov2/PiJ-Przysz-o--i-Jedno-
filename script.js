// Pokaż sekcję po kliknięciu i schowaj inne + ukryj obrazek
function showSection(sectionId) {
  document.getElementById("main-image").style.display = "none";

  document.querySelectorAll(".content-section").forEach(section => {
    section.classList.add("hidden");
  });

  document.getElementById(sectionId).classList.remove("hidden");
}

// Accordion
document.querySelectorAll(".accordion-btn").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".accordion-btn").forEach(btn => {
      if (btn !== button) {
        btn.classList.remove("active");
        btn.nextElementSibling.style.maxHeight = null;
      }
    });

    button.classList.toggle("active");
    const content = button.nextElementSibling;

    if (button.classList.contains("active")) {
      content.style.maxHeight = content.scrollHeight + "px";
    } else {
      content.style.maxHeight = null;
    }
  });
});

// Funkcja powrotu do strony głównej
function goHome() {
  // Pokaż z powrotem główny obrazek
  document.getElementById("main-image").style.display = "block";

  // Ukryj wszystkie sekcje
  document.querySelectorAll(".content-section").forEach(section => {
    section.classList.add("hidden");
  });

  // Zamknij wszystkie rozwinięte akordeony (dla porządku)
  document.querySelectorAll(".accordion-btn").forEach(btn => {
    btn.classList.remove("active");
    if (btn.nextElementSibling) {
      btn.nextElementSibling.style.maxHeight = null;
    }
  });
}
