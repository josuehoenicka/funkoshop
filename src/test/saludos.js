function saludar(name){
    return `Hola ${name}`;
}

function saludarMundo(){
    return `Hola Mundo`;
}

module.exports = {
    saludar: saludar,
    saludarMundo: saludarMundo
}

// module.exports.saludar = saludar;
// module.exports.saludarMundo = saludarMundo;