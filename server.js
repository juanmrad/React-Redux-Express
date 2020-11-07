const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded());
app.use(express.json());

app.get('/alive', (req, res) => {
  res.json("I'm alive");
});

app.use(express.static(__dirname + '/build'));

app.get('*', (req, res) => {
  res.sendFile(__dirname + '/build/index.html');
})

app.listen(PORT, () => {
  console.log(`My port is listening on port: ${PORT}`);
});
