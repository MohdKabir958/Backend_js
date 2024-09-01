require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

const githubData = {
    "login": "MohdKabir958",
    "id": 174866750,
    "node_id": "U_kgDOCmxBPg",
    "avatar_url": "https://avatars.githubusercontent.com/u/174866750?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/MohdKabir958",
    "html_url": "https://github.com/MohdKabir958",
    "followers_url": "https://api.github.com/users/MohdKabir958/followers",
    "following_url": "https://api.github.com/users/MohdKabir958/following{/other_user}",
    "gists_url": "https://api.github.com/users/MohdKabir958/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/MohdKabir958/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/MohdKabir958/subscriptions",
    "organizations_url": "https://api.github.com/users/MohdKabir958/orgs",
    "repos_url": "https://api.github.com/users/MohdKabir958/repos",
    "events_url": "https://api.github.com/users/MohdKabir958/events{/privacy}",
    "received_events_url": "https://api.github.com/users/MohdKabir958/received_events",
    "type": "User",
    "site_admin": false,
    "name": null,
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 8,
    "public_gists": 0,
    "followers": 1,
    "following": 4,
    "created_at": "2024-07-06T09:24:07Z",
    "updated_at": "2024-08-06T10:38:08Z"
  }


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter',(req,res)=>{
    res.send("Welcome to Twitter ")
})
app.get('/login',(req,res)=>{
res.send("login Sucessfull !")
})
app.get('/youtube',(req,res)=>{
    res.send("Welcome to Youtube ")
})
app.get('/github',(req,res)=>{
    res.json(githubData)
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})