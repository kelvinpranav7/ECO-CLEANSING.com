// ---------- GLOBAL ROLE ----------
const role = localStorage.getItem("userRole");
// ---------- PROTECT DASHBOARD ----------
if (
  window.location.pathname.includes("dashboard") &&
  !role
) {
  alert("Session expired. Please login again.");
  window.location.href = "login.html";
}


  document.addEventListener("DOMContentLoaded", () => {

  // login logic
  // navigation logic
  // logout logic


// ---------- ROLE BASED MENU ----------


const hotelItems = document.querySelectorAll(".role-hotel");
const ngoItems = document.querySelectorAll(".role-ngo");
const adminItems = document.querySelectorAll(".role-admin");

function hide(elements) {
  elements.forEach(el => el.style.display = "none");
}

if (role === "hotel") {
  hide(ngoItems);
  hide(adminItems);
}

if (role === "ngo") {
  hide(hotelItems);
  hide(adminItems);
}

if (role === "admin") {
  hide(hotelItems);
  hide(ngoItems);
}

// show role text
const roleText = document.getElementById("roleText");
if (roleText && role) {
  roleText.textContent = role.toUpperCase();
}
});


  /* ---------- LOGIN PAGE ---------- */
  const loginForm = document.getElementById("loginForm");

if (loginForm) {
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const role = document.getElementById("role").value;
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    if (!role || !email || !password) {
      alert("Please fill all fields");
      return;
    }

    // Store role (temporary – frontend only)
    localStorage.setItem("userRole", role);

    alert("Login successful! Redirecting...");

    window.location.href = "dashboard.html";
  });
}

  /* ---------- DASHBOARD NAVIGATION ---------- */
  const menuItems = document.querySelectorAll(".sidebar ul li[data-page]");
  const pages = document.querySelectorAll(".page");
  const title = document.getElementById("pageTitle");

  if (menuItems.length > 0) {
    menuItems.forEach(item => {
      item.addEventListener("click", () => {

        menuItems.forEach(i => i.classList.remove("active"));
        pages.forEach(p => p.classList.remove("active-page"));

        item.classList.add("active");
        const pageId = item.getAttribute("data-page");
        const targetPage = document.getElementById(pageId);

        if (targetPage) {
          targetPage.classList.add("active-page");
          title.textContent = item.textContent;
        }
      });
    });
  }

  /* ---------- LOGOUT ---------- */
 logoutBtn.addEventListener("click", () => {
  localStorage.clear();
  alert("Logged out successfully");
  window.location.href = "login.html";
});


;
const roleText = document.getElementById("roleText");
if (roleText) {
  roleText.textContent = role.toUpperCase();
}
