"use strict";
module.exports = (sequelize, DataTypes) => {
  const Teachers = sequelize.define("teachers", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    foculty_id: DataTypes.INTEGER,
    semester_id: DataTypes.INTEGER,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  });
  Teachers.associate = (models) => {
    Teachers.belongsTo(models.foculties, {
      foreignKey: "foculty_id",
      targetKey: "id",
    });
    Teachers.belongsTo(models.semesters, {
      foreignKey: "semester_id",
      targetKey: "id",
    });
    Teachers.hasMany(models.subjects, {
      foreignKey: "teacher_id",
      sourceKey: "id",
    });
  };
  return Teachers;
};
