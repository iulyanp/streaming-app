const express = require('express');
const fs = require('fs');
const cors = require('cors');
const path = require('path');
const app = express();
app.use(cors());


// add after 'const app = express();'
app.get('/video', (req, res) => {
    res.sendFile('assets/video1.mp4', { root: __dirname });
});


const Videos = require('./routes/Videos');
app.use('/videos', Videos);


// add to end of app.js file
app.listen(5000, () => {
    console.log('Listening on port 5000!')
});

