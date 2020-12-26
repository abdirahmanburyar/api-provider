"use strict";
module.exports = (sequelize, DataTypes) => {
  const Foculties = sequelize.define("foculties", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      // allowNull: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  });
  Foculties.associate = (models) => {
    Foculties.hasMany(models.teachers, {
      foreignKey: "foculty_id",
      sourceKey: "id",
    });
    Foculties.hasMany(models.students, {
      foreignKey: "foculty_id",
      sourceKey: "id",
    });
    Foculties.hasMany(models.semesters, {
      foreignKey: "foculty_id",
      sourceKey: "id",
    });
    Foculties.hasMany(models.subjects, {
      foreignKey: "foculty_id",
      sourceKey: "id",
    });
  };
  return Foculties;
};
