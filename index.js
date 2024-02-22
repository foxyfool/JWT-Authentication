const express = require('express'); 
const app = express();


require("dotenv").config();
const PORT = process.env.PORT || 3000;


app.use(express.json()); //son parse 

// cookie parse - cookie paser

require("./config/database").connect();

// route and mount 

const user = require("./routes/user");
app.use("/api/v1",user);


const cookieParser = require('cookie-parser');
app.use(cookieParser());


app.listen(PORT,()=>{
    console.log(`APP IS LISTENING AT ${PORT}`);
})


// cookie parser ?
// JWT SIGN / VERIFY / COMPARE
// 3 ways token fetch cookie /  body  / header (most SECURE HEADER WAY) BEARER TOKEN
// testing of the above 