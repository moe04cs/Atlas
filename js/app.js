// ==================== THEME MANAGEMENT ====================
function initTheme() {
  const savedTheme = localStorage.getItem("slang_atlas_theme") || "light";
  document.documentElement.setAttribute("data-theme", savedTheme);
  updateThemeButtonText(savedTheme);

  const themeBtn = document.getElementById("themeToggleBtn");
  if (themeBtn) {
    themeBtn.addEventListener("click", () => {
      const currentTheme = document.documentElement.getAttribute("data-theme");
      const newTheme = currentTheme === "dark" ? "light" : "dark";
      
      document.documentElement.setAttribute("data-theme", newTheme);
      localStorage.setItem("slang_atlas_theme", newTheme);
      updateThemeButtonText(newTheme);
    });
  }
}

function updateThemeButtonText(theme) {
  const themeBtn = document.getElementById("themeToggleBtn");
  if (themeBtn) {
    themeBtn.textContent = theme === "dark" ? "الوضع الفاتح" : "الوضع الداكن";
  }
}

// ==================== CARDS RENDERING ====================
function renderCards(terms) {
  const grid = document.getElementById("termsGrid");
  if (!grid) return;

  grid.innerHTML = "";

  if (terms.length === 0) {
    grid.innerHTML = `<p style="grid-column: 1 / -1; text-align: center; color: var(--text-muted); padding: 40px;">لا توجد مصطلحات مطابقة للبحث.</p>`;
    return;
  }

  terms.forEach(item => {
    const region = getRegionById(item.region_id);
    const locationText = region ? `${region.city}، ${region.country}` : "غير محدد";

    const card = document.createElement("article");
    card.className = "slang-card";
    card.innerHTML = `
      <div class="card-top">
        <h3 class="card-term">${item.term}</h3>
        <span class="badge badge-tone">${item.tone}</span>
      </div>
      <p class="card-meaning">${item.meaning}</p>
      <blockquote class="card-example">"${item.example}"</blockquote>
      <div class="card-footer">
        <span class="card-location">[ ${locationText} ]</span>
      </div>
    `;
    grid.appendChild(card);
  });
}

// ==================== APP INITIALIZATION ====================
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  
  if (typeof getApprovedTerms === "function") {
    const allTerms = getApprovedTerms();
    renderCards(allTerms);
  }
});