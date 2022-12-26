const express = require('express')
const {getGoals,setGoals,updateGoals,deleteGoals} = require('../Controller/goalsController')
const router = express.Router();

router.route('/').get(getGoals).post(setGoals)
router.route('/:id').put(updateGoals).delete(deleteGoals)
//router.get('/',getGoals)

//router.post('/', setGoals)
module.exports = router;