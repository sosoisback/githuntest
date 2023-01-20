const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link')

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})

/**** typing ***/
        const text = document.querySelector(".sec-text");

        const textLoad = () => {
            setTimeout(() => {
                text.textContent = "Data Scientist";
            }, 5000);
            setTimeout(() => {
                text.textContent = "Software Developer";
            }, 10000);
            setTimeout(() => {
                text.textContent = "Photographer";
            }, 15000);
            setTimeout(() => {
                text.textContent = "Risk Analyst";
            }, 20000);
            setTimeout(() => {
                text.textContent = "Web Developer";
            }, 25000); //1s = 1000 milliseconds
        }

        textLoad();
        setInterval(textLoad, 25000);

