
const express = require ('express')

const router = express.Router();

const {
  register,
  getStudents,
  getStudentsById,
  updateStudentsById,
  deleteStudentsById,
  searchStudents,
  getByEmail,
  countStudents,
} = require('./student.controller');

router.post('/register', register)
router.get('/', getStudents);
router.get('/get-students/:id', getStudentsById);
router.put('/update-students/:id', updateStudentsById);
router.delete('/delete-students/:id', deleteStudentsById);
router.get('/search-students/', searchStudents);
router.get('/getByEmail/', getByEmail);
router.get('/count/', countStudents);





module.exports = router;