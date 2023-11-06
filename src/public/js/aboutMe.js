
gsap.from(".containerAboutMe", { opacity: 0 , duration: 0.2})

document.addEventListener('DOMContentLoaded', function () {
  setTimeout(function () {
    const delayedContent = document.querySelector('.delayed-content');
    delayedContent.style.display = 'flex';
  }, 500); // Mostrar después de 0.5 segundos (500 milisegundos)
});

gsap
  .timeline()
  .from(".card", { opacity: 2, duration: 0.1  })
  .from(".studies", { opacity: 0, scale: 0, y: 160, ease: "back" })
  .from(".aptitudes", {y: 190,stagger: 0.1, duration: 0.3, ease: "back"})
  .from(".imgAndTitle", {y: 390,x: 900,stagger: 0.1,duration: 0.1,ease: "back"})
  .from(".textAboutMe", {y: 390,x: 900,stagger: 0.1,duration: 0.1,ease: "back"})
  .from("a", {opacity: 0, scale: 0,y: 390,x: 900, stagger: 0.1, duration: 0.1, ease: "back"})
  .from(".button",{opacity: 0, scale: 0,y: 390,x: 900, stagger: 0.1, duration: 0.1, ease: "back"})

const buttonBack = document.querySelector(".buttonBack")

buttonBack.addEventListener("click", () => {
  window.location.href = "/";
})

const button = document.querySelector(".button")

button.addEventListener("click", () => {
  const filePath = '/img/Profile-linkedin.pdf';

  const link = document.createElement('a');
  link.href = filePath;
  link.target = '_blank'; 
  link.download = 'Profile-linkedin.pdf'; 

  link.click();
})