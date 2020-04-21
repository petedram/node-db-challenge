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
                const withTasks = {...projects, tasks: resTasks}
                console.log('withtasks', withTasks)
                return findProjectResourcesById(id)
                    .then(resResources => {
                        console.log('resources', resResources)
                        const withResources = {...withTasks, resources: resResources}
                        return withResources
                    })

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

function findProjectResourcesById(id){
    return db('project_resources as pr')
        .join('resources as r', 'r.id', 'pr.resource_id')
        .select('r.name', 'r.description')
        .where( {'pr.project_id': id })
}

function addProject(project) {
    return db('projects').insert(project)
}

function addResource(resource) {
    return db('resources').insert(resource)
}

function addProjectResource(resource) {
    return db('project_resources').insert(resource)
}

function findResources() {
    return db('resources');
}

function findProjectResources() {
    return db('project_resources');
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
    findProjectResourcesById,
    findProjectResources,
    addProjectResource,
    addProject,
    addResource,
    findResources,
    findTasks,
    addTask,
    // update,
    // remove,
    // add
};