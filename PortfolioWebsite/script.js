const text = [
    "Software Engineer",
    "Web Developer",
    "App Developer"
];

const typingelement = document.querySelector(".typing");
let index = 0;

function typeWriterEffect() {
    const currentText = text[index];
    typingelement.style.animation = "none"; // Reset animation

    // Add a small delay to allow the animation to reset
    setTimeout(() => {
        typingelement.textContent = currentText; // Set the text
        typingelement.style.animation = `typing 4s steps(${currentText.length}) forwards, cursor 0.4s step-end infinite alternate`; // Apply animation
    });

    // Move to the next text after the animation is done
    setTimeout(() => {
        index = (index + 1) % text.length; // Cycle through the text array
        typeWriterEffect(); // Call the function recursively
    }, 4000); // Match the typing animation duration
}

// Start the typewriter effect
typeWriterEffect();



const navlink = document.querySelectorAll(".nav-links");
const sections = document.querySelectorAll("section");


window.addEventListener('scroll' , ()=>{
    let current = '';
    sections.forEach((section)=>{
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;


        if(window.scrollY >= sectionTop - sectionHeight / 3){
            current = section.getAttribute('id');
        }
    });
    navlink.forEach((nav)=>{
        nav.classList.remove('active');
        if(nav.getAttribute('href').includes(current)){
            nav.classList.add('active');
        }
    })
})



const progressbar = document.querySelectorAll(".progress-bar");
const educontainer = document.querySelectorAll(".container");
const expcontainer = document.querySelectorAll(".exp-container");
// const exptimeline = document.querySelector(".exp-timeline");

const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });

},{threshold: 0.5});

progressbar.forEach((bar)=> {observer.observe(bar)
});

educontainer.forEach((e)=>observer.observe(e));

expcontainer.forEach((e)=>observer.observe(e));