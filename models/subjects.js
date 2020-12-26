"use strict";
module.exports = (sequelize, DataTypes) => {
  const Subjects = sequelize.define("subjects", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
    },
    teacher_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    foculty_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    semester_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  });
  Subjects.associate = (models) => {
    Subjects.belongsTo(models.teachers, {
      foreignKey: "teacher_id",
      sourceKey: "id",
    });
    Subjects.belongsTo(models.foculties, {
      foreignKey: "foculty_id",
      targetKey: "id",
    });
    Subjects.belongsTo(models.semesters, {
      foreignKey: "semester_id",
      targetKey: "id",
    });
    Subjects.hasMany(models.students, {
      foreignKey: "subject_id",
      sourceKey: "id",
    });
  };
  return Subjects;
};
