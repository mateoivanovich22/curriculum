const navButtonAboutMe = document.querySelector(".aboutMe");
const navButtonProjects = document.querySelector(".projects");
const navButtonContact = document.querySelector(".contact");
const aboutMeSvg = document.querySelector(".aboutMeSvg");
const projectsSvg = document.querySelector(".projectsSvg");
const contactSvg = document.querySelector(".contactSvg");

gsap.to(".circular-image", { rotation: 360 });

const objectHover = {
  scale: 1.1,
  paused: true,
  duration: 0.1,
};

const scaleOnHoverImg = gsap.to(".circular-image", objectHover);
const scaleOnHoverAboutMe = gsap.to(".aboutMe", objectHover);
const scaleOnHoverContact = gsap.to(".contact", objectHover);
const scaleOnHoverProjects = gsap.to(".projects", objectHover);

document.querySelector(".circular-image").addEventListener("mouseover", () => {
    scaleOnHoverImg.play();
});

document.querySelector(".circular-image").addEventListener("mouseout", () => {
    scaleOnHoverImg.reverse();
});

gsap
  .timeline()
  .from(".containerHome", { opacity: 0 })
  .from(".name", { opacity: 0, scale: 0, ease: "back" })
  .from(".navegation button", {
    y: 160,
    stagger: 0.1,
    duration: 0.4,
    ease: "back",
  });

navButtonAboutMe.addEventListener("click", () => {
  window.location.href = "/aboutMe";
});

navButtonAboutMe.addEventListener("mouseover", () => {
    scaleOnHoverAboutMe.play();
    aboutMeSvg.style.display = "flex";
});

navButtonAboutMe.addEventListener("mouseout", () => {
    scaleOnHoverAboutMe.reverse();
    aboutMeSvg.style.display = "none";
});

navButtonProjects.addEventListener("click", () => {
  window.location.href = "/projects";
});

navButtonProjects.addEventListener("mouseover", () => {
    scaleOnHoverProjects.play();
    projectsSvg.style.display = "flex";
});

navButtonProjects.addEventListener("mouseout", () => {
    scaleOnHoverProjects.reverse();
    projectsSvg.style.display = "none";
});

navButtonContact.addEventListener("click", () => {
  window.location.href = "/contact";
});

navButtonContact.addEventListener("mouseover", () => {
    scaleOnHoverContact.play();
    contactSvg.style.display = "flex";
});

navButtonContact.addEventListener("mouseout", () => {
    scaleOnHoverContact.reverse();
    contactSvg.style.display = "none";
});
