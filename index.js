const express = require('express');
const { getAll, createEnvironment, deleteEnvironment, updataEnvironment } = require('./service/servise.js');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.get('/', (request, response) => {
    try {
        const data = getAll();
        response.send(data);
    } catch (error) {
        response.send(error.message);
    }
});

app.post('/', (request, response) => {
    try {
        const { label, category, priority } = request.body;
        const data = createEnvironment(label, category, priority);
        response.send(data);
    } catch (error) {
        response.send(error.message);
    }
});

app.put('/:id', (request, response) => {
    try {
        const { id } = request.params;
        const { label, category, priority } = request.body;
        const data = updataEnvironment(id, label, category, priority);
        response.send(data);
    } catch (error) {
        response.send(error.message);
    }
});


app.delete('/:id', (request, response) => {
    try {
        const { id } = request.params;
        const data = deleteEnvironment(id);
        response.send(data);
    } catch (error) {
        response.send(error.message);
    }
});

app.listen(3000, () => console.log('server is running'));

