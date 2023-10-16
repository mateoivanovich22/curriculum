import MessageManager from "../services/messagesManager.js";
import InterviewsManager from "../services/interviewsManager.js";
const messageManager = new MessageManager();
const interviewsManager = new InterviewsManager();
import config from "../config/config.js";

import nodemailer from "nodemailer";
const nodemailerKey = config.nodemailer.key;

export const ShowHome = (req, res) => {
  res.render("home");
};

export const showAboutMe = (req, res) => {
  res.render("aboutMe");
};

export const showContact = (req, res) => {
  res.render("contact");
};

export const showAptitudes = (req, res) => {
  res.render("aptitudes");
};

export const showProjects = (req, res) => {
  res.render("projects");
};

export const sendMessage = async (req, res) => {
  const email = req.body.email;
  const message = req.body.message;

  const messageCreated = await messageManager.createMessage(email, message);
    
    let messageRes = "Mensaje enviado";  

  if (messageCreated) {
    const html = `<h1>Message: ${message}</h1>`;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "mateoivanovichichi@gmail.com",
        pass: nodemailerKey,
      },
    });

    const mailOptions = {
      from: email,
      to: "mateoivanovich43@gmail.com",
      subject: "Consulta en mi cv web",
      html: html,
    };

    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.log("Error al enviar el correo:", err);
        return;
      }

      console.log(`Mensaje enviado con éxito de ${email}`);
    });
  } else {
    console.log("Error creating message");
    messageRes = "Error creating message";
  }

  res.send({ message: messageRes });
};

export const sendInterview = async (req, res) => {
  const email = req.body.email;
  const date = req.body.date;

  const interviewCreated = await interviewsManager.createInterview(email, date);
  let message = "Interview enviado";
  
  if (interviewCreated) {
    console.log("Mensaje send correctly");
    const html = `<h1>Interview organizated: ${date}</h1>`;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "mateoivanovichichi@gmail.com",
        pass: nodemailerKey,
      },
    });

    const mailOptions = {
      from: email,
      to: "mateoivanovich43@gmail.com",
      subject: "Interview en mi cv web",
      html: html,
    };

    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.log("Error al enviar el correo:", err);
        return;
      }

      console.log(`Mensaje enviado con éxito de ${email}`);
    });

  } else {
    console.log("Error creating message");
    message = "Error creating Interview";
  }

  res.send({ message: message });
};
