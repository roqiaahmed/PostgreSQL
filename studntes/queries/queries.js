const getAllStudents = 'SELECT * FROM student';
const getStudentById = 'SELECT * FROM student WHERE id = $1';
const emailFound = 'SELECT * FROM student WHERE email = $1';
const createStudent = 'INSERT INTO student (name, email) VALUES($1,$2)';
const deleteStudent = 'DELETE FROM student WHERE id = $1';
const updateStudent = 'UPDATE student SET name = $1, email = $2 WHERE id = $3';
module.exports = {
  getAllStudents,
  getStudentById,
  emailFound,
  createStudent,
  deleteStudent,
  updateStudent,
};
