"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const Subjects = await queryInterface.createTable("subjects", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      title: {
        type: Sequelize.STRING,
      },
      teacher_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      foculty_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      semester_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
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
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("subjects");
  },
};
