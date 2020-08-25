// server.js
// where your node app starts

// we've started you off with Express (https://expressjs.com/)
// but feel free to use whatever libraries or frameworks you'd like through `package.json`.
const express = require("express");
const app = express();
const port = 3000


app.use(express.urlencoded({ extended: true }))
let lists = [
  {name: 'cooking'},
  {name: 'studyng'},
  {name: 'cleaning'},
  {name: 'Wash disk'}
]

// https://expressjs.com/en/starter/basic-routing.html
app.get("/todos", (request, response) => {
  response.render('./index.pug',{
    lists : lists
  })
});
app.get("/todos/search", (req, res) => {
  let q = req.query.q;
  let matchList = lists.filter((list) =>{
    return list.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
  });
  res.render("./index.pug",{
    list: matchList,
    question: q
  });
});
app.get("/todos/create", (req,res) => {
    res.render("./create.pug");

  })
app.post("/todos/create", (req,res) => {
    lists.push(req.body);
    res.redirect('/todos');
    
  })

// listen for requests :)
app.listen( port, () => {
  console.log("Server listening on port " + port);
});
