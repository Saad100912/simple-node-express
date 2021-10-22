const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
    res.send("This is a node project. My name is saad");
});

const users = [
    {
        id: 0,
        name: "Saad",
        email: "saad@gmail.com",
        phone: "93955555549",
    },
    {
        id: 1,
        name: "Abdur Rahman",
        email: "abdrrahman@gmail.com",
        phone: "75332849",
    },
    {
        id: 2,
        name: "Ibne Mijan",
        email: "ibnemijan@gmail.com",
        phone: "33645489",
    },
    {
        id: 3,
        name: "Saad00",
        email: "saad00@gmail.com",
        phone: "6435488239",
    },
    {
        id: 4,
        name: "Saad100912",
        email: "saad100912@gmail.com",
        phone: "4856444849",
    },
    {
        id: 5,
        name: "Saad2016",
        email: "saad2016@gmail.com",
        phone: "58678849",
    },
];

app.get("/users", (req, res) => {
    const search = req.query.search;
    if (search) {
        const searchResults = users.filter((user) =>
            user.name.toLocaleLowerCase().includes(search)
        );
        res.send(searchResults);
    } else {
        res.send(users);
    }
});

// app.METHOD
app.post("/users", (req, res) => {
    const newUser = req.body;
    newUser.id = users.length + 1;
    users.push(newUser);
    console.log("Sending data", req.body);
    // res.send(JSON.stringify(newUser));
    res.json(newUser);
});

app.get("/users/:id", (req, res) => {
    const id = req.params.id;
    const user = users[id];
    res.send(user);
});

app.get("/fruits/mangoes/fazli", (req, res) => {
    res.send("Delicious mango");
});

app.listen(port, () => {
    console.log("listening to port", port);
});
