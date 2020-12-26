"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const Semesters = await queryInterface.createTable("semesters", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      year: {
        type: Sequelize.STRING,
      },
      subject_id: {
        type: Sequelize.INTEGER,
      },
      foculty_id: {
        type: Sequelize.INTEGER,
      },
      student_id: {
        type: Sequelize.INTEGER,
      },

      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
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
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("semesters");
  },
};
