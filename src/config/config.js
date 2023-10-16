import 'dotenv/config'
let config = {}

config.server = {
    PORT: 8080 || process.env.PORT
}

config.db = {
    cs: process.env.mongodb,
    name: process.env.dbname
}

config.nodemailer= {
    key: process.env.nodemailerKey
}

export default config