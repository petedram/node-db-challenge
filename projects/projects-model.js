const db = require('../data/db-config.js');

function findProjects() {
    return db('projects');
}

function findProjectById(id){
    return db('projects as p')
        .where({ id })
        .then(projects => {
            return findTasksById(id)
            .then(resTasks => {
                console.log('projects', projects)
                const withTasks = {...projects, tasks: resTasks}

                // const final = dbResponse.concat(tasks)
                return withTasks
            })       
        })
    }

    //takes in the project id and return tasks
function findTasksById(id){
    return db('tasks')
        .where( {'project_id': id })
}

function findResourcesById(id){
    return db('resources')
    .where( {'project_id': id })
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