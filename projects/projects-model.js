const db = require('../data/db-config.js');

function findProjects() {
    return db('projects');
}

function findProjectById(id){
    return db('projects as p')
        .where({ 'p.id':id })
        .then(project => {
            const tasks = findTasksById(id)
            return ( {project, tasks}
            )
        })

    }

function findTasksById(id){
    return db('tasks')
        .join('tasks as t', 't.project_id', 'p.id')
        .where( {'t.project_id': id })
}

function findResourcesById(id){
    return db('resources')
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
    findTasksById,
    findResourcesById,
    addProject,
    addResource,
    findResources,
    findTasks,
    addTask,
    // update,
    // remove,
    // add
};