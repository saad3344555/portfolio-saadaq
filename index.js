const express = require('express');
const path = require("path");
const app = express();
const port = 3000; // Choose the port you want to run your server on

app.use(express.static(path.join(__dirname, '/public')));


app.get('/', (req, res) => {
  // Add logic to serve your portfolio homepage
  res.sendFile(__dirname + '/public/main_page.html')
});

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
