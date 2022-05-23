const db = require('../models');
const Student = db.students;
const bcrypt = require('bcrypt');

function getAllStudents(req, res) {
    Student.findAll()
    .then(data => {
        res.send(data)
    })
    .catch(err => {
        res.send({message: err.message || "Error getting students......."})
    })
}

function getOneStudent(req, res){
    const id = req.params.id;

    Student.findByPk(id)
    .then(data => {
        if(data) {
            res.send(data);
        }
        else{
            res.status(400).send({message: `Cannot find Student with id: ${id} 😢`});
        }
    })
    .catch(err => {
        res.status(500).send({message: "Error getting details 😢"})
    })
}

function createStudent(req, res) {
    if(!req.body.name) {
        res.send("Name field cannot be empty.. try again😢")
    }
    Student.create({
        name: req.body.name,
        email: req.body.email,
        phone_num: req.body.phone_num,
        password: bcrypt.hashSync(req.body.password, 8)
    })
    .then(data => {
        res.send({
            message: `Student created successfully😊`,
            data
        })
    })
    .catch(err => {
        res.send({
            message: err.message || "Some error occured😢"
        })
    })
}

function updateStudent(req, res){
    const id = req.params.id;

    Student.update(req.body, {where: {id: id}})
    .then(num => {
        if(num == 1){
            res.send({
                message: "Successfully Updated Student"
            })
        }
        else{
            res.send({message: `Can't update student with id: ${id}😢. Something has gone wrong....`})
        }
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || `Can't update Student with id: ${id}`
        })
    })
}

function deleteStudent(req, res){
    const id = req.params.id;

    Student.destroy({where: {id: id}})
    .then(num => {
        if(num == 1){
            res.send({message: "Student deleted succesfully"})
        }
        else{
            res.send({message: `Something went wrong! Can't delete student with id: ${id} 😢`})
        }
    })
    .catch(err => {
        res.status(500).send({message: err.message || `Can't update Student with id: ${id}`});
    })
}

module.exports = {
    getAllStudents,
    getOneStudent,
    createStudent,
    updateStudent,
    deleteStudent
}