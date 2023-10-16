gsap.from(".containerAboutMe", {opacity: 0})
gsap.from(".titleProject", { opacity: 0, scale: 0 ,ease: "back",duration: 0.6  })
gsap.from(".rounded-lg img", { opacity: 0, scale: 0, x: 150 ,ease: "linear",duration: 0.3  })
gsap.from(".project-title", { opacity: 0, scale: 0, x: 150 ,ease: "linear",duration: 0.3  })
// gsap.from(".project-hover", { opacity: 0, scale: 0, x: 150 ,ease: "linear",duration: 0.3  })
gsap.from(".types", { opacity: 0, scale: 0, x: 150 ,ease: "linear",duration: 0.3  })



const buttonBack = document.querySelector(".buttonBack")


buttonBack.addEventListener("click", () => {
  window.location.href = "/";
})