"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const Foculties = await queryInterface.createTable("foculties", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        // allowNull: true,
        primaryKey: true,
      },
      title: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
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
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("foculties");
  },
};
