const Foculty = require("../../models").Foculties;
const db = require("../../models");

module.exports.createFoculty = async (req, res, next) => {
  try {
    console.log(req.body);
    if (!req.body) return res.status(500).json({ error: "invalid data" });
    const isFound = await db.foculties.findOne({
      where: { title: req.body.title },
    });
    if (isFound) return res.status(400).json({ error: "Already Created" });
    const foculty = await db.foculties.build({
      title: req.body.title,
    });
    const newFoculty = await foculty.save();

    return res.status(200).json(newFoculty);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

module.exports.fetchFoculties = async (req, res, next) => {
  try {
    const foculty = await db.foculties.findAll({
      include: [
        { model: db.students },
        { model: db.subjects },
        { model: db.semesters },
        { model: db.teachers },
      ],
    });
    return res.status(200).json(foculty);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};
