const { agregarPost, obtenerPost } = require("./consultas");
const express = require('express');
const cors = require('cors');

const app = express();
app.use = (express.json());

const PORT = 3000
app.listen(PORT, () => {
    console.log(`Server en puerto: http://localhost:${PORT}`);
});


app.use = (cors());


app.get("/posts", async (req, res) =>{
    const posts = await obtenerPost()
    res.json(posts)
});

app.post("/posts", async (req, res) => {
    //const { titulo, img, descripcion } = req.body
    console.log(req.body)
    await agregarPost(titulo, img, descripcion)
    res.send("Post agregado con exito")
})