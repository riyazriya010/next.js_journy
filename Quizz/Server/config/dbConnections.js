const mongoose = require('mongoose')


const dbConnect = async () => {
    await mongoose.connect(`${process.env.MONGODB_CONNECTION_STRING}quizz`)
        .then(() => { console.log('DB CONNECTED SUCCESSFULLY') })
        .catch((err) => { console.error('ERROR ON CONNECTING DB', err.message) })
}

module.exports = dbConnect
