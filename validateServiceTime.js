function validateServiceTime (req, res, next) {
    const horaAtual = new Date();
    const hora = horaAtual.getHours();

    //definindo horas permitidas
    const horaInicial = 8;
    const horaFinal = 18;

    if (hora < horaInicial || hora >= horaFinal){
        return res.status(403).send('Fora do horário permitido');
    } 

    next();
}
    
module.exports = validateServiceTime