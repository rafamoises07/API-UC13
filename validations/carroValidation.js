import joi from 'joi'
 
export const modeloCarro = joi.object({
    nome: joi.string().required().messages({
        'string.min' : "O nome do carro deve ter pelo menos três(3) caracteres.",
        'any.required' : "O nome do carro é obrigatório.",
    }),                      // nome deve ser uma string e é obrigatório
    sigla: joi.string().min(3).required().messages({
        'string.length' : "A sigla deve ter pelo menos três(3) caracteres.",
        'any.required' : "A sigla é obrigatória.",
    }),               // sigla deve ser uma string com no mínimo 3 caracteres
    velocidadeMaxima: joi.number().min(2).required().messages({
        'number.min' : "A velocidade maxima deve maior ou igual a 1.",
        'any.required' : "A velocidade é obrigatória."
    }),    // velocidadeMaxima deve ser um número maior ou igual a 0
    potencia: joi.number().min(1).required().messages({
        'number.min' : " a potencia deve ser maior ou igual a 1.",
        'any.required' : "A potencia é obrigatoria."
    }),            // potencia deve ser um número maior ou igual a 0
    consumo: joi.number().min(0.1).required().messages({
        'number.min' : "O Consumo deve ser maior ou igual a 0.1.",
        'any.required' : "O Consumo é obrigatório"
    })              // consumo deve ser um número maior ou igual a 0
});
       
export const modeloAtualizacaoCarro = joi.object({
    nome: joi.string().min(5).messages({
        'string.length' : "O nome do carro deve 5 caracteres "
    }),                 // nome deve ser uma string e é obrigatório
    sigla: joi.string().min(3).messages({
        'string.min' : "A sigla deve ter no minimo 3 caracteres"
    }),               // sigla deve ser uma string com no mínimo 3 caracteres
    velocidadeMaxima: joi.number().min(2).messages({
        'string.min': "A velocidade deve ter pelo menos 2 caracter"
    }),    // velocidadeMaxima deve ser um número maior ou igual a 0
    potencia: joi.number().min(2).messages({
        'string.min' : "A potencia deve ter no minimo 2 caracteres"
    }),            // potencia deve ser um número maior ou igual a 0
    consumo: joi.number().min(0.1).messages({
        'string.min' : "O consumo deve ter no minimo 1 caracter"
    }),              // consumo deve ser um número maior ou igual a 0
});