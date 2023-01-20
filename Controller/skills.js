const skillModel = require('../model/skill');


function allSkills(req, res, next) {
    res.render('skills/allSkills', {skill: skillModel.getAll()})
}

function addSkills(req, res, next) {
    res.render('skills/addSkills', {title: "hellow world"});
}

function create(req, res, next){
    skillModel.create(req.body.skill);
    res.redirect('/');
    }

function deleteSkill(req, res, next) {
    // console.log(req.params.id); // Id can only be found using the params command
    skillModel.deleteOne(req.params.id);
    
    res.redirect('/allskills')
}

module.exports = {
    allSkills,
    create,
    addSkills,
    deleteSkill
}