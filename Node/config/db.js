const mongoose = require('mongoose');

const dbConnect = async (dbName) => {
    const uri = `mongodb+srv://myAtlasDBUser:123arv123@myatlasclusteredu.ykjqkzs.mongodb.net/${dbName}?retryWrites=true&w=majority&appName=myAtlasClusterEDU`;
    await mongoose.connect(uri); 
}

module.exports = dbConnect;
