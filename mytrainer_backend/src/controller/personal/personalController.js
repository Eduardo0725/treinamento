const Personal = require('../../models/personal');
//const axios = require('axios');

module.exports = {
    async index(request,response){
        const { cpf, senha } = request.query;
        let PersonalID = await Personal.find({ cpf });
        if(PersonalID){
            return response.json(PersonalID);
        }else{
            return null;
        }
    },

    async story(request,response){
        const { nome, idade, area, cpf, senha } = request.body;

        let PersonalID = await Personal.findOne({ cpf })

        if (!PersonalID){
            PersonalID = await Personal.create({
                nome,
                idade,
                area,
                cpf,
                senha,
            })
        }
        return response.json(PersonalID);
    }
}