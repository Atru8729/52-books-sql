const db = require('./db');
const Author = require('./Author');
const Books = require('./Books');

const app = {}

app.init = async () => {
    // prisijungti prie duomenu bazes
    const conn = await db.init({
        host: 'localhost',
        user: 'root',
        database: 'books',
    });

    // LOGIC BELOW
    const jonasJ = await Author.create(conn, 'Jonas', 'Jonaitis');
    console.log(jonasJ);

    const vaidasV = await Author.create(conn, 'Vaidas', 'Vaidaitis');
    console.log(vaidasV);

    const authors = await Author.listAll(conn);
    console.log(authors);

    const uniqAuthor = await Author.findById(conn, 1);
    console.log(uniqAuthor);

    const uniqAuthor2 = await Author.findById(conn, 99);
    console.log(uniqAuthor2);
}

app.init();

module.exports = app;