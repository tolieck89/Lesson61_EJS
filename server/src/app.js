import express from "express";
import cors from "cors";
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import articles from "./articles.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const PORT = 3000;

const app = express();
app.use(express.json());
app.use(cors());

// app.set('view engine', 'pug');
app.set('view engine', 'ejs');
app.set('views',  path.join(__dirname, 'views'));

// const users = [{ id: 1, name: "Tolieck" }, { id: 2, name: "Max" }, { id: 3, name: "Irka" }, 
//     { id: 4, name: "Slash" }, { id: 5, name: "Axl Rose" }, { id: 6, name: "Sam Carter" },
//     { id: 7, name: "Math Tack" }, { id: 8, name: "Alexia Rodrigez" }, { id: 9, name: "Anissa Rodrigez" }, { id: 10, name: "Lana Del Rey" }];


// app.get('/api/users', (req, res) => {
//     const title = "Users list:"; 
    
//     res.render('users', { users, title });
// })
// app.get('/api/users/:id', (req, res) => {
//     const id = req.params.id;
//     const user = users[id-1];

//        const title = "User info:"; 

//        res.render('users', {user, title});
// })

app.get('/api/articles', (req, res) => {
    const title = "Articles:"; 
     res.render('articles', { articles, title });
})

app.get('/api/articles/:id', (req, res) => {
    const id = req.params.id;
      const article = articles[id-1];

  
        if (!article) {
        return res.status(404).send("Article not found");
    }
        const title = `${article.id} article:`
res.render('articles', { article, title });

})

app.listen(PORT, () =>{
    console.log(`Сервер запущено на http://localhost:${PORT}`);
})