
document.addEventListener("DOMContentLoaded", () => {

  // Render portfolio projects
  const grid = document.getElementById("project-grid");

  if (grid && typeof projects !== "undefined" && Array.isArray(projects)) {

    grid.innerHTML = "";

    projects.forEach((p) => {
      const card = document.createElement("article");
      card.className = "project-card reveal";

      card.innerHTML = `
        ${p.image ? `
          <div class="project-image">
            <img src="${p.image}" alt="${p.title}" loading="lazy">
          </div>
        ` : ""}

        <span class="tag">${p.category}</span>

        <h3>${p.title}</h3>

        <p>${p.description}</p>

        <ul>
          ${(p.highlights || []).map(x => `<li>${x}</li>`).join("")}
        </ul>

        <p><strong>Tools:</strong> ${p.tools}</p>

        <div class="project-links">
         
<a href="${p.demo && p.demo !== "#" ? p.demo : "#"}">
  View Project ↗
</a>


          <a href="${p.demo || "#"}"
             ${p.demo && p.demo !== "#" ? 'target="_blank" rel="noopener"' : ""}>
            View Project ↗
          </a>
        </div>
      `;

      grid.appendChild(card);
    });
  }

  // Update footer year
  const year = document.getElementById("year");

  if (year) {
    year.textContent = new Date().getFullYear();
  }

  // Mobile navigation
  const menu = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav-links");

  if (menu && nav) {
    menu.addEventListener("click", () => {
      nav.classList.toggle("open");
      menu.setAttribute("aria-expanded", nav.classList.contains("open"));
    });

    document.querySelectorAll(".nav-links a").forEach(a => {
      a.addEventListener("click", () => nav.classList.remove("open"));
    });
  }

  // Reveal sections on scroll
  const revealElements = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, { threshold: 0.12 });

    revealElements.forEach(el => observer.observe(el));
  } else {
    revealElements.forEach(el => el.classList.add("visible"));
  }

});
