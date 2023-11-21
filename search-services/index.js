const express = require('express')
const app = express()
const port = 3000


const tasks = require('./routes/tasks/tasks');


app.use('/search/tasks', tasks);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})



let events = [
    {
        "id": 1,
        "name": "event1",
        "description": "event1 description",
        "status": "open",
        "date": "2020-01-01",
        "user_id": 1
    },
    {
        "id": 2,
        "name": "event2",
        "description": "event2 description",
        "status": "open",
        "date": "2020-01-01",
        "user_id": 2
    },
    {
        "id": 3,
        "name": "event3",
        "description": "event3 description",
        "status": "open",
        "date": "2020-01-01",
        "user_id": 3
    },
    {
        "id": 4,
        "name": "event4",
        "description": "event4 description",
        "status": "open",
        "date": "2020-01-01",
        "user_id": 4
    }
]

let users = [
    {
        "id": 1,
        "name": "user1",
        "lastname": "user1 lastname",
        "email": "user@email.com",
    },
    {
        "id": 2,
        "name": "user2",
        "lastname": "user2 lastname",
        "email": "user@email.com",
    }
]
