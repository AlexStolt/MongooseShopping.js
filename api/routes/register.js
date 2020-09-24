const express = require('express');
const tshirt = require('../models/tshirts');
const router = express.Router();


router
	.get('/', (req, res) => {

	})
	.post('/', (req, res) => {
		if(!req.body.name){ //Nothing to ADD
			res.json({success:false});
			return;
		}
		//Search On Database For Product
		tshirt.find({'name':req.body.name}, (err, items) => {
			if(items.length > 0){
				res.json({success:false});
			} else {
				//Add On Database
				const tshirtDocument = new tshirt({
					name: req.body.name, 
					description: req.body.description
				});

				tshirtDocument.save((err) => {
					if(err)
						return handleError(err);
					res.json({success:true});
				});
			}
		});
	});

module.exports = router;
	