const database = require('./database');

const dataMapper = {

  getAllCoffee: async function () {
    const query = {
      text: `SELECT * FROM "cafes"`
    };
    const results = await database.query(query);
    return results.rows;
  }};

  module.exports = dataMapper;