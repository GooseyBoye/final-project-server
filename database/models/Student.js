/*==================================================
/database/models/Student.js

It defines the student model for the database.
==================================================*/
const Sequelize = require('sequelize');  // Import Sequelize
const db = require('../db');  // Import Sequelize database instance called "db"

const Student = db.define("student", {
  firstname: {
    type: Sequelize.STRING,
    allowNull: false
  },

  lastname: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email:{
    type: Sequelize.STRING,
    defaultValue:'No Email Given',  //weird error without this
    allowNull: false,
  },
  imageURL: {
    type: Sequelize.STRING,
    allowNull: true,
    defaultValue: 'https://s3.amazonaws.com/37assets/svn/765-default-avatar.png'
  },
  gpa:{
    type: Sequelize.DECIMAL,
    allowNull: true,
  }
});

// Export the student model
module.exports = Student;