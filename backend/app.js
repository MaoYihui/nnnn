const mongoose  = require('mongoose');
//mongoose.connect('mongodb://localhost:27017/usarmy');
mongoose.connect('mongodb+srv://maoyihui:4phixzV6OYoxlAwb@cluster0-ot7w2.mongodb.net/maoyihui');

//mongoose.connect('mongodb://maoyihui:4phixzV6OYoxlAwb@cluster0-shard-00-00-ot7w2.mongodb.net:27017,cluster0-shard-00-01-ot7w2.mongodb.net:27017,cluster0-shard-00-02-ot7w2.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority');
const express = require('express');
var app = express();


const port = process.env.PORT || 8080;   

app.use((req, res, next)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Resource-With, Content-Type, Accept");// prevent cors, cross origin request
	res.header("Access-Control-Allow-Methods", "*");
    console.log("requst url = " + req.url);
	next();
})

const multer = require('multer');
const cors = require('cors');
//photo storage
var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, '../frontend/src/components/userList/')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname)
    }
});
const upload = multer({
    storage
})
app.use(cors());


app.use(cors());

app.post('/upload', upload.single('image'), (req, res) => {
    if (req.file){
        console.log(req.file.filename);
        res.json({
            imageUrl: `${req.file.filename}`
        });
    }
    else{
        res.status("409").json("No Files to Upload.");
    }
});


const userRouter = require('./router/userApi');
app.use(express.json());



app.use('/api', userRouter);

app.get('/', (req, res) => {
    res.json({ message: 'Welcome to Userlist!' });   
});

app.listen(port, () => {
    console.log('Userlist happens on port ' + port)}
);