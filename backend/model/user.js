var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var aggregatePaginate = require('mongoose-aggregate-paginate-v2');

//mongoose.connect('mongodb://localhost:27017/usarmy').then(() => {

    mongoose.connect('mongodb+srv://maoyihui:4phixzV6OYoxlAwb@cluster0-ot7w2.mongodb.net/maoyihui').then(() => {
   // mongoose.connect('mongodb://maoyihui:4phixzV6OYoxlAwb@cluster0-shard-00-00-ot7w2.mongodb.net:27017,cluster0-shard-00-01-ot7w2.mongodb.net:27017,cluster0-shard-00-02-ot7w2.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority').then(() => {
        console.log('Connected to USarmy DB');
    })
    .catch(error => {
        console.error('Connection to DB Failed');
        console.error(error.message);
        process.exit(-1);
    });;
 
 
//究竟这里放不放number 和count 好，不放的话怎么sort 
var Users   = new Schema({
    avatar: String,
    name: String,
    gender: String,
    rank: String,
    date: String,
    phone: String,
    email: String,
    superior: {type: Schema.Types.ObjectId, ref: 'users'},
    //subs: { type: Array, default: void 0 },
    subs: [{type: Schema.Types.ObjectId, ref: 'users'}],
    supname: String
});
 
Users.plugin(aggregatePaginate);
module.exports  = mongoose.connection.model('user', Users);



