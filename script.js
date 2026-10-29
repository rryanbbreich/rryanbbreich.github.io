// Typewriter effect for the hero role line.
// Cycles through the roles below: types one out, pauses, deletes it, moves to the next.

const roles = [
    "Robotics Engineer",
    "Embedded Systems Developer",
    "Machine Vision Builder",
];

const typed = document.getElementById("typed");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (typed && !reduceMotion) {
    let roleIndex = 0;
    let charIndex = 0;
    let deleting = false;

    function tick() {
        const current = roles[roleIndex];

        if (deleting) {
            charIndex--;
        } else {
            charIndex++;
        }

        typed.textContent = current.slice(0, charIndex);

        let delay = deleting ? 40 : 90;

        if (!deleting && charIndex === current.length) {
            delay = 1800;          // pause on the full word
            deleting = true;
        } else if (deleting && charIndex === 0) {
            deleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            delay = 400;           // short pause before typing the next role
        }

        setTimeout(tick, delay);
    }

    typed.textContent = "";
    tick();
}