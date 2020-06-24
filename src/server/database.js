const mongoose = require('mongoose')

const URI = 'mongodb://localhost/mean-tasks'
const config = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}

mongoose.connect(URI, config)
    .then(db => console.log('DB is connected'))
    .catch(err => console.error(err))

module.exports = mongoose