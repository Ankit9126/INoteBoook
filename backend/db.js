const mongoose= require('mongoose');
const mongoUri="mongodb://localhost:27017/inotebook";

const connectToMongo=()=>{
 mongoose.connect(mongoUri,()=>{
    console.log("success connect");
 })
 .then(()=>console.log('connected'))
 .catch(e=>console.log(e));
}
module.exports= connectToMongo;
