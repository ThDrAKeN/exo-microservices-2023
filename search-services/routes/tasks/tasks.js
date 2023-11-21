const router = require("express").Router();


// get all tasks
router.route("/").get((req, res) => {
    res.json(tasks);
});

router.route("/:id").get((req, res) => {
    const id = req.params.id;
    const task = tasks.find(task => task.id == id);
    res.json(task);
});

router.route("/name/:name").get((req, res) => {
    const name = req.params.name;
    const task = tasks.find(task => task.name == name);
    res.json(task);
});


module.exports = router;





let tasks = [
    {
        "id": 1,
        "name": "1",
        "description": "task1 description",
        "status": "open",
        "event_id": 1,
        "user_id": 1
    },
    {
        "id": 2,
        "name": "1",
        "description": "task2 description",
        "status": "open",
        "event_id": 1,
        "user_id": 1
    },
    {
        "id": 3,
        "name": "task3",
        "description": "task3 description",
        "status": "open",
        "event_id": 2,
        "user_id": 2
    },
    {
        "id": 4,
        "name": "task4",
        "description": "task4 description",
        "status": "open",
        "event_id": 2,
        "user_id": 2
    }
]