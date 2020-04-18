const db = require('../data/db-config.js');

function findProjects() {
    return db('projects');
}

function findProjectById(id){
    return db('projects')
        .where( {id} )
        .first();
}


function addProject(project) {
    return db('projects').insert(project)
}

function addResource(resource) {
    return db('resources').insert(resource)
}

function findResources() {
    return db('resources');
}

function addTask(task) {
    return db('tasks').insert(task)
}

function findTasks() {
    return db('tasks');
}

module.exports = {
    findProjects,
    findProjectById,
    addProject,
    addResource,
    findResources,
    findTasks,
    addTask,
    // update,
    // remove,
    // add
};