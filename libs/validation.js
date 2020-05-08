const {body, query, param} = require('express-validator');

const VALIDATORS ={
    TODO:{
        CreateTodo:[
            body('name').exists().withMessage('Name is required')
            .isString().withMessage('Name must be a string')

        ],
        GetTodo: [
query('id').exists().withMessage('Id is required').isMongoId().withMessage('Id passed is not valid')
        ],
        UpdateTodo: [
            param('id').exists().withMessage('Id is required').isMongoId().withMessage('Id passed is not valid'),
             body('name').exists().withMessage('Name is required')
                    .isString().withMessage('Name must be a string')
        ],
        DeleteTodo: [
            param('id').exists().withMessage('Id is required').isMongoId().withMessage('Id passed is not valid')
             
        ]

    }
}


module.exports = VALIDATORS;
