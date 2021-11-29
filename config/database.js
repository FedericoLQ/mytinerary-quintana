const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    // useCreateIndex: true,
    // useFindAndModify: false
})
.then(() => console.log('Database Connected'))
.catch(err => console.log(err))