import express from "express";

import { ShowHome, showAboutMe, showProjects, showContact, sendMessage, sendInterview } from "../controllers/home.controller.js";

const router = express.Router();

router.get("/", ShowHome);

router.get("/aboutMe", showAboutMe);

router.get("/contact", showContact);

router.get("/projects", showProjects);

router.post("/contact/message", sendMessage);

router.post("/contact/interview", sendInterview)

export default router;