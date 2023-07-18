
const path = require('path');


function renderHome(req, res) {
    const filePath = path.join(__dirname, '../views/home.html');
    res.sendFile(filePath);
  }