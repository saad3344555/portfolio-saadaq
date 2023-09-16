const express = require('express');
const path = require("path");
const cors = require('cors');

const app = express();
const port = process.env.PORT || 8080; // Choose the port you want to run your server on


app.use(cors());


app.use(express.static(path.join(__dirname, '/public')));


app.get('/', (req, res) => {
  // Add logic to serve your portfolio homepage
  res.sendFile(__dirname + '/public/main_page.html')
});


app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
