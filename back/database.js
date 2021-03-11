const mongoose = require('mongoose')

mongoose.connect(`mongodb+srv://Miguel:12345@red-volunteer.3yom2.mongodb.net/red-volunteer?retryWrites=true&w=majority`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
})
.then(db => console.log(`Database is running in port:${db.connections[0].port}`))
.catch(err => console.error(err.message))

