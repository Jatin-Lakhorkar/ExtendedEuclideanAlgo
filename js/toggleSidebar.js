const sidebar = document.querySelector(".sidebar");
const myModal = new bootstrap.Modal(document.getElementById("popupMenu"));
const breakpointLg = 992;

function toggle() {
  const w = $(this).width();
  if (w < breakpointLg) {
    myModal.toggle();
  } else {
    if (sidebar.classList.contains("hidden")) {
      sidebar.classList.remove("hidden");
    } else {
      sidebar.classList.add("hidden");
    }
  }
}

function simulationHeaderToggle() {
  const dropdown = document.querySelector(
    ".simulation-header .dropdown .backdrop"
  );
  if (dropdown.classList.contains("hidden")) {
    dropdown.classList.remove("hidden");
  } else {
    dropdown.classList.add("hidden");
  }
}

if (document.querySelector(".simulation-header")) {
  window.addEventListener("click", ({ target }) => {
    if (!(target.closest(".navbar-toggler") || target.closest(".nav-menu"))) {
      document
        .querySelector(".simulation-header .dropdown .backdrop")
        .classList.add("hidden");
    }
  });
}
