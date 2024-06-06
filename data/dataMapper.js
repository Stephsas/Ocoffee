const database = require("./database");

const dataMapper = {

    async get3Coffee () {
        const query = {
          text: 'SELECT * FROM cafes ORDER BY id DESC LIMIT 3',
        };
        const results = await database.query(query);
        return results.rows;
      },


  async getAllCoffee () {
    const query = {
      text: `SELECT * FROM "cafes"`,
    };
    const results = await database.query(query);
    return results.rows;
  },

 

  async getArticle (id) {
    const query = {
      text: `SELECT * FROM cafes WHERE id=$1`,
      values: [id]
    };
    const results = await database.query(query);
    return results.rows[0];
  },
};

module.exports = dataMapper;
