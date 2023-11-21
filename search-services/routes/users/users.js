const app = require("express").Router();
// search a user by id or name
app.get('/search/user', (req, res) => {
    const { id, name } = req.query
    // get user by id from users array
    if ((id != null) && (id != "")) {
        res.send(users.find(user => user.id == id))
    } else if ((name != null) && (name != "")) {
        let user = users.find(user => user.name == name)
        if (user != null) {
            res.send(user)
        } else {
            res.send("user not found")
        }
    } else {
        res.send("no data provided")
    }
}
)
module.exports = app;