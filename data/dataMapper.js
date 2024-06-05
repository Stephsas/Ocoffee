const database = require("./database");

const dataMapper = {
  async getAllCoffee () {
    const query = {
      text: `SELECT * FROM "cafes"`,
    };
    const results = await database.query(query);
    return results.rows;
  },

  async get3Coffee () {
    const query = {
      text: 'SELECT * FROM cafes LIMIT 3',
    };
    const results = await database.query(query);
    return results.rows;
  },

  async getArticle (coffeeId) {
    const query = {
      text: `SELECT * FROM cafes WHERE id=$1`,
      values: [coffeeId]
    };
    const results = await database.query(query);
    return results.rows[0];
  },
};

module.exports = dataMapper;
