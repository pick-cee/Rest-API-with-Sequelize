const { getAllStudents, createStudent, 
        getOneStudent, updateStudent, deleteStudent} = require('../controller/studentController')
const express = require('express');
const router = express.Router()

router.get('/', getAllStudents);
router.get('/:id', getOneStudent);
router.post('/', createStudent);
router.put('/:id', updateStudent)
router.delete('/:id', deleteStudent);

module.exports = router;