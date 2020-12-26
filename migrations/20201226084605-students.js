"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const Students = await queryInterface.createTable("students", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
      },
      roll_no: Sequelize.STRING,
      foculty_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      semester_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      subject_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
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
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("students");
  },
};
