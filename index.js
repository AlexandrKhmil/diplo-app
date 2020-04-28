const express = require('express');
const {spawn} = require('child_process');
const app = express();
const path = require('path');
const port = process.env.PORT || 3001;
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

app.use(express.json({ extended: true }));

app.use('/api/account', require('./routes/account.routes'));
app.use('/api/algorithm', require('./routes/algorithm.routes'));

app.use('/', express.static(path.join(__dirname, 'client', 'build')));
app.get('*', (req, res) => 
  res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')));

// app.get('/1', (req, res) => {
//   var dataToSend;
//   // spawn new child process to call the python script
//   const python = spawn('python', ['script.py']);
  
//   // collect data from script
//   python.stdout.on('data', function (data) {
//     console.log('Pipe data from python script ...');
//     dataToSend = data.toString();
//   });

//   // in close event we are sure that stream from child process is closed
//   python.on('close', (code) => {
//     console.log(`child process close all stdio with code ${code}`);
//     // send data to browser
//     res.send(dataToSend);
//   });
// });

// app.get('/2', (req, res) => {
//   var dataToSend;
//   // spawn new child process to call the python script
//   const python = spawn('python', ['script2.py', 'node.js', 'python']);
  
//   // collect data from script
//   python.stdout.on('data', function (data) {
//     console.log('Pipe data from python script ...');
//     dataToSend = data.toString();
//   });

//   // in close event we are sure that stream from child process is closed
//   python.on('close', (code) => {
//     console.log(`child process close all stdio with code ${code}`);
//     // send data to browser
//     res.send(dataToSend);
//   });
// });

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
