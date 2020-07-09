const Pool = require('pg').Pool

const pool = new Pool({
  user: '',
  host: 'localhost',
  database: 'CSVtoJSON',
  password: '',
  port: 5432,
})

const getArtWorks = (request, response) => {

  let page = request.query.page || 1;
  let limit = request.query.limit || 25;

  pool.query(`SELECT * FROM artworks ORDER BY id ASC limit ${limit} offset ${limit * (page - 1)}`, (error, results) => {
    if (error) {
      throw error
    }

    response.status(200).json(results.rows)
    
  })
}

module.exports = {
 getArtWorks,
}