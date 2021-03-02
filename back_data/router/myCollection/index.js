const express = require('express')
const router = express.Router()
const path = require('path')

const connection = require('../../mySQL/index.js')

router.get('/myCollection', function (req, res, next) {
	const sql = `SELECT * FROM user.music_library`
	
	connection.query(sql, function (err, rows, fields) {
		if (err) throw err
		if(rows.length > 0){
			const data = {
				code: 200,
				data: rows,
				msg: 'success'
			}

			res.json(data)
		}
	})
})

module.exports = router