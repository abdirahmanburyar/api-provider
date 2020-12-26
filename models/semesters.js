"use strict";
module.exports = (sequelize, DataTypes) => {
  const Semesters = sequelize.define("semesters", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    year: {
      type: DataTypes.STRING,
    },
    subject_id: {
      type: DataTypes.INTEGER,
    },
    foculty_id: {
      type: DataTypes.INTEGER,
    },
    student_id: {
      type: DataTypes.INTEGER,
    },

    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  });
  Semesters.associate = (models) => {
    Semesters.hasMany(models.subjects, {
      foreignKey: "semester_id",
      sourceKey: "id",
    });
    Semesters.hasMany(models.students, {
      foreignKey: "semester_id",
      sourceKey: "id",
    });
    Semesters.belongsTo(models.foculties, {
      foreignKey: "foculty_id",
      targetKey: "id",
    });
    Semesters.hasMany(models.teachers, {
      foreignKey: "semester_id",
      sourceKey: "id",
    });
  };
  return Semesters;
};
