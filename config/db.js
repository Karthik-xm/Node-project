db.sequelize = sequelize ;
  
const Employee = require('./models/employee');

const Company = require('./models/company');

db.Employee = Employee;

db.Company = Company;