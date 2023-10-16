gsap.from(".containerAboutMe", { opacity: 0 , duration: 0.2})
gsap
  .timeline()
  .from(".containerMessage", { opacity: 0 , duration: 0.2})
  .from(".titlePrincipalContact", { opacity: 0 , duration: 0.2})
  .from(".contactPage", { opacity: 0 , duration: 0.2 })
  .from(".interview", { y: 190,opacity: 0 , duration: 0.4 })
  .from(".redes", { x: 190,opacity: 0 , duration: 0.5 })

const object = {
    enableTime:true,
    dateFormat: "Y-m-d H:i",
    altInput: true,
    altFormat: "F j, Y (h:S K)",
}   

const buttonBack = document.querySelector(".buttonBack")

buttonBack.addEventListener("click", () => {
  window.location.href = "/";
})

flatpickr("input[type=datetime-local]", object);

const datetimeInput = document.getElementById('datetimeInput');
const submitButton = document.getElementById('submitButton');

datetimeInput.addEventListener('change', function () {
  if (datetimeInput.value) {
    submitButton.style.display = 'flex';
  } else {
    submitButton.style.display = 'none';
  }
});

const spinner = document.querySelector(".spinner")

const toasty = document.querySelector(".success")

const toastyClose = document.querySelector(".success__close");

const form = document.getElementById('myForm');

const successInterview = document.querySelector(".successInterview")

const succes_closed = document.querySelector("#succes_closed");

succes_closed.addEventListener("click", () => {
  successInterview.style.display = "none";
})

toastyClose.addEventListener("click", () => {
    toasty.style.display = "none"
    
})

form.addEventListener('submit', function (e) {
    e.preventDefault();
    
    const spinner = document.querySelector(".spinner")
    const submitButton = document.querySelector(".buttonMessage")
    
    spinner.style.display = 'inline-block';
    submitButton.disabled = true; 
    const emailInput = document.querySelector('.input').value;
    const messageTextarea = document.querySelector('textarea').value;
    const data = {
        email: emailInput,
        message: messageTextarea
    }

    let dateResponse = ""

    setTimeout(async function () {

      spinner.style.display = 'none';
      submitButton.disabled = false; 
      form.reset()

      await fetch('/contact/message' , {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
            'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {
            dateResponse = data.message
        })
        .catch(error => {
          console.error(error);
        });

        if(dateResponse === "Mensaje enviado"){
            toasty.style.display = "flex";
        }

    }, 2000); 

});


const buttonInterview = document.querySelector(".cta")

const formInterview = document.querySelector(".formInterview")

formInterview.addEventListener('submit', function (e) {
  e.preventDefault();
  
  const spinner = document.querySelector(".loader")
  const submitButton = document.querySelector("#submitButton")
  
  spinner.style.display = 'flex';
  submitButton.disabled = true; 
  const emailInput = document.querySelector("#emailInterview").value;
  const date = document.querySelector('#datetimeInput').value;
  const data = {
    email: emailInput,
    date: date
  }

  let dateResponse = ""

  setTimeout(async function () {

    spinner.style.display = 'none';
    submitButton.disabled = false; 
    formInterview.reset()
    submitButton.style.display = 'none';

    await fetch('/contact/interview' , {
          method: 'POST',
          body: JSON.stringify(data),
          headers: {
          'Content-Type': 'application/json'
          }
      })
      .then(response => response.json())
      .then(data => {
          dateResponse = data.message
      })
      .catch(error => {
        console.error(error);
      });

      if(dateResponse === "Interview enviado"){
          successInterview.style.display = "flex";
      }

  }, 2000); 

});