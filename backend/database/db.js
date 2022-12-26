const mongoose = require('mongoose')

const connectDb = async()=>{
    try {
        const con = await mongoose.connect(process.env.MONGOOSE_URI)

        console.log(`Mongoosedb connected to: ${con.connection.host}`.cyan.underline)
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

module.exports = connectDb