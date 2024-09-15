
// Javascript have 2 ways to import files 
// 1. Common JS - Using require() function
//const express = require('express');
// 2. Module JS - Using import keyword (ES6)
// We need to add 'type':"module" in package.json
//import express from 'express';

import express from 'express';
const app =express();

// app.get('/',(req,res) =>{
//     res.send('Server is Ready!');
// });

//get a list of 5 jokes
app.get('/api/jokes',(req,res) =>{
    const jokes = [
        {
            id:1,
            joke:'Why was the math book sad?',
            punchline:'Because it had too many problems.',   
        },
        {
            id:2,
            joke:'Why did the scarecrow win an award?',
            punchline:'Because he was outstanding in his field.',
        },
        {
            id:3,
            joke:'What do you call a fake noodle?',
            punchline:'An impasta.',
        },
        {
            id:4,
            joke:'Why did the bicycle fall over?',
            punchline:'Because it was two-tired.',
        },
    ]
    res.json(jokes);
});
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server at http://localhost:${port}`)
  })
