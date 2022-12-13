const { checkSchema } = require('express-validator');
module.exports = {
    signup: checkSchema({
        name: {
            trim: true,
            isLength:{
                options: { min: 2 } 
            },
            errorMessage: 'Nome precisa ter pelo menos 2 caracteres'
        },
        sobrenome: {
            trim: true,
            isLength:{
                options: { min: 2 } 
            },
            errorMessage: 'Sobrenome precisa ter pelo menos 2 caracteres'
        
        },
        email: {
            isEmail: true,
            normalizeEmail: true,
            errorMessage: 'Email invalido'
        },
        password: {
            isLength: {
                options: { min: 2 }
            }, 
            errorMessage: 'Senha precisa ter pelo menos 2 caracteres'
        }
    })
}