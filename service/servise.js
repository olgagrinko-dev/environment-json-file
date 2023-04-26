const fs = require('fs');
const path = './storage/storage.json';

function getAll() {
    const array = JSON.parse(fs.readFileSync(path));
    if (!array.length) throw new Error('Массив пуст');
    return array;
};

function createEnvironment(label, category, priority) {
    const array = JSON.parse(fs.readFileSync(path));
    array.push({
        id: label.toLowerCase(),
        label: label,
        category: category,
        priority: priority,
    });
    fs.writeFileSync(path, JSON.stringify(array));
    return array;
};

function updataEnvironment(id, label, category, priority) {
    const array = JSON.parse(fs.readFileSync(path));
    const filtered = array.filter((elem) => elem.id != id);
    if (filtered.length !== array.length) {
        filtered.push({
            id: id,
            label: label,
            category: category,
            priority: priority,
        });       
    } else {
        throw new Error ('такого id нет');  
    };
    fs.writeFileSync(path, JSON.stringify(filtered));
    return filtered;
};

function deleteEnvironment(id) {
    const array = JSON.parse(fs.readFileSync(path));
    const filtered = array.filter((elem) => elem.id != id);
    fs.writeFileSync(path, JSON.stringify(filtered));
    return filtered;
};

module.exports = { getAll, createEnvironment, deleteEnvironment, updataEnvironment };