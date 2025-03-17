import express from "express"

const app = express()

const PORT = process.env.PORT || 3000

app.get("/", (req, res) => {
    res.send("Server is Ready!")
})

app.get("/api/jokes", (req, res) => {
    const jokes = [
        {
            id:1,
            title:"First Joke",
            content: "Why did the scarecrow win an award? Because he was outstanding in his field!",
        },
        {
            id:2,
            title:"Second Joke",
            content: "Why don't scientists trust atoms? Because they make up everything!",
        },
        {
            id:3,
            title:"Third Joke",
            content: "Why did the bicycle fall over? Because it was two-tired!",
        },
        {
            id:4,
            title:"Fourth Joke",
            content: "Why don't skeletons fight each other? They don't have the guts!",
        },
        {
            id:5,
            title:"Fifth Joke",
            content: "What do you call fake spaghetti? An impasta!",
        },
    ];
    res.send(jokes)
})

app.listen(PORT, () => {
    console.log(`Server is running on port https://localhost:${PORT}`)
})