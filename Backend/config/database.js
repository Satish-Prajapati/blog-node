// Database connection configration for Sequelize ORM
const Sequelize = require("sequelize");

// This configration is for Postgresql while using other DB change 'dialect'
// DB name: "blogdb", Username :"satish", Password:"1234"
module.exports = new Sequelize("blogdb", "satish", "1234", {
	host: "localhost",
	dialect: "postgres",

	pool: {
		max: 5,
		min: 0,
		idle: 10000
	}
});
