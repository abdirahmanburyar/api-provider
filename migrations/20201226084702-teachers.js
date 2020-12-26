"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const Teachers = await queryInterface.createTable("teachers", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
      },
      foculty_id: Sequelize.INTEGER,
      semester_id: Sequelize.INTEGER,
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
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
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("teachers");
  },
};
