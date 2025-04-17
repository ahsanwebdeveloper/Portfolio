document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.getElementById("menu-icon");
    const nav = document.querySelector("nav");

    menuIcon.addEventListener("click", function () {
        nav.style.display = nav.style.display === "flex" ? "none" : "flex";
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const aboutMe = document.querySelector(".about-me");
    const buttons = document.querySelectorAll(".btn1");

    const content = {
        "Experience": `<h3 class="section-title">My Experience</h3>
                        <p class="section-desc">I have hands-on experience in front-end web development and SEO, helping clients enhance their online presence and grow their digital reach.</p>
                        <div class="experience-container">
                            <div class="exp-box">
                                <h4>Frontend Developer</h4>
                                <p><strong>FREELANCEING</strong> - 2024-Present</p>
                                <p>I have experience in frontend technology</p>
                            </div>
                            <div class="exp-box">
                                <h4>Backend Developer</h4>
                                <p><strong>you tube</strong> 2025</p>
                                <p>I learn backend development from you tube.</p>
                            </div>
                            <div class="exp-box">
                                <h4>SEO Expert</h4>
                                <p><strong>AT INNOVASTA LEARN EASY</strong> -2025</p>
                                <p>I am certifiate SEO expert.</p>
                            </div>
                        </div>` ,
        "Education": `<h3 class="section-title">My Education</h3>
                      <p class="section-desc">I am currently pursuing my education while actively building practical experience in web development and SEO.</p>
                      <div class="education-container">
                          <div class="edu-box">
                              <h4>Bacholer in Computer Science</h4>
                              <p>2023 to 2027 continous</p>
                          </div>
                          <div class="edu-box">
                              <h4>Web Development</h4>
                              <p>Idoversity 2024</p>
                          </div>
                          <div class="edu-box">
                              <h4>SEO Course</h4>
                              <p>AT INNOVASTA LEARN EASY</p>
                          </div>
                      </div>` ,
        "Skill": `<h3 class="section-title">My Skills</h3>
                  <p class="section-desc"> build fast, beautiful, and friendly websites! 🌟 As a Frontend Developer and SEO expert, I love creating web experiences that not only look great but also reach the right audience. Let’s make something amazing together! 😊

.</p>
                  <div class="skills-container">
                      <img src="asset/html.jpg" alt="HTML" class="skill-logo">
                      <img src="asset/css.jpg" alt="CSS" class="skill-logo">
                      <img src="asset/js.jpg" alt="JavaScript" class="skill-logo">
                      <img src="asset/react.png" alt="React" class="skill-logo">
                      <img src="asset/tailwind css.png" alt="Tailwind CSS" class="skill-logo">
                      <img src="asset/node.png" alt="Node.js" class="skill-logo">
                      <img src="asset/mongodb.jpg" alt="MongoDB" class="skill-logo">
                  </div>` ,
        "About": `<h3 class="section-title">About Me</h3>
                  <p>Hi, I'm Ahsan Ali a passionate Frontend Web Developer and certified SEO Expert dedicated to building modern, responsive, and user-friendly websites that don't just look great, but also rank high on search engines.

With a strong eye for design and deep knowledge of SEO strategies, I specialize in creating websites that deliver both visual appeal and measurable results. Whether you're a small business, a startup, or an individual, I’m here to turn your digital ideas into fast, accessible, and optimized web experiences.

🚀 My Core Skills:
HTML5, CSS3, JavaScript (Vanilla, React, etc.)

Responsive Web Design & Cross-Browser Compatibility

SEO Optimization (On-Page, Technical SEO, Keyword Strategy)

Website Speed & Performance Enhancement

UI/UX Best Practices

Website Audits & SEO Reporting

I love what I do, and I’m always up for new challenges. Let’s build something awesome together! 🌐✨.</p>`
    };

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            const text = this.innerText;
            aboutMe.innerHTML = content[text] || "<h5>Not Found</h5>";
        });

    });

});
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        alert("Your message has been sent successfully!");
        form.reset();
    });
});
//cv download
document.querySelector('.btn').addEventListener('click', function(e) {
    e.preventDefault(); // Prevent default link behavior
    const link = document.createElement('a');
    link.href = 'asset/Ahsan cv (1).pdf';
    link.download = 'Ahsan-CV.pdf'; // You can rename the file here
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});
// string code
const profession = document.getElementById('profession');

const skills = [
    " Frontend Developer",
    " Shopify Developer",
    " UI/UX Designer",
    " Web Designer",
    " SEO Expert",
];

let skillIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const currentSkill = skills[skillIndex];
    const staticText = `<span class="white-text">I'm a </span>`;
    const dynamicText = `<span class="red-text">${currentSkill.substring(0, charIndex)}</span>`;

    profession.innerHTML = staticText + dynamicText;

    // Speed control
    let typingSpeed = isDeleting ? 50 : 100;

    if (!isDeleting && charIndex === currentSkill.length) {
        typingSpeed = 1500; // Pause at full text
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        skillIndex = (skillIndex + 1) % skills.length;
        typingSpeed = 500; // Pause before next word
    }

    charIndex = isDeleting ? charIndex - 1 : charIndex + 1;

    setTimeout(typeEffect, typingSpeed);
}

// Start typing effect
typeEffect();
 //service section animation code
 // Create an intersection observer
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate'); // Add 'animate' class to trigger animation
            observer.unobserve(entry.target); // Stop observing once the element is in view
        }
    });
}, {
    threshold: 0.5 // Trigger when 50% of the element is visible in the viewport
});

// Observe all service boxes
const serviceBoxes = document.querySelectorAll('.service-box');
serviceBoxes.forEach(box => {
    observer.observe(box);
});


