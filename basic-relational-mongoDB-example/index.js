const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/user-save-example')
.then(() => console.log('Now connected to MongoDB!'))
.catch(err => console.error('Something went wrong', err))



const User = mongoose.model('User', new mongoose.Schema({
  username: String,
  email: String,
}))

const Saved = mongoose.model('Saved', new mongoose.Schema({
  game: Object,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
}))

async function createUser(username, email) {
  const user = new User({
    username,
    email
  })
  const result = await user.save()
  seed(username, result._id)
}

async function createSaved(game, user) {
  const saved = new Saved({
    game,
    user
  })
  const result = await saved.save()
}

async function listSaveds() {
  const saveds = await Saved
  .find({})
  console.log(saveds)
}

// 1.
// createUser( 'Bob', 'Bob@mail.com' )
// createUser( 'Jordan', 'Jordan@mail.com' )
//
// function seed(username, id) {
//   createSaved( { game: username+" First Game Saved" }, id)
//   createSaved( { game: username+" Another Game!" }, id)
//   createSaved( { game: username+" BOY! Gamesss!" }, id)
// }

// 2.
listSaveds()
