const db = require("../../models");

module.exports.createSubject = async (req, res, next) => {
  try {
    if (!req.body) return res.status(500).json({ error: "invalid data" });
    const isFound = await db.subjects.findOne({
      where: { title: req.body.title },
    });
    if (isFound) return res.status(400).json({ error: "Already Created" });
    const foculty = await db.subjects.build({
      title: req.body.title,
      foculty_id: req.body.foculty_id !== "" ? req.body.foculty_id : null,
      teacher_id: req.body.teacher_id !== "" ? req.body.teacher_id : null,
      semester_id: req.body.semester_id !== "" ? req.body.semester_id : null,
    });
    const newFoculty = await foculty.save();

    return res.status(200).json(newFoculty);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

module.exports.fetchSubjects = async (req, res, next) => {
  try {
    const foculty = await db.subjects.findAll({
      include: [
        { model: db.teachers },
        { model: db.foculties },
        { model: db.semesters },
      ],
    });
    return res.status(200).json(foculty);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};
