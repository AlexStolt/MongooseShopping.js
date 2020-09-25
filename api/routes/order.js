const express = require('express');
const tshirt = require('../models/tshirts');
const router = express.Router();


router
	.get('/all', (req, res) => {
		tshirt.find({}, {'_id': 0, '__v': 0}, (err, items) => {
			res.status(200).json(items);
		});
	})
	.post('/', (req, res) => {
		tshirt.find({name: req.body.name}, {'_id': 0, '__v': 0}, (err, items) => {
			res.status(200).json(items);
		});
	});



module.exports = router;