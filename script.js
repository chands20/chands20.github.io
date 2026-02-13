const numbers = document.querySelectorAll(".number");

window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    const section = document.querySelector(".number-section");
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;

    const progress = (scrollY - sectionTop) / sectionHeight;

    numbers.forEach((number, index) => {
        const start = index * 0.2;
        const end = start + 0.2;

        if (progress >= start && progress < end) {
            const localProgress = (progress - start) / 0.2;

            if (localProgress < 0.3) {
                // Slide in
                number.style.transform =
                    `translateX(${(-150 + localProgress * 500)}%)`;
            } else if (localProgress < 0.7) {
                // Stay centered
                number.style.transform = "translateX(0%)";
            } else {
                // Slide out
                number.style.transform =
                    `translateX(${(localProgress - 0.7) * 500}%)`;
            }
        } else {
            number.style.transform = "translateX(-150%)";
        }
    });
});
