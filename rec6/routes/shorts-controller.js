const Short = require('../models/Short');
const User = require('../models/User');

async function getAll(){
  const data = await Short.find({});
  return data;
}

async function findOne(name){
  try{
    const short = await Short.find({short_name: name}); //We make sure that names are unique
    return short;
  } catch(err) {
    return false;
  }
}

async function getByAuthor(author){
  try{
    //get user id from user name
    const user = await User.find({user_name: author});
    const user_id = user._id;
    const shorts = await Short.aggregate([
      {$lookup:
        {
          from: 'Short',
          localField: 'short_creator_id',
          foreignField: '_id',
          as: 'User'
        }
      },
      {$match:
        {
          short_creator_id: user_id
        }
      }
    ]);
    return shorts;
  } catch(err){
    return false;
  }
}

async function addOne(url, name, author_id) {
    const short = new Short({
        short_original_url: url,
        short_name: name,
        short_creator_id: author_id//put user id here
    });
    try {
        await short.save();
        return short;
    } catch(err) {
        return false;
    }     
} 

async function updateOne(new_url, name){
  try{
    const short = await Short.find({short_name: name});
    short.short_original_url = new_url;
    await short.save();
    return short;
  } catch(err) {
    return false;
  }
}

async function incrementOne(name){
  try{
    const short = await Short.find({short_name: name});
    short.short_visit_count++;
    await short.save();
    return short;
  } catch(err) {
    return false;
  }
}

//add deleteOne
async function deleteOne(name){
  try{
    const short = await Short.deleteOne({short_name: name});
    return short;
  } catch(err) {
    return false;
  }
}

module.exports = Object.freeze({
  getAll,
  findOne,
  getByAuthor,
  addOne,
  updateOne,
  incrementOne,
  deleteOne
});