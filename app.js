const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use("/images", express.static(__dirname + "/images/"));

// Route for the "/" page
app.get('/', (req, res) => {
   res.sendFile('index.html');
});

// Start the server
const port = 3000 || process.env.PORT;
app.listen(port, () => {
   console.log(`Server is running on port ${port}`);
});