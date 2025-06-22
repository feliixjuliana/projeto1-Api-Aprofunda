const express = require('express');
const router = express.Router();
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

const tasks = [];

const getTasks = router.get('/tasks', (req, res) => {
    res.status(200).json(tasks);
});

const postTasks = router.post('/tasks', (req, res) => {
    const task = {
        id: req.body.id,
        title: req.body.title,
        description: req.body.description
    };

    tasks.push(task);
    res.status(201).json({ message: "Tarefa criada com sucesso!!" })
});

const getTasksId = router.get('/tasks/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const task = tasks.find((t) => t.id === id);

    if (!task) return res.status(404).json({ message: `Tarefa com id ${id} não encontrada` });
        
    res.status(200).json(task);
});

const putTasks = router.put('/tasks/:id', (req, res) => {

    const id = parseInt(req.params.id);
    const { title, description } = req.body;

    const task = tasks.find((task) => task.id === id);

    if (!task) {
        return res.status(404).json({ message: `Tarefa com id ${id} não encontrada` })
    }

    if ((title != null) && (description != null)) {
        task.title = title;
        task.description = description;
    }


    res.json({ message: `Tarefa com o id ${id} editada com sucesso` });
});

const deleteTasks = router.delete('/tasks/:id', (req, res) => {
    const id = parseInt(req.params.id);

    const task = tasks.find((task) => task.id === id);
    if (!id) return res.status(404).json({ message: `Tarefa com id ${id} não encontrada` });

    tasks.splice(task, 1);

    res.json({message: `Tarefa com id ${id}, apagada!! `})
})

app.use(getTasks);
app.use(postTasks);
app.use(getTasksId);
app.use(putTasks);
app.use(deleteTasks);


app.listen(3000, () => {
    console.log('Aplicação rodando na porta 3000');
});

/*Anotações extras: O filter ele remove o que deseja, mas cria
 um array novo, já o splice ele remove do próprio array.*/