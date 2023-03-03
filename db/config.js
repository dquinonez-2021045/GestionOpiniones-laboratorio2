
const mongoose = require('mongoose');

const dbConection = async () => {
    try {
        //?FALTABA ESTA LINEA - - - - - - - 
        mongoose.set("strictQuery", false);
        //? - - - - - - - - - - - - - - - -
        await mongoose.connect(process.env.MONGODB_CNN);
        console.log('Db Online');

    } catch (error) {
        console.log(error);
        throw new Error('Error al inicializar la DB');
    }
}

module.exports = {
    dbConection
}