const express = require('express');
const tshirt = require('../models/tshirts');
const router = express.Router();


router.post('/', (req, res) => {
		//Nothing to ADD
		if(!req.body.name){ 
			res.json({success:false});
			return;
		}
		//Search On Database For Product
		tshirt.find({'name':req.body.name}, (err, items) => { //Async Function
			if(items.length > 0){
				res.json({success:false});
			}
			else {
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
	