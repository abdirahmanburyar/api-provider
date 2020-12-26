const router = require("express").Router();
const {
  createFoculty,
  fetchFoculties,
} = require("../../controllers/foculties");
const { isAuthenticated } = require("../../adapters/authentications");
router.post("/create-foculty", isAuthenticated, createFoculty);
router.get("/", isAuthenticated, fetchFoculties);
module.exports = router;
