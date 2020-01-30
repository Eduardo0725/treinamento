const Client = require('../../models/client');
//const axios = require('axios');

module.exports = {
    
    async story(request,response){
        const { nome, idade, cpf, senha } = request.body;

        let ClientID = await Client.findOne({ cpf })

        if (!ClientID){
            ClientID = await Client.create({
                nome,
                idade,
                cpf,
                senha,
            })
        }
        return response.json(ClientID);
    }
}

/*
function posicao(){
    const { latitude, longitude } = coords;
    return position;
}

timeOut(posicao);

*/