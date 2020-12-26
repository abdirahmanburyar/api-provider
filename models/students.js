"use strict";
module.exports = (sequelize, DataTypes) => {
  const Students = sequelize.define("students", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    roll_no: DataTypes.STRING,
    foculty_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    semester_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    subject_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  });
  Students.associate = (models) => {
    Students.belongsTo(models.semesters, {
      foreignKey: "semester_id",
      targetKey: "id",
    });
    Students.belongsTo(models.foculties, {
      foreignKey: "foculty_id",
      targetKey: "id",
    });
    Students.belongsTo(models.subjects, {
      foreignKey: "subject_id",
      targetKey: "id",
    });
  };
  return Students;
};
