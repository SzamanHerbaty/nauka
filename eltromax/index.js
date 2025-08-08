const button = document.querySelector("#nav-button");

button.addEventListener("click", () => {
    const dropdownContent = document.querySelector("#dropdown-nav");
    dropdownContent.classList.toggle("active");
});

window.addEventListener("resize", () => {
    const dropdownContent = document.querySelector("#dropdown-nav");
    if (window.innerWidth > 920) {
        dropdownContent.classList.remove("active");
    }
});
