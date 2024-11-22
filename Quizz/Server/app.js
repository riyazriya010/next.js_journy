require('dotenv').config()
const Hapi = require('@hapi/hapi')
const dbConnect = require('./config/dbConnections.js')


dbConnect()

const init = async () => {
    const server = Hapi.server({
        port: process.env.PORT || 4003,
        host: 'localhost'
    })

    server.route({
        method: 'GET',
        path: '/',
        handler: (request, h) => {
            return 'hello world'
        }
    })

    await server.start()
    console.log(`Server running on ${server.info.uri}`)
}

process.on('unhandledRejection', (err) => {
    console.error(`unhandled rejection ${err.message}`)
    process.exit(1)
})

init();