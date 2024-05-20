const pool = require('../db/connect');

const {
  getAllStudents,
  getStudentById,
  createStudent,
  emailFound,
  deleteStudent,
  updateStudent,
} = require('../queries/queries');

const getStudents = (req, res) => {
  pool.query(getAllStudents, (err, result) => {
    if (err) {
      console.error('Error executing query', err);
    }
    res.send(result.rows);
  });
};

const getStudentId = (req, res) => {
  const { id } = req.params;
  pool.query(getStudentById, [id], (err, result) => {
    if (err) {
      res.send(err);
    }
    res.status(200).json(result.rows);
  });
};

const newStudent = (req, res) => {
  const { name, email } = req.body;

  pool.query(emailFound, [email], (err, result) => {
    if (err) {
      res.send(err);
    }
    const old_email = result.rows;
    if (old_email.length >= 1) {
      throw new Error('this email is exist');
    }
  });

  pool.query(createStudent, [name, email], (err, result) => {
    if (err) {
      res.send(err);
    }
    res.status(201).json('created successfuly');
  });
};

const removeStudent = (req, res) => {
  const { id } = req.params;
  pool.query(deleteStudent, [id], (err, result) => {
    if (err) {
      res.send(err);
    }
    res.status(201).json('Deleted successfuly');
  });
};

const putStudent = (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;

  pool.query(updateStudent, [name, email, id], (err, result) => {
    if (err) {
      res.send(err);
    }
    res.status(200).json('updated successfuly');
  });
};

module.exports = {
  getStudents,
  getStudentId,
  newStudent,
  removeStudent,
  putStudent,
};
