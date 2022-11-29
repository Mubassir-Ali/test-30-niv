const { pool } = require("../configs/db.config");

const getTestimonials = (req, res) => {
  pool.query("SELECT * FROM testimonials ORDER BY id ASC", (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results.rows);
  });
};


module.exports = {
  getTestimonials
};
