const Short = require('../models/Short');

export async function getAll(){
  const query = {};
  const data = await Short.find(query);
  return data;
}

export async function addOne(url, name) {
    const short = new Short({
        short_original_url: url,
        short_name: name,
    });
    try {
        await short.save();
        return short;
    } catch(err) {
        return false;
    }     
} 

//TODO: USE NAME INSTEAD OF ID

export async function updateOne(short_id, new_url){
  try{
    const short = await Short.findById(short_id);
    short.short_original_url = new_url;
    await short.save();
    return short;
  } catch(err) {
    return false;
  }
}

export async function incrementOne(short_id){
  try{
    const short = await Short.findById(short_id);
    short.short_visit_count++;
    await short.save();
    return short;
  } catch(err) {
    return false;
  }
}

//add deleteOne
