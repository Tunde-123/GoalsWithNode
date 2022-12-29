const express = require('express')
const {getGoals,setGoals,updateGoals,deleteGoals,getGoalById} = require('../Controller/goalsController')
const router = express.Router();

router.route('/').get(getGoals).post(setGoals)
router.route('/:id').put(updateGoals).delete(deleteGoals).get(getGoalById)
//router.get('/',getGoals)

//router.post('/', setGoals)
module.exports = router;