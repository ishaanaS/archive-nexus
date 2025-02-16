document.addEventListener("DOMContentLoaded", function () {
    const aboutBtn = document.getElementById("about-btn");
    const modal = document.getElementById("about-modal");
    const closeBtn = document.querySelector(".close-btn");

    if (!aboutBtn || !modal || !closeBtn) {
        console.error("One or more elements are missing!");
        return;
    }

    // open pop up
    aboutBtn.addEventListener("click", function () {
        modal.style.display = "flex";
        setTimeout(() => modal.classList.add("show"), 10); // Ensures transition applies
    });

    // close pop up 
    function closeModal() {
        modal.classList.remove("show");
        setTimeout(() => modal.style.display = "none", 400); // Matches transition duration
    }

    closeBtn.addEventListener("click", closeModal);
    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            closeModal();
        }
    });
});
