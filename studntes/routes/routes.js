const express = require('express');
const router = express.Router();
const {
  getStudents,
  getStudentId,
  newStudent,
  removeStudent,
  putStudent,
} = require('../controllers/student');

router.get('/', getStudents);
router.post('/', newStudent);

router.get('/:id', getStudentId);
router.put('/:id', putStudent);
router.delete('/:id', removeStudent);

module.exports = router;
