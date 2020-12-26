const router = require("express").Router();
const { createSubject, fetchSubjects } = require("../../controllers/subjects");
const { isAuthenticated } = require("../../adapters/authentications");
router.post("/create-subject", isAuthenticated, createSubject);
router.get("/", isAuthenticated, fetchSubjects);
module.exports = router;
