const { pool } = require("../configs/db.config");

const getPrograms = (req, res) => {
  pool.query("SELECT * FROM programs ORDER BY id ASC", (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results.rows);
  });
};


module.exports = {
  getPrograms
};
