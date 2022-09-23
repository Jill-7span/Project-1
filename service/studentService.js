const model = require('../models/db')
// get student
exports.getStudent = async (id) => {
    return await model.student.findOne({
        where : {id:id},
        include: [
        {
            model: model.mentor
        }
    ]});
};

// get students
exports.getStudents = async (condition) => {
    return await model.student.findAll({
        ...condition,
            include: [
                {
                    model: model.mentor
                }
            ]
    });
};

// insert student
exports.insertStudent = async (data) => {
    return await model.student.create(data);
};

// update student
exports.updateStudent = async (id,update) => {
    return await model.student.update(update,{where:{id:id}});
};

// delete student
exports.deleteStudent = async (data) => {
    return await model.student.destroy({});
};
