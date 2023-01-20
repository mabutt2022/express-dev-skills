var express = require('express');
var router = express.Router();
var skillCtrl = require('../Controller/skills');

/* GET home page. */
router.get('/allskills', skillCtrl.allSkills);
router.get('/addskills', skillCtrl.addSkills);
router.post('/addskills', skillCtrl.create);
router.delete('/skills/:id', skillCtrl.deleteSkill)

module.exports = router;
