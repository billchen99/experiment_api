const express = require('express'), cookieParser = require('cookie-parser'); // in order to read cookie sent from client


const app = express();
app.use(cookieParser("asdasd"));

app.get('/', (req, res) => {
    console.log(req.cookies) 

    let options = {
        maxAge: 1000 * 60 * 15, // would expire after 15 minutes
        httpOnly: true, // The cookie only accessible by the web server
        signed: true // Indicates if the cookie should be signed
    }

    // Set cookie
    res.cookie('cookieName', 'cookieValue', options) // options is optional
    res.send('helloworld')
})

app.listen(process.env.PORT || 8080);
